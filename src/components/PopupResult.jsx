import React from 'react'
import { Modal, Button } from 'antd'
import { motion } from 'framer-motion'

const PopupResult = ({ result, counter, bet, message, visible, onRestart, onClose }) => {
  const isWin = result === 'win'
  const totalPayout = isWin ? counter * bet : 0
  
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      closable={false}
      centered
      width={400}
      className="result-modal"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-6"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 0.5,
            repeat: isWin ? 2 : 0
          }}
          className="text-8xl mb-4"
        >
          {isWin ? '🎉' : '😢'}
        </motion.div>
        
        <h2 className={`text-3xl font-bold mb-2 ${isWin ? 'text-green-600' : 'text-red-600'}`}>
          {isWin ? 'THẮNG!' : 'THUA'}
        </h2>
        
        <p className="text-lg text-gray-700 mb-4">{message}</p>
        
        <div className="space-y-3 mb-6">
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Điểm cuối cùng (Multiplier)</div>
            <div className="text-3xl font-bold text-primary">{counter}x</div>
          </div>
          
          {isWin && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 border-2 border-green-400"
            >
              <div className="text-sm text-gray-700 mb-1">Số tiền nhận được</div>
              <div className="text-4xl font-bold text-green-600">
                {totalPayout.toLocaleString('vi-VN')} đ
              </div>
              <div className="text-xs text-gray-600 mt-1">
                ({bet.toLocaleString('vi-VN')} × {counter}x)
              </div>
            </motion.div>
          )}
          
          {!isWin && (
            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
              <div className="text-sm text-gray-700 mb-1">Số tiền nhận được</div>
              <div className="text-2xl font-bold text-red-600">0 đ</div>
              <div className="text-xs text-gray-600 mt-1">Máy bay đã rơi xuống biển</div>
            </div>
          )}
        </div>
        
        <div className="flex gap-3 justify-center">
          <Button
            type="primary"
            size="large"
            onClick={onRestart}
            className="bg-primary hover:bg-red-700"
          >
            🔄 Chơi lại
          </Button>
          <Button
            size="large"
            onClick={onClose}
          >
            Đóng
          </Button>
        </div>
      </motion.div>
    </Modal>
  )
}

export default PopupResult

