import React from 'react'
import { motion } from 'framer-motion'

const HUD = ({ counter, phase, message }) => {
  const getStatusText = () => {
    if (phase === 'idle') return 'Sẵn sàng'
    if (phase === 'playing') return 'Đang bay...'
    if (phase === 'ended') return message || 'Kết thúc'
    return ''
  }

  const getStatusColor = () => {
    if (phase === 'idle') return 'text-gray-500'
    if (phase === 'playing') return 'text-blue-600'
    if (phase === 'ended') return message.includes('hạ cánh') ? 'text-green-600' : 'text-red-600'
    return 'text-gray-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20 min-w-[200px]"
    >
      <div className="space-y-2">
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">Counter</div>
          <motion.div
            key={counter}
            initial={{ scale: 1.2, color: '#f59e0b' }}
            animate={{ scale: 1, color: '#1f2937' }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-gray-800"
          >
            {counter}
          </motion.div>
        </div>
        <div className="border-t border-gray-200 pt-2">
          <div className="text-xs text-gray-500 uppercase tracking-wide">Trạng thái</div>
          <div className={`font-semibold ${getStatusColor()}`}>
            {getStatusText()}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HUD

