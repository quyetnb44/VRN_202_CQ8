import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const GameCanvas = ({ plane, multipliers, rockets, phase }) => {
  const gameWorldRef = useRef(null)
  const containerRef = useRef(null)
  const cameraOffsetX = useRef(0)

  // Camera tracking - follow the plane
  useEffect(() => {
    if (phase === 'playing' && gameWorldRef.current && containerRef.current) {
      // Get viewport (container) width
      const viewportWidth = containerRef.current.offsetWidth
      // Game world is 200% of viewport (allows plane to move from 0 to 2.0 in normalized coordinates)
      const worldWidth = viewportWidth * 2
      
      // Calculate target camera position to center plane in viewport
      // plane.x is normalized (0 to 1.0), so multiply by worldWidth to get pixel position
      const planePixelX = plane.x * worldWidth
      const targetCameraX = planePixelX - viewportWidth * 0.5 // Center plane in viewport
      
      // Smooth camera follow with easing
      const currentCameraX = cameraOffsetX.current
      const diff = targetCameraX - currentCameraX
      cameraOffsetX.current = currentCameraX + diff * 0.1 // Smooth follow speed (lower = smoother)
      
      // Clamp camera to prevent showing empty space at start/end
      cameraOffsetX.current = Math.max(0, Math.min(cameraOffsetX.current, worldWidth - viewportWidth))
      
      // Update transform
      gameWorldRef.current.style.transform = `translateX(${-cameraOffsetX.current}px)`
    } else if (phase === 'idle') {
      // Reset camera when game resets
      cameraOffsetX.current = 0
      if (gameWorldRef.current) {
        gameWorldRef.current.style.transform = 'translateX(0px)'
      }
    }
  }, [plane.x, phase])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 overflow-hidden rounded-lg shadow-2xl"
    >
      {/* Game World Container - scrollable area */}
      <div
        ref={gameWorldRef}
        className="absolute inset-0 will-change-transform"
        style={{
          width: '200%', // Game world is 2x viewport width to allow plane to travel from 0 to 1.0
          height: '100%'
        }}
      >
      {/* Sea at bottom */}
      <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-b from-blue-500 to-blue-700"></div>
      
      {/* Ship at destination - positioned at end of game world (when plane.x = 1.0) */}
      {phase === 'playing' || phase === 'ended' ? (
        <motion.div
          className="absolute bottom-[80px] text-6xl"
          style={{
            left: '100%', // Position at end of game world (1.0 in normalized coords)
            transform: 'translateX(-50%)'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          🚢
        </motion.div>
      ) : null}

      {/* Clouds */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute text-6xl opacity-30"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 15}%`
          }}
          animate={{
            x: [0, 20, 0],
            transition: {
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          ☁️
        </motion.div>
      ))}

      {/* Multipliers */}
      {multipliers.map(mult => {
        if (mult.collected) return null
        return (
          <motion.div
            key={mult.id}
            className="absolute text-3xl cursor-pointer"
            style={{
              left: `${mult.x * 100}%`,
              top: `${mult.y * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              scale: { duration: 1, repeat: Infinity },
              rotate: { duration: 2, repeat: Infinity }
            }}
          >
            <div className="relative">
              <span className="text-yellow-400">⭐</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-yellow-600 bg-white px-1 rounded">
                +{mult.value}
              </span>
            </div>
          </motion.div>
        )
      })}

      {/* Rockets */}
      {rockets.map(rocket => {
        if (rocket.collected) return null
        return (
          <motion.div
            key={rocket.id}
            className="absolute text-3xl cursor-pointer"
            style={{
              left: `${rocket.x * 100}%`,
              top: `${rocket.y * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -360]
            }}
            transition={{
              scale: { duration: 0.8, repeat: Infinity },
              rotate: { duration: 1.5, repeat: Infinity }
            }}
          >
            <div className="relative">
              <span className="text-red-500">🚀</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-600 bg-white px-1 rounded">
                -50%
              </span>
            </div>
          </motion.div>
        )
      })}

      {/* Plane */}
      {(phase === 'playing' || phase === 'ended') && (
        <motion.div
          className="absolute text-5xl z-10"
          style={{
            left: `${plane.x * 100}%`,
            top: `${plane.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            rotate: plane.vy > 0 ? -20 : plane.vy < 0 ? 20 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          ✈️
        </motion.div>
      )}

      {/* Splash effect when crashed */}
      {phase === 'ended' && (
        <motion.div
          className="absolute bottom-[100px] text-8xl opacity-70"
          style={{
            left: `${plane.x * 100}%`,
            transform: 'translateX(-50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: [0.7, 0] }}
          transition={{ duration: 1 }}
        >
          💥
        </motion.div>
      )}
      </div>
    </div>
  )
}

export default GameCanvas

