import React from 'react'
import { Card, Tooltip, Image, Progress } from 'antd'
import { motion } from 'framer-motion'
import { RiseOutlined, GlobalOutlined, RocketOutlined, DollarOutlined, LineChartOutlined, BankOutlined, HeartOutlined, DownloadOutlined, FileTextOutlined } from '@ant-design/icons'

const NhanDinh = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-900 text-yellow-300 py-20 px-6 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-yellow-300 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-yellow-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-300 rotate-45"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <div className="text-6xl mb-4">🇻🇳</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Việt Nam hôm nay
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-6">
              Cơ đồ • Tiềm lực • Vị thế • Uy tín
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl font-medium text-yellow-100"
          >
            "Chưa bao giờ mạnh mẽ và tươi sáng hơn"
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Section 1: Economic Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4">
              <RiseOutlined className="text-2xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tăng trưởng kinh tế đột phá</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="text-center">
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="https://nqs.1cdn.vn/2025/01/06/100947304835f46bad24.jpg"
                      alt="GDP Growth Vietnam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">$476.3B</div>
                      <div className="text-sm text-gray-600">GDP tăng 7,09% năm 2024, đạt 476,3 tỷ USD </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">7.96%</div>
                      <div className="text-sm text-gray-600">Quý 2/2025 GDP neo ở mức 7,96% </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="text-center">
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="https://files.customs.gov.vn/CustomsCMS/ckeditor/images/image009(11).png"
                      alt="Trade Statistics Vietnam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$786B</div>
                      <div className="text-sm text-gray-600">Tổng kim ngạch xuất nhập khẩu 11 tháng 2024 đạt 786 tỷ USD </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">$24.77B</div>
                      <div className="text-sm text-gray-600">Thặng dư thương mại năm 2024 đạt 24,77 tỷ USD</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <Card className="shadow-lg bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <LineChartOutlined className="mr-2 text-green-600" />
                    Xuất khẩu tăng trưởng(2024)
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Xuất khẩu</span>
                        <span className="text-sm font-semibold text-green-600">+14.3%</span>
                      </div>
                      <Progress percent={14.3} strokeColor="#10b981" showInfo={false} />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <DollarOutlined className="mr-2 text-blue-600" />
                    Nhập khẩu tăng trưởng(2024)
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Nhập khẩu</span>
                        <span className="text-sm font-semibold text-blue-600">+16.7%</span>
                      </div>
                      <Progress percent={16.7} strokeColor="#3b82f6" showInfo={false} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Section 2: International Integration */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-4">
              <GlobalOutlined className="text-2xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Việt Nam trên bản đồ thế giới</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto"></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <div className="text-center">
                <div className="w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="https://www.visualcapitalist.com/wp-content/uploads/2023/08/BRICS-Expansion_Shareable.jpg"
                    alt="BRICS Expansion Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-2">🤝</div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">Đối tác BRICS</div>
                    <div className="text-sm text-gray-600">Tháng 6/2025, Việt Nam chính thức trở thành đối tác BRICS, nâng tầm hợp tác kinh tế và ngoại giao </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">44%</div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">GDP toàn cầu</div>
                    <div className="text-sm text-gray-600">BRICS+ hiện chiếm 44 % GDP toàn cầu và 56 % dân số thế giới </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-2">56%</div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">Dân số thế giới</div>
                    <div className="text-sm text-gray-600">BRICS+ đại diện</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="shadow-lg bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <div className="text-center p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Tầm quan trọng của việc gia nhập BRICS+</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Việt Nam chính thức trở thành đối tác BRICS, nâng tầm hợp tác kinh tế và ngoại giao, 
                  mở ra cơ hội tiếp cận thị trường khổng lồ chiếm gần một nửa GDP toàn cầu.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Section 3: Economic Reforms & Future Ambitions */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4">
              <RocketOutlined className="text-2xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hội nhập, Đổi mới, Bứt phá</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <div className="text-center">
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="https://media.vov.vn/sites/default/files/styles/large/public/2024-01/ngoai%20giao%20cay%20tre_0.jpg"
                      alt="Bamboo Diplomacy Vietnam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800">Ngoại giao "Cây tre"</h4>
                    <p className="text-sm text-gray-600">
                    Áp dụng Ngoại giao “Bamboo Diplomacy” – linh hoạt, kiên định, đan hòa lợi ích với siêu cường
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <BankOutlined className="text-4xl text-blue-600 mb-4" />
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Mục tiêu 2025</h4>
                    <p className="text-sm text-gray-600">Việt Nam đặt mục tiêu tăng trưởng 8,3–8,5% năm 2025 </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Tăng trưởng GDP</span>
                        <span className="text-lg font-bold text-blue-600">8.3-8.5%</span>
                      </div>
                      <Progress percent={85} strokeColor="#3b82f6" showInfo={false} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-sm text-gray-700 mb-4">
                       <p>Xu hướng chuyển sang công nghệ cao: bán dẫn, AI, năng lượng tái tạo; đường sắt tốc độ cao Bắc–Nam trị giá 67 tỷ USD </p>
                      </div>
                      <div className="w-full h-40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image
                          src="https://vinuni.edu.vn/wp-content/uploads/2024/12/kham-pha-tri-tue-nhan-tao-ai-la-gi-va-tai-sao-no-quan-trong-hinh-1.jpg"
                          alt="AI Technology Vietnam"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          preview={{
                            mask: <div className="bg-black bg-opacity-50 text-white text-sm">🔍 Xem chi tiết</div>
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <Card className="shadow-lg bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
              <div className="text-center p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Tham vọng "Asian Tiger Economy"</h4>
                <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_fG4qsgjjhc"
                    title="Vietnam Economic Growth"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Với chiến lược chuyển đổi sang công nghệ cao và đầu tư hạ tầng quy mô lớn, 
                  Việt Nam đang hướng tới trở thành một "Con hổ châu Á" mới trong thập kỷ tới.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Section 4: Quality of Life & People */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mb-4">
              <HeartOutlined className="text-2xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Dân giàu, nước mạnh</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="text-center">
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="https://cdn-images.vtv.vn/thumb_w/1200/2022/11/27/gdp271122-16695090440891684850227.png"
                      alt="GDP per capita Vietnam growth"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">$4,500</div>
                      <div className="text-sm text-gray-600">GDP bình quân đầu người tăng từ {'<'} $700 (1986) lên ~ $4,500 (2024) </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-lg">
                      <div className="text-sm text-green-700 font-semibold">Tăng trưởng 6.4 lần</div>
                      <div className="text-xs text-green-600">Trong gần 40 năm Đổi mới</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="text-center">
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="https://dntt.mediacdn.vn/197608888129458176/2022/4/29/so-luong-ng-ngheo-20220428145735403-16512215638111114154031.png"
                      alt="Poverty reduction Vietnam"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{'<'}4%</div>
                      <div className="text-sm text-gray-600">Tỷ lệ nghèo (2023)</div>
                      <div className="text-xs text-gray-500 mt-1">Giảm từ 14% (2010)</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 rounded-lg">
                      <div className="text-sm text-blue-700 font-semibold">Giảm 70% tỷ lệ nghèo</div>
                      <div className="text-xs text-blue-600">Chuẩn {'<'}$3.65/ngày</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                <div className="text-center">
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="https://media.vietnamplus.vn/images/87c1da582c501a99b4b23f2f14d2e91f5205c2503e43f43f79a7972bb5dc79f769637586b9dd03a8e09287e85b93804eb5322a70c4bdb858bf703196dc46522a/INFOTUOITHOTBT42.jpg"
                      alt="Life expectancy Vietnam"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-purple-600 mb-2">74.5</div>
                      <div className="text-sm text-gray-600">Tuổi thọ trung bình (2023)</div>
                      <div className="text-xs text-gray-500 mt-1">Tăng từ 70.5 tuổi (1990)</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-3 rounded-lg">
                      <div className="text-sm text-purple-700 font-semibold">Tăng 4 năm</div>
                      <div className="text-xs text-purple-600">Cải thiện y tế & dinh dưỡng</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <Card className="shadow-lg bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Chỉ số phát triển con người toàn diện</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-2">98,85%</div>
                    <div className="text-sm text-gray-700">Tỷ lệ biết chữ</div>
                    <div className="text-xs text-gray-500 mt-1">Tăng từ 87% (2000)</div>
                  </div>
                  <div className="text-center bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-sm text-gray-700">Trẻ em đến trường</div>
                    <div className="text-xs text-gray-500 mt-1">Giáo dục phổ cập</div>
                  </div>
                  <div className="text-center bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-2">93%</div>
                    <div className="text-sm text-gray-700">Bao phủ BHYT</div>
                    <div className="text-xs text-gray-500 mt-1">Y tế toàn dân</div>
                  </div>
                  <div className="text-center bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-2">78%</div>
                    <div className="text-sm text-gray-700">Xã đạt chuẩn NTM</div>
                    <div className="text-xs text-gray-500 mt-1">Nông thôn mới</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Việt Nam đã đạt được những bước tiến vượt bậc trong cải thiện chất lượng cuộc sống, 
                    từ việc giảm nghèo mạnh mẽ đến nâng cao tuổi thọ và mở rộng cơ hội giáo dục, y tế cho toàn dân.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Section 5: Conclusion & Call-to-Action */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mb-4">
              <RiseOutlined className="text-2xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Chưa từng có, đang sánh vai thế giới</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto"></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tóm tắt thành tựu nổi bật</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                    <div className="flex items-center mb-3">
                      <RiseOutlined className="text-2xl text-green-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-800">Kinh tế phát triển</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• GDP tăng 7.09% năm 2024 ($476.3B)</li>
                      <li>• Xuất nhập khẩu $715.55B (11 tháng 2024)</li>
                      <li>• GDP bình quân đầu người năm 2024 khoảng $4500</li>
                      <li>• Thặng dư thương mại $24.77B</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                    <div className="flex items-center mb-3">
                      <GlobalOutlined className="text-2xl text-purple-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-800">Vị thế quốc tế</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Đối tác BRICS từ tháng 6/2025</li>
                      <li>• Quan hệ với 193 quốc gia</li>
                      <li>• 16 FTA với 60+ quốc gia</li>
                      <li>• Top 20 thương mại thế giới</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <HeartOutlined className="text-2xl text-blue-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-800">Chất lượng cuộc sống</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Tuổi thọ 74.5 tuổi (tăng 4 năm)</li>
                      <li>• Tỷ lệ nghèo {'<'}4% (giảm từ 14%)</li>
                      <li>• 93% bao phủ BHYT</li>
                      <li>• 78% xã đạt chuẩn NTM</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    <strong>Tăng trưởng đi đôi với đổi mới và phát triển bền vững</strong> - 
                    Việt Nam đang khẳng định vị thế là một trong những nền kinh tế năng động nhất thế giới.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <Card className="shadow-xl bg-gradient-to-br from-red-800 to-red-900 text-yellow-300 border-red-700">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Khám phá thêm về thành tựu Việt Nam</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                  >
                    <FileTextOutlined className="mr-2" />
                    Khám phá báo cáo chi tiết
                  </motion.button> */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={async () => {
                      try {
                        const imageUrl = 'https://media.vietnamplus.vn/images/87c1da582c501a99b4b23f2f14d2e91ff55546d9a543a98ddde2bb5de35ebb6418e172c8dc581a5ab52999553c6b5de97436a993dd05491988813a5aae53b9255040513851267fe007fe9f09f10c5946/infographics_kinh_te_vietnam.jpeg';
                        const response = await fetch(imageUrl);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = 'Infographic_Kinh_Te_Vietnam.jpeg';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                      } catch (error) {
                        console.error('Download failed:', error);
                        // Fallback: open in new tab
                        window.open('https://media.vietnamplus.vn/images/87c1da582c501a99b4b23f2f14d2e91ff55546d9a543a98ddde2bb5de35ebb6418e172c8dc581a5ab52999553c6b5de97436a993dd05491988813a5aae53b9255040513851267fe007fe9f09f10c5946/infographics_kinh_te_vietnam.jpeg', '_blank');
                      }
                    }}
                    className="bg-gradient-to-r from-yellow-300 to-orange-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center cursor-pointer"
                  >
                    <DownloadOutlined className="mr-2" />
                    Tải Infographic toàn cảnh
                  </motion.button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-red-800 to-red-900 text-yellow-300 py-12"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-4">Nguồn tham khảo uy tín</h4>
            <p className="text-yellow-100 text-lg">Dữ liệu được tổng hợp từ các nguồn chính thức và đáng tin cậy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-yellow-400 text-red-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <BankOutlined className="text-xl" />
              </div>
              <h5 className="font-semibold mb-2">Chính phủ Việt Nam</h5>
              <a 
                href="https://baochinhphu.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-200 hover:text-yellow-100 text-sm underline"
              >
                baochinhphu.vn
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 text-red-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <GlobalOutlined className="text-xl" />
              </div>
              <h5 className="font-semibold mb-2">Ngân hàng Thế giới</h5>
              <a 
                href="https://worldbank.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-200 hover:text-yellow-100 text-sm underline"
              >
                worldbank.org
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 text-red-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <LineChartOutlined className="text-xl" />
              </div>
              <h5 className="font-semibold mb-2">Reuters</h5>
              <a 
                href="https://reuters.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-200 hover:text-yellow-100 text-sm underline"
              >
                reuters.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 text-red-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <RiseOutlined className="text-xl" />
              </div>
              <h5 className="font-semibold mb-2">Vietnam Briefing</h5>
              <a 
                href="https://vietnam-briefing.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-200 hover:text-yellow-100 text-sm underline"
              >
                vietnambriefing.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-yellow-600 mt-8 pt-6 text-center">
            <p className="text-yellow-200 text-sm">
              © 2025 - Dữ liệu được cập nhật đến tháng 1/2025. 
              <span className="block mt-2">
                "Việt Nam - Chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay"
              </span>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default NhanDinh
