import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input, Button, Spin } from 'antd';
import { SendOutlined, CloseOutlined, ReloadOutlined } from '@ant-design/icons';
import { sendMessageToAI } from '../utils/aiService';

const ChatBox = ({ 
  title = "AI Lịch sử Việt Nam",
  subtitle = "Trợ lý AI",
  avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
  initialMessage = "Xin chào! Tôi có thể giúp gì cho bạn?",
  primaryColor = "#B71C1C"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Rate limiting: minimum 2 seconds between requests
  const MIN_REQUEST_INTERVAL = 2000;
  
  useEffect(() => {
    // Add initial greeting message when the component mounts
    if (messages.length === 0) {
      setMessages([
        { 
          role: 'assistant', 
          content: initialMessage 
        }
      ]);
    }
  }, [initialMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResetChat = () => {
    setMessages([{ role: 'assistant', content: initialMessage }]);
    setInputValue('');
    setIsLoading(false);
    setLastRequestTime(0);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Check rate limiting
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    
    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
      const remainingTime = Math.ceil((MIN_REQUEST_INTERVAL - timeSinceLastRequest) / 1000);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Vui lòng đợi ${remainingTime} giây trước khi gửi câu hỏi tiếp theo để tránh vượt quá giới hạn API.` 
      }]);
      return;
    }
    
    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setLastRequestTime(now);
    
    try {
      const aiResponse = await sendMessageToAI(userMessage, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Xin lỗi, đã xảy ra lỗi. Vui lòng thử lại sau." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatRecentQuestions = (questions) => {
    if (!questions || questions.length === 0) return null;
    
    return (
      <div className="mt-2 border-t pt-2 text-sm text-gray-600">
        <p className="font-semibold mb-1">Câu hỏi gợi ý:</p>
        <div className="flex flex-col gap-1">
          {questions.map((q, idx) => (
            <button 
              key={idx}
              className="text-left hover:bg-gray-100 px-2 py-1 rounded-md"
              onClick={() => {
                setInputValue(q);
                inputRef.current?.focus();
              }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Chat button - smaller and positioned in bottom-right corner */}
      <motion.button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-50"
        style={{ backgroundColor: primaryColor }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
      >
        {isOpen ? (
          <CloseOutlined style={{ fontSize: '18px', color: 'white' }} />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
            <path d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z" stroke="white" strokeWidth="2"/>
            <path d="M9 11H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 15H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </motion.button>

      {/* Chat window - increased width from w-72 to w-80 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-80 sm:w-96 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="rounded-lg shadow-lg overflow-hidden border-2"
              style={{ borderColor: primaryColor }}
            >
              {/* Header - Simplified */}
              <div 
                className="px-3 py-2 flex items-center"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2 overflow-hidden">
                  <img src={avatar} alt="AI" className="w-full h-full object-cover" />
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-base m-0">{title}</h3>
                  <p className="text-xs opacity-90 m-0">{subtitle}</p>
                </div>
                
                {/* Reset chat button */}
                <button 
                  className="ml-auto text-white p-1 hover:bg-white/20 rounded-full"
                  onClick={handleResetChat}
                  title="Reset cuộc trò chuyện"
                >
                  <ReloadOutlined style={{ fontSize: '14px', color: 'white' }} />
                </button>
                
                {/* Close button */}
                <button 
                  className="ml-1 text-white p-1 hover:bg-red-800 rounded-full"
                  onClick={toggleChat}
                >
                  <CloseOutlined style={{ fontSize: '14px' }} />
                </button>
              </div>
              
              {/* Messages - Reduced height */}
              <div className="h-96 overflow-y-auto p-3 bg-gray-50">
                {messages.map((message, index) => (
                  <div 
                    key={index}
                    className={`mb-3 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] py-2 px-3 text-sm rounded-lg ${
                        message.role === 'user'
                          ? 'text-white rounded-tr-none'
                          : 'bg-white shadow-sm border rounded-tl-none'
                      }`}
                      style={message.role === 'user' ? { backgroundColor: primaryColor } : {}}
                    >
                      <p className="m-0 text-xs whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-3">
                    <div className="bg-white shadow-sm border py-2 px-3 rounded-lg rounded-tl-none">
                      <Spin size="small" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Suggested questions - More compact */}
              {messages.length <= 2 && (
                <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs font-medium text-gray-600 mb-1">Câu hỏi gợi ý:</p>
                  <div className="flex flex-col gap-1">
                    {[
                      "Thời kỳ bao cấp có đặc điểm gì?", 
                      "Chính sách Đổi mới 1986 có ý nghĩa gì?"
                    ].map((q, idx) => (
                      <button 
                        key={idx}
                        className="text-left text-xs hover:bg-gray-100 px-2 py-1 rounded"
                        onClick={() => {
                          setInputValue(q);
                          inputRef.current?.focus();
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Input - More compact */}
              <div className="p-2 bg-white border-t">
                <div className="flex items-center">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                    placeholder="Đặt câu hỏi về lịch sử..."
                    disabled={isLoading}
                    className="flex-grow mr-1 text-sm py-1 px-2"
                    bordered={false}
                    style={{ 
                      borderRadius: '999px', 
                      backgroundColor: '#f3f4f6',
                      paddingLeft: '12px'
                    }}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    size="small"
                    icon={<SendOutlined style={{ fontSize: '12px', color: 'white' }} />}
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    style={{ backgroundColor: primaryColor, minWidth: '28px', height: '28px' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox;
