import React, { useState } from 'react'
import { Card, Button, Select, Divider } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import Quiz from '../components/Quiz'

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState('baocap')

  const quizzes = {
    baocap: {
      title: "Thời kì Bao cấp (1975-1986)",
      icon: "🎫",
      questions: [
        {
          question: "Đặc trưng nổi bật của thời kì bao cấp là gì?",
          options: ["Kinh tế thị trường tự do", "Hệ thống tem phiếu và sổ gạo", "Đầu tư nước ngoài mạnh mẽ", "Xuất khẩu hàng hóa phong phú"],
          correctAnswer: 1,
          explanation: "Thời kì bao cấp được đặc trưng bởi hệ thống phân phối theo tem phiếu và sổ gạo, phản ánh tình trạng thiếu hụt hàng hóa và cơ chế quản lý tập trung."
        },
        {
          question: "Thời kỳ bao cấp ở Việt Nam kéo dài từ năm nào đến năm nào?",
          options: ["1975-1986", "1976-1985", "1975-1990", "1980-1986"],
          correctAnswer: 0,
          explanation: "Thời kỳ bao cấp chính thức từ 1975 (sau thống nhất) đến 1986 (Đại hội VI khởi động Đổi mới)."
        },
        {
          question: "Nguyên nhân chính dẫn đến khủng hoảng kinh tế cuối thập niên 1970?",
          options: ["Chiến tranh biên giới", "Lạm phát cao", "Thiên tai", "Tất cả các yếu tố trên"],
          correctAnswer: 3,
          explanation: "Khủng hoảng do nhiều nguyên nhân: chiến tranh biên giới với Trung Quốc và Campuchia, lạm phát 3 chữ số, thiên tai và cơ chế quản lý tập trung."
        },
        {
          question: "Tỷ lệ lạm phát cao nhất trong thời kỳ bao cấp là bao nhiêu?",
          options: ["50%", "100%", "Trên 400%", "200%"],
          correctAnswer: 2,
          explanation: "Lạm phát đạt đỉnh điểm trên 400% vào đầu thập niên 1980, gây khó khăn nghiêm trọng cho đời sống nhân dân."
        },
        {
          question: "Hệ thống phân phối trong thời kỳ bao cấp dựa trên nguyên tắc nào?",
          options: ["Theo năng lực", "Theo nhu cầu", "Theo tem phiếu", "Theo thị trường"],
          correctAnswer: 2,
          explanation: "Hệ thống phân phối dựa trên tem phiếu, sổ gạo với định lượng cố định cho từng người, không theo cơ chế thị trường."
        },
        {
          question: "Định lượng gạo bình quân mỗi người/tháng trong thời kỳ bao cấp là bao nhiêu?",
          options: ["10-12 kg", "13-15 kg", "16-18 kg", "20-22 kg"],
          correctAnswer: 1,
          explanation: "Định lượng gạo khoảng 13-15 kg/người/tháng, không đủ đáp ứng nhu cầu dinh dưỡng cơ bản."
        },
        {
          question: "Tình trạng kinh tế Việt Nam trước Đổi mới 1986 được mô tả như thế nào?",
          options: ["Phát triển ổn định", "Khủng hoảng toàn diện", "Tăng trưởng chậm", "Lạm phát nhẹ"],
          correctAnswer: 1,
          explanation: "Kinh tế rơi vào khủng hoảng toàn diện với lạm phát cao, thiếu hụt hàng hóa, đời sống nhân dân khó khăn."
        },
        {
          question: "Ngành nào chiếm tỷ trọng lớn nhất trong nền kinh tế thời bao cấp?",
          options: ["Công nghiệp", "Nông nghiệp", "Dịch vụ", "Thương mại"],
          correctAnswer: 1,
          explanation: "Nông nghiệp chiếm tỷ trọng lớn nhất nhưng năng suất thấp, không đáp ứng được nhu cầu lương thực."
        },
        {
          question: "Chính sách 'khoán 10' được thực hiện vào năm nào?",
          options: ["1979", "1981", "1983", "1985"],
          correctAnswer: 1,
          explanation: "Chính sách 'khoán 10' năm 1981 cho phép nông dân được khoán sản phẩm, bước đầu cải cách nông nghiệp."
        },
        {
          question: "Tỷ lệ nghèo của Việt Nam vào cuối thời kỳ bao cấp (1986) là bao nhiêu?",
          options: ["Khoảng 40%", "Khoảng 50%", "Khoảng 60%", "Trên 70%"],
          correctAnswer: 3,
          explanation: "Tỷ lệ nghèo trên 70% dân số vào năm 1986, phản ánh tình trạng kinh tế khó khăn nghiêm trọng."
        }
      ]
    },
    doimoi: {
      title: "Thành tựu Đổi mới (1986 - nay)",
      icon: "📊",
      questions: [
        {
          question: "Đổi mới kinh tế Việt Nam bắt đầu từ năm nào?",
          options: ["1975", "1986", "1990", "1995"],
          correctAnswer: 1,
          explanation: "Đại hội VI của Đảng (12/1986) đã chính thức khởi động chính sách Đổi mới, chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng xã hội chủ nghĩa."
        },
        {
          question: "GDP của Việt Nam năm 2024 đạt mức tăng trưởng bao nhiêu?",
          options: ["6.2%", "7.09%", "8.1%", "5.8%"],
          correctAnswer: 1,
          explanation: "Theo Tổng cục Thống kê, GDP Việt Nam năm 2024 tăng 7.09%, vượt mục tiêu đề ra và thuộc nhóm tăng trưởng cao nhất khu vực."
        },
        {
          question: "Việt Nam gia nhập WTO vào năm nào?",
          options: ["2005", "2006", "2007", "2008"],
          correctAnswer: 2,
          explanation: "Việt Nam chính thức gia nhập WTO vào ngày 11/1/2007, đánh dấu bước ngoặt quan trọng trong hội nhập kinh tế quốc tế."
        },
        {
          question: "Thu nhập bình quân đầu người của Việt Nam năm 2024 là bao nhiêu?",
          options: ["3,800 USD", "4,500 USD", "5,200 USD", "3,200 USD"],
          correctAnswer: 1,
          explanation: "Theo World Bank, thu nhập bình quân đầu người Việt Nam đạt khoảng 4,300 USD năm 2023, tăng gần 60 lần so với 1986."
        },
        {
          question: "Tỷ lệ nghèo đa chiều của Việt Nam năm 2023 là bao nhiêu?",
          options: ["4.2%", "2.93%", "3.5%", "5.1%"],
          correctAnswer: 1,
          explanation: "Theo báo cáo chính thức, tỷ lệ hộ nghèo đa chiều giảm xuống 2.93% năm 2023, giảm mạnh từ 58% năm 1993."
        },
        {
          question: "Việt Nam đứng thứ mây trong xuất khẩu gạo thế giới?",
          options: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5"],
          correctAnswer: 1,
          explanation: "Việt Nam là nước xuất khẩu gạo lớn thứ 3 thế giới với hơn 8.1 triệu tấn năm 2023, sau Ấn Độ và Thái Lan."
        },
        {
          question: "Tổng kim ngạch xuất nhập khẩu của Việt Nam năm 2024 (11 tháng) đạt bao nhiêu?",
          options: ["680 tỷ USD", "715.55 tỷ USD", "750 tỷ USD", "650 tỷ USD"],
          correctAnswer: 1,
          explanation: "Theo Tổng cục Hải quan, tổng kim ngạch xuất nhập khẩu 11 tháng 2024 đạt 715.55 tỷ USD, tăng 15.8% so với cùng kỳ."
        },
        {
          question: "Việt Nam gia nhập ASEAN vào năm nào?",
          options: ["1994", "1995", "1996", "1997"],
          correctAnswer: 1,
          explanation: "Việt Nam chính thức gia nhập ASEAN vào ngày 28/7/1995, trở thành thành viên thứ 7 của tổ chức này."
        },
        {
          question: "Vốn FDI cam kết vào Việt Nam năm 2024 đạt mức bao nhiêu?",
          options: ["22.4 tỷ USD", "25.35 tỷ USD", "28.1 tỷ USD", "20.8 tỷ USD"],
          correctAnswer: 1,
          explanation: "Theo Bộ Kế hoạch và Đầu tư, vốn FDI cam kết năm 2024 đạt 25.35 tỷ USD, tăng 1.9% so với năm 2023."
        },
        {
          question: "Hiệp định EVFTA giữa Việt Nam và EU có hiệu lực từ năm nào?",
          options: ["2019", "2020", "2021", "2018"],
          correctAnswer: 1,
          explanation: "Hiệp định Thương mại Tự do Việt Nam-EU (EVFTA) có hiệu lực từ 1/8/2020, mở ra cơ hội xuất khẩu lớn vào thị trường EU."
        }
      ]
    },
    nhandinh: {
      title: "Thành tựu Việt Nam sau gần 40 năm Đổi mới",
      icon: "🇻🇳",
      questions: [
        {
          question: "Thu nhập bình quân đầu người của Việt Nam năm 2024 đạt mức nào?",
          options: ["Khoảng 2,500 USD", "Khoảng 4,500 USD", "Khoảng 6,000 USD", "Khoảng 3,800 USD"],
          correctAnswer: 1,
          explanation: "Theo World Bank, thu nhập bình quân đầu người của Việt Nam đạt khoảng 4,300 USD năm 2023, tăng gần 60 lần so với năm 1986."
        },
        {
          question: "Việt Nam trở thành đối tác BRICS vào thời gian nào?",
          options: ["Tháng 1/2025", "Tháng 6/2025", "Tháng 12/2024", "Tháng 3/2025"],
          correctAnswer: 1,
          explanation: "Việt Nam chính thức trở thành đối tác BRICS từ tháng 6/2025, nâng tầm hợp tác kinh tế và ngoại giao quốc tế."
        },
        {
          question: "BRICS+ hiện chiếm bao nhiêu phần trăm GDP toàn cầu?",
          options: ["40%", "44%", "48%", "52%"],
          correctAnswer: 1,
          explanation: "BRICS+ hiện chiếm 44% GDP toàn cầu và 56% dân số thế giới, tạo ra khối kinh tế khổng lồ."
        },
        {
          question: "Tuổi thọ trung bình của người Việt Nam năm 2023 là bao nhiêu?",
          options: ["72.8 tuổi", "74.5 tuổi", "76.2 tuổi", "73.1 tuổi"],
          correctAnswer: 1,
          explanation: "Tuổi thọ trung bình đạt 74.5 tuổi năm 2023, tăng 4 năm so với năm 1990 (70.5 tuổi)."
        },
        {
          question: "Tỷ lệ biết chữ của Việt Nam hiện tại là bao nhiêu?",
          options: ["95.2%", "98.85%", "97.1%", "96.8%"],
          correctAnswer: 1,
          explanation: "Tỷ lệ biết chữ đạt 98.85%, tăng đáng kể từ 87% năm 2000, phản ánh thành tựu giáo dục."
        },
        {
          question: "Việt Nam đặt mục tiêu tăng trưởng GDP năm 2025 là bao nhiêu?",
          options: ["7.5-8.0%", "8.3-8.5%", "6.8-7.2%", "9.0-9.5%"],
          correctAnswer: 1,
          explanation: "Việt Nam đặt mục tiêu tăng trưởng GDP 8.3-8.5% năm 2025, thể hiện tham vọng phát triển cao."
        },
        {
          question: "Đường sắt tốc độ cao Bắc-Nam có tổng mức đầu tư là bao nhiêu?",
          options: ["58 tỷ USD", "67 tỷ USD", "75 tỷ USD", "82 tỷ USD"],
          correctAnswer: 1,
          explanation: "Dự án đường sắt tốc độ cao Bắc-Nam có tổng mức đầu tư 67 tỷ USD, dự án hạ tầng lớn nhất Việt Nam."
        },
        {
          question: "Tỷ lệ bao phủ bảo hiểm y tế của Việt Nam hiện tại là bao nhiêu?",
          options: ["90%", "93%", "95%", "88%"],
          correctAnswer: 1,
          explanation: "Tỷ lệ bao phủ BHYT đạt 93% dân số, đảm bảo y tế toàn dân và giảm gánh nặng chi phí y tế."
        },
        {
          question: "Tỷ lệ xã đạt chuẩn nông thôn mới của Việt Nam là bao nhiêu?",
          options: ["75%", "78%", "82%", "85%"],
          correctAnswer: 1,
          explanation: "78% số xã đạt chuẩn nông thôn mới, cải thiện đáng kể cơ sở hạ tầng và đời sống nông thôn."
        },
        {
          question: "Việt Nam có quan hệ ngoại giao với bao nhiêu quốc gia?",
          options: ["190 quốc gia", "193 quốc gia", "195 quốc gia", "188 quốc gia"],
          correctAnswer: 1,
          explanation: "Việt Nam có quan hệ ngoại giao với 193 quốc gia, thể hiện vị thế và uy tín quốc tế ngày càng cao."
        }
      ]
    },
    timeline: {
      title: "Timeline Lịch sử Việt Nam",
      icon: "⏳",
      questions: [
        {
          question: "Sự kiện nào đánh dấu bước ngoặt quan trọng nhất trong lịch sử Việt Nam hiện đại?",
          options: ["Chiến thắng Điện Biên Phủ (1954)", "Thống nhất đất nước (1975)", "Đổi mới kinh tế (1986)", "Tất cả đều quan trọng"],
          correctAnswer: 3,
          explanation: "Mỗi sự kiện đều có ý nghĩa lịch sử quan trọng: 1954 mở ra độc lập, 1975 thống nhất đất nước, 1986 đổi mới phát triển. Tất cả đều là những bước ngoặt then chốt."
        },
        {
          question: "Chiến thắng Điện Biên Phủ diễn ra vào ngày nào?",
          options: ["7/5/1954", "19/12/1946", "2/9/1945", "30/4/1975"],
          correctAnswer: 0,
          explanation: "Chiến thắng Điện Biên Phủ ngày 7/5/1954 kết thúc 8 năm kháng chiến chống Pháp, mở ra kỷ nguyên độc lập dân tộc."
        },
        {
          question: "Việt Nam tuyên bố độc lập vào ngày nào?",
          options: ["19/8/1945", "2/9/1945", "25/8/1945", "15/8/1945"],
          correctAnswer: 1,
          explanation: "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa."
        },
        {
          question: "Hiệp định Paris về Việt Nam được ký vào năm nào?",
          options: ["1972", "1973", "1974", "1975"],
          correctAnswer: 1,
          explanation: "Hiệp định Paris được ký ngày 27/1/1973, chấm dứt chiến tranh và lập lại hòa bình ở Việt Nam."
        },
        {
          question: "Việt Nam gia nhập Liên Hợp Quốc vào năm nào?",
          options: ["1975", "1976", "1977", "1978"],
          correctAnswer: 2,
          explanation: "Việt Nam chính thức gia nhập Liên Hợp Quốc ngày 20/9/1977, trở thành thành viên thứ 149."
        },
        {
          question: "Đại hội Đảng nào đã quyết định chính sách Đổi mới?",
          options: ["Đại hội V", "Đại hội VI", "Đại hội VII", "Đại hội VIII"],
          correctAnswer: 1,
          explanation: "Đại hội VI (12/1986) đã quyết định chính sách Đổi mới, chuyển từ kinh tế kế hoạch hóa sang kinh tế thị trường."
        },
        {
          question: "Việt Nam bình thường hóa quan hệ với Mỹ vào năm nào?",
          options: ["1994", "1995", "1996", "1997"],
          correctAnswer: 1,
          explanation: "Việt Nam và Mỹ bình thường hóa quan hệ ngoại giao ngày 11/7/1995, mở ra kỷ nguyên hợp tác mới."
        },
        {
          question: "Việt Nam đăng cai APEC lần đầu tiên vào năm nào?",
          options: ["2005", "2006", "2007", "2008"],
          correctAnswer: 1,
          explanation: "Việt Nam đăng cai APEC 2006, khẳng định vị thế và năng lực tổ chức sự kiện quốc tế lớn."
        },
        {
          question: "Việt Nam trở thành thành viên không thường trực Hội đồng Bảo an LHQ lần đầu vào năm nào?",
          options: ["2008-2009", "2020-2021", "2010-2011", "2015-2016"],
          correctAnswer: 0,
          explanation: "Việt Nam lần đầu trở thành thành viên không thường trực HĐBA LHQ nhiệm kỳ 2008-2009."
        },
        {
          question: "Việt Nam đăng cai Hội nghị thượng đỉnh Mỹ-Triều Tiên lần 2 vào năm nào?",
          options: ["2018", "2019", "2020", "2021"],
          correctAnswer: 1,
          explanation: "Hội nghị thượng đỉnh Mỹ-Triều Tiên lần 2 diễn ra tại Hà Nội tháng 2/2019, thể hiện vai trò ngoại giao của Việt Nam."
        }
      ]
    }
  }

  const currentQuiz = quizzes[selectedQuiz]

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-header">Kiểm tra kiến thức</h1>
        <div className="section-quote">
          "Học mà không nghĩ thì vô ích, nghĩ mà không học thì nguy hiểm"
        </div>

        {/* Quiz Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="content-card">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📚</span>
              <h3 className="text-xl font-semibold text-primary">Chọn chủ đề kiểm tra</h3>
            </div>
            
            <Select
              value={selectedQuiz}
              onChange={setSelectedQuiz}
              className="w-full"
              size="large"
              placeholder="Chọn chủ đề để kiểm tra kiến thức"
            >
              {Object.entries(quizzes).map(([key, quiz]) => (
                <Select.Option key={key} value={key}>
                  <div className="flex items-center">
                    <span className="mr-2">{quiz.icon}</span>
                    {quiz.title}
                  </div>
                </Select.Option>
              ))}
            </Select>
          </Card>
        </motion.div>

        {/* Current Quiz Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedQuiz}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <Card className="content-card bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{currentQuiz.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{currentQuiz.title}</h2>
                    <p className="text-gray-600 mt-1">Kiểm tra hiểu biết của bạn về chủ đề này</p>
                  </div>
                </div>
              </Card>
            </div>

            <Quiz questions={currentQuiz.questions} />
          </motion.div>
        </AnimatePresence>

        {/* Quiz Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="content-card">
            <h3 className="text-xl font-semibold text-primary mb-4">
              📈 Thống kê câu hỏi
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.entries(quizzes).map(([key, quiz]) => (
                <div
                  key={key}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedQuiz === key
                      ? 'border-primary bg-primary/10'
                      : 'border-gray-200 bg-gray-50 hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedQuiz(key)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{quiz.icon}</div>
                    <h5 className="font-semibold text-sm text-gray-700 mb-1">
                      {quiz.title.split(' ')[0]} {quiz.title.split(' ')[1]}
                    </h5>
                    <p className="text-xs text-gray-500">
                      {quiz.questions.length} câu hỏi
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Divider />
            
            <div className="text-center text-sm text-gray-600">
              <p>
                <strong>Tổng cộng:</strong> {Object.values(quizzes).reduce((total, quiz) => total + quiz.questions.length, 0)} câu hỏi trong {Object.keys(quizzes).length} chủ đề về lịch sử Việt Nam
              </p>
              <p className="mt-2">
                Hãy thử sức với tất cả các chủ đề để kiểm tra kiến thức của bạn! 🎯
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default QuizPage
