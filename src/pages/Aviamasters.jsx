import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from 'antd'
import { useGameEngine } from '../hooks/useGameEngine'
import GameCanvas from '../components/GameCanvas'
import ControlPanel from '../components/ControlPanel'
import HUD from '../components/HUD'
import PopupResult from '../components/PopupResult'

const Aviamasters = () => {
  const [selectedSpeed, setSelectedSpeed] = useState(1)
  const {
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
  } = useGameEngine(selectedSpeed)

  const [showResult, setShowResult] = useState(false)

  // Show result popup when game ends
  React.useEffect(() => {
    if (phase === 'ended' && result) {
      setShowResult(true)
    }
  }, [phase, result])

  const handlePlay = (bet, speed) => {
    setSelectedSpeed(speed)
    startGame(bet, speed)
  }

  const handleRestart = () => {
    setShowResult(false)
    resetGame()
  }

  const handleCloseResult = () => {
    setShowResult(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            ✈️ Aviamasters Demo
          </h1>
          <p className="text-lg text-gray-600">
            Game offline - Bay qua multipliers và tránh rockets!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Game Canvas - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <div className="relative">
                <HUD counter={counter} phase={phase} message={message} />
                <GameCanvas
                  plane={plane}
                  multipliers={multipliers}
                  rockets={rockets}
                  phase={phase}
                />
              </div>
            </Card>
          </div>

          {/* Control Panel - Takes 1 column */}
          <div>
            <ControlPanel
              phase={phase}
              onPlay={handlePlay}
              onRestart={handleRestart}
              defaultBet={10}
            />

            {/* Game Info */}
            <Card className="mt-4 shadow-lg">
              <h3 className="text-lg font-semibold text-primary mb-3">
                📖 Hướng dẫn
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <strong>🎯 Mục tiêu:</strong> Hạ cánh tại tàu bên phải màn hình để thắng!
                </p>
                <p>
                  <strong>⭐ Multiplier:</strong> Thu thập để tăng điểm và đẩy máy bay lên cao hơn.
                </p>
                <p>
                  <strong>🚀 Rocket:</strong> Tránh hoặc chấp nhận giảm 50% điểm và đẩy xuống.
                </p>
                <p>
                  <strong>⚠️ Lưu ý:</strong> Nếu máy bay chạm biển, bạn sẽ thua!
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Card */}
        {phase !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <Card className="shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl mb-1">⭐</div>
                  <div className="text-sm text-gray-600">Multipliers còn lại</div>
                  <div className="text-xl font-bold text-yellow-600">
                    {multipliers.filter(m => !m.collected).length}
                  </div>
                </div>
                <div>
                  <div className="text-2xl mb-1">🚀</div>
                  <div className="text-sm text-gray-600">Rockets còn lại</div>
                  <div className="text-xl font-bold text-red-600">
                    {rockets.filter(r => !r.collected).length}
                  </div>
                </div>
                <div>
                  <div className="text-2xl mb-1">📊</div>
                  <div className="text-sm text-gray-600">Điểm hiện tại</div>
                  <div className="text-xl font-bold text-primary">{counter}</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-sm text-gray-600">Tốc độ</div>
                  <div className="text-xl font-bold text-blue-600">{selectedSpeed}x</div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Result Popup */}
      <PopupResult
        result={result}
        counter={counter}
        bet={bet}
        message={message}
        visible={showResult}
        onRestart={handleRestart}
        onClose={handleCloseResult}
      />
    </div>
  )
}

export default Aviamasters

