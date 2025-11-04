import React, { useState } from 'react'
import { Card, Button, Radio, Alert } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    const correct = selectedAnswer === currentQuestion.correctAnswer
    setIsCorrect(correct)
    setShowResult(true)
    setAnsweredQuestions(prev => prev + 1)
    if (correct) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setIsCorrect(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setIsCorrect(false)
    setScore(0)
    setAnsweredQuestions(0)
  }

  return (
    <Card className="content-card bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">🧠</span>
        <h3 className="text-xl font-semibold text-primary">Kiểm tra kiến thức</h3>
      </div>

      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">
            Câu {currentQuestionIndex + 1} / {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            Điểm: {score} / {answeredQuestions}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-4">{currentQuestion.question}</h4>
        
        <Radio.Group 
          value={selectedAnswer} 
          onChange={(e) => setSelectedAnswer(e.target.value)}
          disabled={showResult}
          className="w-full"
        >
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: showResult ? 1 : 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Radio 
                  value={index} 
                  className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                    showResult 
                      ? index === currentQuestion.correctAnswer 
                        ? 'bg-green-50 border-green-300' 
                        : selectedAnswer === index && !isCorrect
                        ? 'bg-red-50 border-red-300'
                        : 'bg-gray-50 border-gray-200'
                      : selectedAnswer === index
                      ? 'bg-primary/10 border-primary'
                      : 'bg-white border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <span className={`ml-2 ${
                    showResult && index === currentQuestion.correctAnswer 
                      ? 'text-green-700 font-medium' 
                      : showResult && selectedAnswer === index && !isCorrect
                      ? 'text-red-700'
                      : 'text-gray-700'
                  }`}>
                    {option}
                  </span>
                  {showResult && index === currentQuestion.correctAnswer && (
                    <CheckCircleOutlined className="text-green-600 ml-2" />
                  )}
                  {showResult && selectedAnswer === index && !isCorrect && (
                    <CloseCircleOutlined className="text-red-600 ml-2" />
                  )}
                </Radio>
              </motion.div>
            ))}
          </div>
        </Radio.Group>
      </div>

      <div className="flex gap-3 mb-4">
        {!showResult ? (
          <Button 
            type="primary" 
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="bg-primary hover:bg-red-700"
          >
            Kiểm tra đáp án
          </Button>
        ) : (
          <div className="flex gap-3">
            {currentQuestionIndex < questions.length - 1 ? (
              <Button 
                type="primary"
                onClick={handleNext}
                className="bg-primary hover:bg-red-700"
              >
                Câu tiếp theo
              </Button>
            ) : (
              <div className="flex gap-3">
                <Alert
                  message={`Hoàn thành! Điểm số: ${score}/${questions.length}`}
                  description={`Bạn đã trả lời đúng ${score} trên ${questions.length} câu hỏi (${Math.round((score/questions.length)*100)}%)`}
                  type={score >= questions.length * 0.7 ? "success" : score >= questions.length * 0.5 ? "warning" : "error"}
                  showIcon
                  className="rounded-lg flex-1"
                />
              </div>
            )}
            <Button onClick={handleReset} className="border-primary text-primary hover:bg-primary hover:text-white">
              Làm lại từ đầu
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentQuestionIndex < questions.length - 1 && (
              <Alert
                message={isCorrect ? "Chính xác! 🎉" : "Chưa đúng! 🤔"}
                description={currentQuestion.explanation}
                type={isCorrect ? "success" : "error"}
                showIcon
                className="rounded-lg"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default Quiz
