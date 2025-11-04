import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Layout from './components/Layout'
import BaoCap from './pages/BaoCap'
import DoiMoi from './pages/DoiMoi'
import NhanDinh from './pages/NhanDinh'
import Timeline from './pages/Timeline'
import TuLieu from './pages/TuLieu'
import QuizPage from './pages/QuizPage'
import Aviamasters from './pages/Aviamasters'
import ChatBox from './components/ChatBox'
import HoiNhap from './pages/HoiNhap'

const theme = {
  token: {
    colorPrimary: '#B71C1C',
    colorInfo: '#B71C1C',
    colorSuccess: '#FFD700',
    fontFamily: 'Inter, Roboto, sans-serif',
  },
}

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<BaoCap />} />
            <Route path="/bao-cap" element={<BaoCap />} />
            <Route path="/doi-moi" element={<DoiMoi />} />
            <Route path="/hoi-nhap" element={<HoiNhap />} />
            <Route path="/nhan-dinh" element={<NhanDinh />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/tu-lieu" element={<TuLieu />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/game" element={<Aviamasters />} />
          </Routes>
        </Layout>

        <ChatBox
          title="AI Lịch sử Việt Nam"
          subtitle="Trợ lý AI về thời kỳ bao cấp và đổi mới"
          primaryColor="#B71C1C"
          initialMessage="Xin chào! Tôi có thể giúp bạn tìm hiểu về thời kỳ bao cấp và đổi mới của Việt Nam. Bạn muốn biết điều gì?"
        />
      </Router>
    </ConfigProvider>
  )
}

export default App
