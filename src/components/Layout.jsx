import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  // { 
  //   path: '/bao-cap', 
  //   label: 'Thời kì Bao cấp (Bối cảnh)', 
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 5h2v6h-2V7zm1 10a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>

  //     </svg>
  //   )
  // },
  { 
    path: '/hoi-nhap', 
    label: 'Hội nhập quốc tế', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>

      </svg>
    )
  },
  // { 
  //   path: '/nhan-dinh', 
  //   label: 'Nhận định', 
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //     <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zM8 9h8v2H8V9zm0 4h5v2H8v-2z" />
  //     </svg>
  //   )
  // },
  { 
    path: '/doi-moi', 
    label: 'Thành tựu đổi mới', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2a10 10 0 00-9.95 9h2.02A8 8 0 1112 20v2a10 10 0 000-20zm0 5l4 4h-3v5h-2v-5H8l4-4z"/>
</svg>
    )
  },
  // { 
  //   path: '/timeline', 
  //   label: 'Timeline', 
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  //     </svg>
  //   )
  // },
  // { 
  //   path: '/tu-lieu', 
  //   label: 'Tư liệu', 
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 1v3H5V7h14z"/>
  //     </svg>
  //   )
  // },
  { 
    path: '/quiz', 
    label: 'Quiz', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
      </svg>
    )
  },
  // { 
  //   path: '/game', 
  //   label: 'Game', 
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M15.5 12c0 1.38-1.12 2.5-2.5 2.5S10.5 13.38 10.5 12s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm-2.5-8c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C20.27 7.11 16 4 13 4zm0 13.5c-3.33 0-6.27-1.83-7.79-4.5C6.73 10.33 9.67 8.5 13 8.5s6.27 1.83 7.79 4.5c-1.52 2.67-4.46 4.5-7.79 4.5z"/>
  //     </svg>
  //   )
  // },
  { 
    path: '/policy-simulator', 
    label: 'Mô phỏng Chính sách', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    )
  },
]

const Layout = ({ children }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="flex flex-col h-screen" style={{ backgroundColor: '#eceae1' }}>
      {/* Responsive Top Bar */}
      <div className="shadow-2xl relative z-50" style={{ backgroundColor: '#6b291c' }}>
        {/* Header Section with Navigation */}
        <div className="px-4 sm:px-6 py-3 lg:py-2">
          <div className="flex items-center justify-between">
            {/* Logo and Title - Always visible */}
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1 lg:flex-none">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Emblem_of_Vietnam.svg" 
                alt="Emblem of Vietnam" 
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" 
              />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-white truncate">
                  VNR202-CQ8
                </h1>
                <p className="text-xs sm:text-sm truncate" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Việt Nam Hội nhập Quốc tế
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:block">
              <div className="flex space-x-1">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path || 
                                 (location.pathname === '/' && item.path === '/bao-cap')
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`topbar-item ${isActive ? 'active' : ''}`}
                    >
                      <span className="text-lg mr-2">{item.icon}</span>
                      <span className="font-medium whitespace-nowrap">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-white transition-colors duration-200"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(107, 41, 28, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid rgba(107, 41, 28, 0.5)';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
              aria-label="Toggle navigation menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-white block transition-all duration-300 origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300 origin-center"
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
              >
                {/* Mobile Menu Header */}
                <div className="p-4 flex items-center justify-between" style={{ backgroundColor: '#6b291c' }}>
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Emblem_of_Vietnam.svg" 
                      alt="Emblem of Vietnam" 
                      className="w-8 h-8" 
                    />
                    <div>
                      <h2 className="text-white font-bold text-sm">Menu</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-md text-white transition-colors duration-200"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(107, 41, 28, 0.8)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid rgba(107, 41, 28, 0.5)';
                      e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="p-4">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => {
                      const isActive = location.pathname === item.path || 
                                     (location.pathname === '/' && item.path === '/bao-cap')
                      
                      return (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                              isActive 
                                ? 'border-l-4' 
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            style={isActive ? {
                              backgroundColor: 'rgba(107, 41, 28, 0.1)',
                              color: '#6b291c',
                              borderLeftColor: '#6b291c'
                            } : {}}
                            onMouseEnter={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.color = '#6b291c';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.color = '';
                              }
                            }}
                          >
                            <span className="text-xl" style={{ color: isActive ? '#6b291c' : '#6b7280' }}>
                              {item.icon}
                            </span>
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
