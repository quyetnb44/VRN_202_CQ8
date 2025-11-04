import { useState, useEffect, useRef, useCallback } from 'react'

const COLLISION_DISTANCE = 0.05
const GRAVITY = 0.0003
const TERMINAL_VELOCITY = 0.008

export const useGameEngine = (speed = 1) => {
  const [phase, setPhase] = useState('idle') // 'idle' | 'playing' | 'ended'
  const [plane, setPlane] = useState({ x: 0, y: 0.5, vy: 0 })
  const [multipliers, setMultipliers] = useState([])
  const [rockets, setRockets] = useState([])
  const [counter, setCounter] = useState(10)
  const [message, setMessage] = useState('')
  const [result, setResult] = useState(null) // null | 'win' | 'lose'
  const [bet, setBet] = useState(10)
  const animationFrameRef = useRef(null)
  const lastTimeRef = useRef(null)
  const planeRef = useRef({ x: 0, y: 0.5, vy: 0 })
  const multipliersRef = useRef([])
  const rocketsRef = useRef([])
  const counterRef = useRef(10)
  const betRef = useRef(10)

  const generateEntities = useCallback(() => {
    const mults = Array.from({ length: 10 }).map((_, i) => ({
      id: `m${i}`,
      type: 'MULT',
      value: [1, 2, 5, 10, 2, 3, 4, 5][Math.floor(Math.random() * 8)],
      x: Math.random() * 0.85 + 0.1,
      y: Math.random() * 0.5 + 0.2,
      collected: false
    }))
    
    const rocks = Array.from({ length: 3 }).map((_, i) => ({
      id: `r${i}`,
      type: 'ROCKET',
      value: 0,
      x: Math.random() * 0.85 + 0.1,
      y: Math.random() * 0.5 + 0.2,
      collected: false
    }))
    
    return { multipliers: mults, rockets: rocks }
  }, [])

  const checkCollision = useCallback((px, py, ex, ey) => {
    const dx = px - ex
    const dy = py - ey
    return Math.sqrt(dx * dx + dy * dy) < COLLISION_DISTANCE
  }, [])

  const startGame = useCallback((bet, selectedSpeed) => {
    const { multipliers: newMults, rockets: newRocks } = generateEntities()
    const initialPlane = { x: 0, y: 0.5, vy: 0 }
    setMultipliers(newMults)
    setRockets(newRocks)
    setPlane(initialPlane)
    setCounter(bet)
    setBet(bet)
    setPhase('playing')
    setMessage('')
    setResult(null)
    planeRef.current = initialPlane
    multipliersRef.current = newMults
    rocketsRef.current = newRocks
    counterRef.current = bet
    betRef.current = bet
    lastTimeRef.current = performance.now()
  }, [generateEntities])

  const resetGame = useCallback(() => {
    setPhase('idle')
    const resetPlane = { x: 0, y: 0.5, vy: 0 }
    setPlane(resetPlane)
    setMultipliers([])
    setRockets([])
    setCounter(10)
    setBet(10)
    setMessage('')
    setResult(null)
    planeRef.current = resetPlane
    multipliersRef.current = []
    rocketsRef.current = []
    counterRef.current = 10
    betRef.current = 10
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }, [])

  // Sync refs with state
  useEffect(() => {
    planeRef.current = plane
  }, [plane])

  useEffect(() => {
    multipliersRef.current = multipliers
  }, [multipliers])

  useEffect(() => {
    rocketsRef.current = rockets
  }, [rockets])

  useEffect(() => {
    counterRef.current = counter
  }, [counter])

  useEffect(() => {
    if (phase !== 'playing') return

    const gameLoop = (currentTime) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime
        animationFrameRef.current = requestAnimationFrame(gameLoop)
        return
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 1000
      lastTimeRef.current = currentTime

      // Update plane position
      let newX = planeRef.current.x + deltaTime * speed * 0.15
      let newY = planeRef.current.y + planeRef.current.vy
      let newVy = planeRef.current.vy + GRAVITY * deltaTime
      
      // Limit vertical velocity
      if (newVy > TERMINAL_VELOCITY) newVy = TERMINAL_VELOCITY
      if (newVy < -TERMINAL_VELOCITY * 0.5) newVy = -TERMINAL_VELOCITY * 0.5

      // Keep plane within bounds
      if (newY < 0.05) {
        newY = 0.05
        newVy = 0
      }
      if (newY > 0.95) {
        newY = 0.95
        setPhase('ended')
        setMessage('Rơi xuống biển 🫠')
        setResult('lose')
        planeRef.current = { x: planeRef.current.x, y: newY, vy: 0 }
        setPlane(planeRef.current)
        return
      }

      // Check win condition
      if (newX >= 1.0) {
        newX = 1.0
        setPhase('ended')
        setMessage(`Đã hạ cánh! +${counterRef.current}`)
        setResult('win')
        planeRef.current = { x: newX, y: planeRef.current.y, vy: 0 }
        setPlane(planeRef.current)
        return
      }

      // Check collisions with multipliers
      multipliersRef.current.forEach(mult => {
        if (!mult.collected && checkCollision(newX, newY, mult.x, mult.y)) {
          mult.collected = true
          counterRef.current += mult.value
          setCounter(counterRef.current)
          newVy = Math.max(newVy - 0.008, -TERMINAL_VELOCITY * 0.5)
          setMultipliers([...multipliersRef.current])
        }
      })

      // Check collisions with rockets
      rocketsRef.current.forEach(rocket => {
        if (!rocket.collected && checkCollision(newX, newY, rocket.x, rocket.y)) {
          rocket.collected = true
          counterRef.current = Math.floor(counterRef.current / 2)
          setCounter(counterRef.current)
          newVy = Math.min(newVy + 0.015, TERMINAL_VELOCITY)
          setRockets([...rocketsRef.current])
        }
      })

      // Update plane ref and state
      planeRef.current = { x: newX, y: newY, vy: newVy }
      setPlane(planeRef.current)

      animationFrameRef.current = requestAnimationFrame(gameLoop)
    }

    animationFrameRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [phase, speed, checkCollision])

  return {
    phase,
    plane,
    multipliers,
    rockets,
    counter,
    message,
    result,
    bet,
    startGame,
    resetGame
  }
}

