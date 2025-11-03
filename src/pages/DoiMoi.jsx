import React from 'react'
import { Card, Tooltip } from 'antd'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { motion } from 'framer-motion'
import Timeline from './Timeline'

const DoiMoi = () => {
  const gdpData = [
    { year: 1986, gdp: 2.8, growth: 2.8 },
    { year: 1990, gdp: 4.4, growth: 4.4 },
    { year: 1995, gdp: 9.5, growth: 9.5 },
    { year: 2000, gdp: 7.6, growth: 7.6 },
    { year: 2005, gdp: 8.4, growth: 8.4 },
    { year: 2010, gdp: 6.3, growth: 6.3 },
    { year: 2015, gdp: 7.0, growth: 7.0 },
    { year: 2020, gdp: 2.9, growth: 2.9 },
    { year: 2024, gdp: 7.1, growth: 7.1 }
  ]

  const fdiData = [
    { year: 1986, fdi: 0.003 },
    { year: 1995, fdi: 1.4 },
    { year: 2000, fdi: 2.8 },
    { year: 2005, fdi: 3.3 },
    { year: 2010, fdi: 8.0 },
    { year: 2015, fdi: 11.8 },
    { year: 2020, fdi: 20.0 },
    { year: 2024, fdi: 25.35 }
   ];

  // const quizData = {
  //   question: "Đổi mới kinh tế Việt Nam bắt đầu từ năm nào?",
  //   options: [
  //     "1975",
  //     "1986", 
  //     "1990",
  //     "1995"
  //   ],
  //   correctAnswer: 1,
  //   explanation: "Đại hội VI của Đảng (12/1986) đã chính thức khởi động chính sách Đổi mới, chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng xã hội chủ nghĩa."
  // }

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Thành tựu của thời kỳ
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              đổi mới
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            (1976-nay)
          </p>
        </div>

        {/* Kinh tế Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              <svg className="w-6 h-6 inline mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14z"/>
              </svg>
              Thành tựu Kinh tế
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-3">
                  <a 
                    href="https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?locations=VN" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:text-red-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    Tăng trưởng GDP (%)
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                </h4>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={gdpData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line 
                      type="monotone" 
                      dataKey="growth" 
                      stroke="#B71C1C" 
                      strokeWidth={3}
                      dot={{ fill: '#FFD700', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  <a 
                    href="https://data.worldbank.org/indicator/BX.KLT.DINV.WD.GD.ZS?locations=VN" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:text-red-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    Vốn Đầu tư trực tiếp nước ngoài (tỷ USD)
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                </h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={fdiData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <RechartsTooltip />
                    <Bar dataKey="fdi" fill="#B71C1C" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h5 className="font-semibold text-green-700">Giảm nghèo</h5>
                <p className="text-sm text-green-600">Từ 70% (1993) xuống 2.8% (2020)</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-semibold text-blue-700">Xuất khẩu</h5>
                <p className="text-sm text-blue-600">Tăng từ 0.8 tỷ USD lên 280+ tỷ USD</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h5 className="font-semibold text-purple-700">Thu nhập bình quân</h5>
                <p className="text-sm text-purple-600">Đạt mức trung bình thấp (2020)</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Chính trị - Xã hội */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-6">
              <svg className="w-6 h-6 inline mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Chính trị - Xã hội
            </h3>
            
            <div className="space-y-8">
              {/* Ổn định chính trị */}
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                    Ổn định chính trị
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Việt Nam duy trì ổn định chính trị - xã hội trong suốt thời kỳ Đổi mới. 
                    Hệ thống chính trị được củng cố, vai trò lãnh đạo của Đảng được tăng cường. 
                    Các cơ quan nhà nước hoạt động hiệu quả, đảm bảo an ninh quốc gia và trật tự xã hội.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <div className="font-semibold text-red-700">An ninh quốc gia</div>
                      <div className="text-red-600">Được đảm bảo vững chắc</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-700">Trật tự xã hội</div>
                      <div className="text-blue-600">Ổn định, an toàn</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src="https://media.baobinhphuoc.com.vn/upload/news/3_2021/b184a9eff06cb47b87da0a11a8309ca7.jpg"
                    alt="Quốc hội Việt Nam"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Giáo dục phát triển */}
              <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                    Giáo dục phát triển
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Hệ thống giáo dục Việt Nam đã có những bước tiến vượt bậc. Tỷ lệ biết chữ đạt 95.8%, 
                    giáo dục phổ thông được phổ cập toàn quốc. Chất lượng đào tạo đại học được nâng cao, 
                    nhiều trường đại học Việt Nam lọt vào top các trường tốt nhất châu Á.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="font-semibold text-green-700">Tỷ lệ biết chữ</div>
                      <div className="text-green-600">95.8% (2020)</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="font-semibold text-purple-700">Phổ cập giáo dục</div>
                      <div className="text-purple-600">100% tiểu học</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src="https://cdn.tgdd.vn/Files/2022/12/23/1498388/ngay-truyen-thong-hoc-sinh-sinh-vien-9-1-lich-su-y-nghia-202212230640392075.jpg"
                    alt="Học sinh Việt Nam"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Y tế cải thiện */}
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1v-4h2v3h10v-3h2v4c0 .55-.45 1-1 1zm-5-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-10H6c-.55 0-1 .45-1 1v2h14V6c0-.55-.45-1-1-1z"/>
                    </svg>
                    Y tế cải thiện
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Hệ thống y tế Việt Nam đã có những cải tiến đáng kể. Tuổi thọ trung bình tăng từ 65 tuổi (1990) 
                    lên 73.6 tuổi (2020). Tỷ lệ tử vong trẻ em giảm mạnh, hệ thống bảo hiểm y tế được mở rộng, 
                    chất lượng dịch vụ y tế được nâng cao.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-700">Tuổi thọ trung bình</div>
                      <div className="text-blue-600">73.6 tuổi (2020)</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="font-semibold text-green-700">Bảo hiểm y tế</div>
                      <div className="text-green-600">90% dân số</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src="https://techmoss.vn/wp-content/uploads/2022/03/Top-6-benh-vien-tot-nhat-tai-Viet-Nam-nam-2022.jpg"
                    alt="Bệnh viện hiện đại"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Cơ sở hạ tầng */}
              <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Cơ sở hạ tầng
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Cơ sở hạ tầng Việt Nam đã được hiện đại hóa đáng kể. Hệ thống giao thông được mở rộng 
                    với nhiều cầu cầu, đường cao tốc, sân bay quốc tế. Hạ tầng viễn thông phát triển mạnh, 
                    internet băng rộng phủ sóng toàn quốc, đáp ứng nhu cầu phát triển kinh tế số.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="font-semibold text-orange-700">Đường cao tốc</div>
                      <div className="text-orange-600">1,163 km (2020)</div>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <div className="font-semibold text-indigo-700">Sân bay quốc tế</div>
                      <div className="text-indigo-600">8 sân bay</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nhat_Tan_Bridge_at_night_2016.jpg/1200px-Nhat_Tan_Bridge_at_night_2016.jpg"
                    alt="Cầu Nhật Tân"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Hội nhập quốc tế */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-6">
              <svg className="w-6 h-6 inline mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              Hội nhập quốc tế
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Major Organizations */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Tổ chức quốc tế chính</h4>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6Du_33aQ3icLRFZRVf_FWvBdI8USRSXxWA&s"
                          alt="WTO Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700">Tổ chức Thương mại Thế giới</h5>
                        <p className="text-sm text-blue-600">Thành viên từ 11/01/2007</p>
                        <p className="text-xs text-blue-500 mt-1">Mở cửa thị trường, tăng cường thương mại</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                        <img 
                          src="https://i.ex-cdn.com/vietnamfinance.vn/files/f1/news/minhanh/2018/7/18/vnF-LHQ.jpg"
                          alt="UN Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700">Liên Hợp Quốc</h5>
                        <p className="text-sm text-green-600">Thành viên từ 20/09/1977</p>
                        <p className="text-xs text-green-500 mt-1">Hợp tác đa phương, phát triển bền vững</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Seal_of_ASEAN.svg/1200px-Seal_of_ASEAN.svg.png"
                          alt="ASEAN Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700">Hiệp hội Đông Nam Á</h5>
                        <p className="text-sm text-purple-600">Thành viên từ 28/07/1995</p>
                        <p className="text-xs text-purple-500 mt-1">Hợp tác khu vực, phát triển kinh tế</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwv7-mv_VM8fQMxluY9iYqRsPyps4p_bAzA&s"
                          alt="APEC Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700">Diễn đàn Hợp tác Kinh tế châu Á-Thái Bình Dương</h5>
                        <p className="text-sm text-orange-600">Thành viên từ 11/1998</p>
                        <p className="text-xs text-orange-500 mt-1">Thúc đẩy thương mại, đầu tư</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Trade Agreements & Achievements */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Hiệp định thương mại & Thành tựu</h4>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border-l-4 border-red-500">
                    <h5 className="font-semibold text-red-700 mb-2">EVFTA - Hiệp định Thương mại Tự do EU-Việt Nam</h5>
                    <p className="text-sm text-red-600 mb-2">Ký kết năm 2019, có hiệu lực từ 2020</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-red-100 p-2 rounded">
                        <span className="font-medium">Xuất khẩu:</span> Tăng 42% vào EU
                      </div>
                      <div className="bg-red-100 p-2 rounded">
                        <span className="font-medium">Thuế quan:</span> Giảm 99% dòng thuế
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-xl border-l-4 border-indigo-500">
                    <h5 className="font-semibold text-indigo-700 mb-2">CPTPP - Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương</h5>
                    <p className="text-sm text-indigo-600 mb-2">Tham gia từ 2018</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-indigo-100 p-2 rounded">
                        <span className="font-medium">Thị trường:</span> Tiếp cận 11 quốc gia
                      </div>
                      <div className="bg-indigo-100 p-2 rounded">
                        <span className="font-medium">Đầu tư:</span> Bảo hộ quyền sở hữu trí tuệ
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-xl border-l-4 border-teal-500">
                    <h5 className="font-semibold text-teal-700 mb-2">RCEP - Hiệp định Đối tác Kinh tế Toàn diện Khu vực</h5>
                    <p className="text-sm text-teal-600 mb-2">Có hiệu lực từ 2022</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-teal-100 p-2 rounded">
                        <span className="font-medium">Khu vực:</span> 15 quốc gia châu Á-Thái Bình Dương
                      </div>
                      <div className="bg-teal-100 p-2 rounded">
                        <span className="font-medium">GDP:</span> 30% GDP toàn cầu
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Summary */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">194</div>
                  <div className="text-sm text-gray-600">Quốc gia có quan hệ ngoại giao</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Hiệp định thương mại tự do</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Tỷ USD xuất khẩu hàng năm</div>
                </div>
              </div>
              <p className="text-center text-gray-700 mt-4 text-sm">
                <strong>Thành tựu nổi bật:</strong> Việt Nam đã trở thành đối tác tin cậy trong cộng đồng quốc tế, 
                tham gia tích cực các tổ chức đa phương và ký kết nhiều hiệp định thương mại quan trọng, 
                mở rộng cơ hội phát triển kinh tế và nâng cao vị thế trên trường quốc tế.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Quiz Section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Quiz data={quizData} />
        </motion.div> */}

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Timeline />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DoiMoi
