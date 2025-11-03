import React, { useState } from 'react'
import { Button, InputNumber, Select } from 'antd'

const ControlPanel = ({ phase, onPlay, onRestart, defaultBet = 10 }) => {
  const [bet, setBet] = useState(defaultBet)
  const [speed, setSpeed] = useState(1)

  const handlePlay = () => {
    onPlay(bet, speed)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bet (điểm bắt đầu)
          </label>
          <InputNumber
            value={bet}
            onChange={setBet}
            min={1}
            max={1000}
            className="w-full"
            size="large"
            disabled={phase === 'playing'}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tốc độ
          </label>
          <Select
            value={speed}
            onChange={setSpeed}
            className="w-full"
            size="large"
            disabled={phase === 'playing'}
          >
            <Select.Option value={1}>1x (Chậm)</Select.Option>
            <Select.Option value={2}>2x (Vừa)</Select.Option>
            <Select.Option value={3}>3x (Nhanh)</Select.Option>
          </Select>
        </div>

        <Button
          type="primary"
          size="large"
          block
          onClick={phase === 'idle' ? handlePlay : onRestart}
          className="bg-primary hover:bg-red-700"
          disabled={bet < 1}
        >
          {phase === 'idle' ? '🚀 Play' : '🔄 Restart'}
        </Button>

        <div className="pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-600 space-y-1">
            <p><span className="font-semibold">⭐ Multiplier:</span> Tăng điểm và đẩy máy bay lên</p>
            <p><span className="font-semibold">🚀 Rocket:</span> Giảm 50% điểm và đẩy máy bay xuống</p>
            <p><span className="font-semibold">Mục tiêu:</span> Hạ cánh tại tàu bên phải!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel

