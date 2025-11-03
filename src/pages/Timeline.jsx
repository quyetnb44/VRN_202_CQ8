import React, { useState } from 'react'
import { Card } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../timeline.json'

const Timeline = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Timeline
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Một số thành tựu nổi bật mà Việt Nam đạt được trong thời kỳ đổi mới (1976-nay)
          </p>
        </div>

        <div className="content-card">
          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-primary"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              style={{ originY: 0 }}
            ></motion.div>

            <div className="space-y-12">
              {data.map((item, index) => {
                const isLeft = index % 2 === 0
                const isOpen = openIndex === index
                const renderIcon = (name) => {
                  const base = 'w-4 h-4 text-white'
                  switch (name) {
                    case 'money':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M21 7H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-9 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm8-5h-2v4h2V10ZM4 10v4h2v-4H4Z"/>
                        </svg>
                      )
                    case 'policy':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM7 12h10v2H7v-2Zm0 4h10v2H7v-2Zm0-8h5v2H7V8Z"/>
                        </svg>
                      )
                    case 'growth':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M3 3h2v18H3V3Zm18 14-4.5-4.5-3 3L9 11l-4 4v3h16v-1.5Z"/>
                        </svg>
                      )
                    case 'agriculture':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M12 2a7 7 0 0 1 7 7c0 3.87-3.13 7-7 7S5 12.87 5 9a7 7 0 0 1 7-7Zm0 16c4.97 0 9 2.24 9 5v1H3v-1c0-2.76 4.03-5 9-5Z"/>
                        </svg>
                      )
                    case 'handshake':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M16.5 9 14 6.5 9.5 11 8 9.5 3 14.5l2 2L8 13.5l1.5 1.5 5-5L16.5 9ZM18 6h3v12h-3V6ZM3 6h3v12H3V6Z"/>
                        </svg>
                      )
                    case 'industry':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M2 20h20v-8l-6-3v3L9 9v3L2 8v12Z"/>
                        </svg>
                      )
                    case 'globe':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/>
                        </svg>
                      )
                    case 'develop':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="m8 5-6 7 6 7 1.5-1.3L5 12l4.5-5.7L8 5Zm8 0-1.5 1.3L19 12l-4.5 5.7L16 19l6-7-6-7Z"/>
                        </svg>
                      )
                    case 'stable':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M4 18h16v2H4v-2ZM4 4h2v10H4V4Zm7 0h2v10h-2V4Zm7 0h2v10h-2V4Z"/>
                        </svg>
                      )
                    case 'eu':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3 7h-2l-1-2-1 2H9l1.6 1.2-.6 2L12 11l2 .2-.6-2L15 9Z"/>
                        </svg>
                      )
                    case 'future':
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
                          <path d="M12 6v6l4 2-.7 1.9L10 13V6h2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/>
                        </svg>
                      )
                    default:
                      return null
                  }
                }
                return (
                  <motion.div
                    key={`${item.time}-${index}`}
                    className={`relative flex items-stretch ${isLeft ? 'justify-start' : 'justify-end'}`}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {/* Dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-2 border-white shadow flex items-center justify-center">
                      {renderIcon(item.icon)}
                    </div>

                    {/* Card */}
                    <button
                      onClick={() => toggle(index)}
                      className={`w-full md:w-1/2 text-left group focus:outline-none ${isLeft ? 'pr-10' : 'pl-10'}`}
                    >
                      <div className={`rounded-2xl shadow-lg p-5 bg-white border-2 ${isOpen ? 'border-accent' : 'border-transparent'} hover:border-accent transition-colors`}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-primary text-white font-bold mr-3">
                            {renderIcon(item.icon)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-primary">{item.time}</div>
                            <div className="text-lg font-bold">{item.main}</div>
                            {item.detail && (
                              <div className="text-sm text-gray-600">{item.detail}</div>
                            )}
                          </div>
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="mt-3"
                            >
                              {item.img && (
                                <motion.img
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.1, duration: 0.3 }}
                                  src={item.img}
                                  alt={item.main}
                                  className="w-full rounded-lg mb-3 border-2 border-accent"
                                />
                              )}
                              {Array.isArray(item.info) && item.info.length > 0 && (
                                <motion.ul
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2, duration: 0.3 }}
                                  className="list-disc pl-5 space-y-1 text-gray-700"
                                >
                                  {item.info.map((i, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                                    >
                                      {i}
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Timeline
