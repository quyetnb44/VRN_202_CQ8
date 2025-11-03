import React from 'react'
import { Card, Tooltip, Image } from 'antd'
import { motion } from 'framer-motion'
import { MessageOutlined, CalendarOutlined, EnvironmentOutlined, ShoppingOutlined, HomeOutlined, BarChartOutlined, FlagOutlined, ExclamationCircleOutlined, TrophyOutlined } from '@ant-design/icons'

const BaoCap = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-8">
              Thời kì Bao cấp
            </h1>
            <div className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              (1975–1986)
            </div>
            
            <motion.div
              className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <MessageOutlined className="text-4xl text-orange-500 mb-4" />
              <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                "Thời kì bao cấp là giai đoạn khó khăn nhưng cần thiết trong quá trình xây dựng chủ nghĩa xã hội ở Việt Nam"
              </blockquote>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Image
              src="https://thanhnien.mediacdn.vn/uploaded/congthang/2015_05_17/temphieu_PUHU.jpg?width=500"
              alt="Xếp hàng mua lương thực thời bao cấp"
              className="rounded-2xl shadow-2xl mx-auto max-w-2xl"
              preview={{
                mask: <div className="bg-black/50 text-white p-2 rounded">Xem ảnh lớn</div>
              }}
            />
            <p className="text-sm text-gray-600 mt-4 italic">Xếp hàng mua lương thực thời bao cấp</p>
          </motion.div>
        </motion.div>

        {/* Bối cảnh sau 1975 */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-8">
              <CalendarOutlined className="text-3xl text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Bối cảnh sau 1975</h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
                <div className="space-y-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-red-800 mb-3">Tình hình đất nước</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sau hơn 20 năm chiến tranh liên miên, đất nước bị tàn phá nặng nề</li>
                      <li>• Cơ sở hạ tầng hầu như kiệt quệ, sản xuất đình đốn</li>
                      <li>• Mỹ áp đặt cấm vận toàn diện đối với Việt Nam</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-orange-800 mb-3">Thách thức quốc tế</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Quan hệ với Trung Quốc căng thẳng → chiến tranh biên giới phía Bắc (1979)</li>
                      <li>• Việt Nam phải đưa quân sang Campuchia giúp nhân dân thoát khỏi chế độ diệt chủng Pol Pot</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-yellow-800 mb-3">Nền kinh tế</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Xuất phát từ cơ sở vật chất rất thấp</li>
                      <li>• Công nghiệp nhỏ bé, chủ yếu thủ công</li>
                      <li>• Nông nghiệp chủ yếu tự cung tự cấp</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="http://redsvn.net/wp-content/uploads/2017/06/Redsvn-Ha-Noi-Hai-Phong-1979-01.jpg~original"
                  alt="Phố Tràng Tiền và Nhà hát Lớn Hà Nội năm 1979"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">Phố Tràng Tiền và Nhà hát Lớn Hà Nội năm 1979</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://danviet.ex-cdn.com/files/f1/upload/1-2019/images/2019-02-14/Loat-anh-kho-quen-cuoc-chien-tranh-bien-gioi-phia-Bac-1979-241-1550156356-width674height500.jpg"
                  alt="Chiến tranh biên giới phía Bắc 1979"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">Chiến sỹ cầm súng B41 bên cột mốc biên giới Lạng Sơn - Trung Quốc (1979)</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://i1-vnexpress.vnecdn.net/2019/01/05/3-1546674982.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=8Mq4MOtiMFBhrSbKLQGHtA"
                  alt="Quân tình nguyện Việt Nam tại Phnom Penh"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">Quân tình nguyện Việt Nam tuần tra trên đường phố Phnom Penh (7/1/1979)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Cơ chế bao cấp */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-8">
              <ShoppingOutlined className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Cơ chế bao cấp – Đặc trưng</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="font-bold text-lg mb-3 text-blue-800">Độc quyền nhà nước</h3>
                <p className="text-sm text-gray-700">Nhà nước giữ độc quyền trong sản xuất, phân phối và lưu thông hàng hóa</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="text-4xl mb-4">🎫</div>
                <h3 className="font-bold text-lg mb-3 text-green-800">Hệ thống tem phiếu</h3>
                <p className="text-sm text-gray-700">13kg gạo/người/tháng, vài mét vải, vài lít dầu. Không có tem → không mua được</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="font-bold text-lg mb-3 text-red-800">Hạn chế tư nhân</h3>
                <p className="text-sm text-gray-700">Công-thương nghiệp miền Nam bị cải tạo về quốc doanh hoặc tập thể</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="font-bold text-lg mb-3 text-purple-800">Bình quân chủ nghĩa</h3>
                <p className="text-sm text-gray-700">Phân phối gần như ngang nhau, không gắn với năng suất lao động</p>
              </Card>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://icdn.dantri.com.vn/thumb_w/1280/2018/11/4/photo-1-15413203930142127986118.jpg"
                  alt="Phiếu mua thịt thời bao cấp"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Phiếu mua thịt</h3>
                  <p className="text-gray-600">Mỗi phiếu như thế này người dân được đổi lấy 1kg thịt</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://i1-ngoisao.vnecdn.net/2016/11/14/mau-dich-2-1479096581.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=v-QTeqEpHWCwA09GDANHrw"
                  alt="Cửa hàng mậu dịch"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Cửa hàng mậu dịch</h3>
                  <p className="text-gray-600">Cảnh mua bán tại một cửa hàng mậu dịch thời bao cấp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Đời sống xã hội */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-8">
              <HomeOutlined className="text-3xl text-green-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Đời sống xã hội</h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <Card className="h-full shadow-lg border-l-4 border-green-500">
                <h3 className="font-bold text-xl mb-4 text-green-800">Cuộc sống hàng ngày</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🕐 Xếp hàng mua hàng</h4>
                    <p className="text-gray-700">Người dân phải xếp hàng dài từ sáng sớm để chờ mua gạo, dầu, đường, thịt</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">💰 Thu nhập thấp</h4>
                    <p className="text-gray-700">Đồng lương cán bộ, công nhân chỉ đủ trang trải một phần nhỏ</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🌱 Sinh kế phụ</h4>
                    <p className="text-gray-700">Để tồn tại, người dân phải trồng thêm rau, nuôi gà, heo, buôn bán nhỏ lẻ</p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🖤 Chợ đen</h4>
                    <p className="text-gray-700">Hàng hóa được bán ngoài luồng với giá cao gấp nhiều lần giá chính thức</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🎊 Tết Nguyên đán</h4>
                    <p className="text-gray-700">Được phát thêm "hàng tiêu chuẩn" như vài lạng mứt, bánh kẹo ít ỏi</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <h3 className="font-bold text-xl mb-4 text-amber-800">Tài sản "lớn" thời bao cấp</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl">🚲</div>
                    <div>
                      <div className="font-semibold">Xe đạp Phượng Hoàng</div>
                      <div className="text-sm text-gray-600">Từ Trung Quốc</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl">📻</div>
                    <div>
                      <div className="font-semibold">Radio National</div>
                      <div className="text-sm text-gray-600">Phương tiện giải trí</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl">🌀</div>
                    <div>
                      <div className="font-semibold">Quạt con cóc</div>
                      <div className="text-sm text-gray-600">Sản phẩm vang bóng</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://bizweb.dktcdn.net/100/412/747/files/xe-dap-phuong-hoang-den-tu-trung-quoc.webp?v=1721641471147"
                  alt="Xe đạp Phượng Hoàng"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">Xe đạp Phượng Hoàng</h4>
                  <p className="text-sm text-gray-600">Phương tiện di chuyển chính của thời kỳ</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://imgs.vietnamnet.vn/Images/vnn/2014/11/11/08/20141111080547-quat-con-coc.jpg?width=0&s=Pxw3DZL_St48rsnzxOLSKQ"
                  alt="Quạt con cóc"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">Quạt con cóc</h4>
                  <p className="text-sm text-gray-600">Sản phẩm vang bóng một thời</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://cdn.kienthuc.net.vn/images/7d695db680e24205411e0a194942192104047f4bd4302a941a98d5d48e34ef41e6ba87b9163dfbf961d84291e0cc4714cbe1b29dd02f4ba862b5532a97de91ad17105ea3265d4ba0f4e865fd7d7c7d5a/anh-doc-ve-cho-den-sai-gon-truoc-1975.jpg"
                  alt="Chợ đen Sài Gòn"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">Chợ đen Sài Gòn</h4>
                  <p className="text-sm text-gray-600">Khu "chợ đen" trên đại lộ Lê Lợi trước 1975</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Kinh tế */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-8">
              <BarChartOutlined className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Kinh tế</h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🌾</div>
                  <h3 className="font-bold text-xl text-green-800">Nông nghiệp</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">1976–1986</h4>
                    <p className="text-sm text-gray-700">Sản lượng lúa bình quân chỉ <strong>13,4 triệu tấn/năm</strong>, không đủ ăn, phải nhập khẩu gạo</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Sau Chỉ thị 100 (1981)</h4>
                    <p className="text-sm text-gray-700">Khoán sản phẩm đến hộ nông dân → sản lượng tăng lên <strong>17 triệu tấn/năm</strong> (1981–1985)</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏭</div>
                  <h3 className="font-bold text-xl text-blue-800">Công nghiệp</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Phát triển chậm, chủ yếu sản xuất hàng tiêu dùng thiết yếu</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Công nghiệp nặng</h4>
                    <p className="text-sm text-gray-700">Cơ khí, điện lực được đầu tư nhưng hiệu quả thấp, phụ thuộc viện trợ từ Liên Xô và khối XHCN</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🛒</div>
                  <h3 className="font-bold text-xl text-orange-800">Thương mại</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Mất cân bằng</h4>
                    <p className="text-sm text-gray-700">Tỷ lệ nhập siêu so với xuất khẩu lên đến <strong>360%</strong></p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">Hàng hóa khan hiếm, phân phối theo tiêu chuẩn</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://imgcdn.tapchicongthuong.vn/thumb/w_1000/tcct-media/21/7/23/anh_1.png"
                  alt="Biểu đồ sản lượng lúa 1976–1986"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">Sản lượng lúa 1976–1986</h4>
                  <p className="text-sm text-gray-600">Biểu đồ thể hiện sự tăng trưởng sau Chỉ thị 100</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://imgcdn.tapchicongthuong.vn/thumb/w_1000/tcct-media/23/9/18/1976-1985-san-xuat-cong-nghiep-chia-thanh-2-giai-doan-ro-ret_6507beeb54dcb.jpg"
                  alt="Nhà máy Diesel Sông Công"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">Nhà máy Diesel Sông Công</h4>
                  <p className="text-sm text-gray-600">Trung tâm chế tạo động cơ lớn nhất VN do Liên Xô giúp xây dựng (1985)</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://cdn-i.vtcnews.vn/files/f1/2016/05/28/he-lo-vu-khi-dang-gom-lien-xo-vien-tro-cho-quan-giai-phong-mien-nam-0.jpg"
                  alt="Vũ khí Liên Xô viện trợ"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">Viện trợ quân sự</h4>
                  <p className="text-sm text-gray-600">Vũ khí Liên Xô viện trợ cho Quân giải phóng Miền Nam</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Chính trị – Quốc phòng */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center justify-center mb-12">
              <FlagOutlined className="text-3xl text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Chính trị – Quốc phòng</h2>
            </div>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 h-full"></div>

            {/* Timeline Events */}
            <div className="space-y-16">
              
              {/* 1976 - Đổi tên nước */}
              <motion.div variants={fadeInUp} className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-red-50 to-red-100 border-red-200">
                    <div className="text-center">
                      <div className="w-full h-full mx-auto rounded-lg overflow-hidden shadow-md mb-4">
                        <Image
                          src="https://file.qdnd.vn/data/images/0/2016/04/22/phucthang/22042016tcq01.jpg?w=578"
                          alt="Quốc hội Khóa VI"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-red-800 mb-2">1976</h3>
                        <h4 className="text-lg font-semibold text-red-700 mb-3">Đổi tên nước</h4>
                        <p className="text-sm text-gray-700">
                          Quốc hội khóa VI quyết định đổi tên nước thành <strong>Cộng hòa Xã hội Chủ nghĩa Việt Nam</strong>
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 1976 - Đại hội IV */}
              <motion.div variants={fadeInUp} className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="w-1/2 pl-8">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                    <div className="text-center">
                      <div className="w-full h-full mx-auto rounded-lg overflow-hidden shadow-md mb-4">
                        <Image
                          src="https://file3.qdnd.vn/data/images/0/2022/11/29/huyentrang_km/dai%20hoi%20dai%20bieu%20toan%20quoc%20lan%20thu%204.jpg?dpi=150&quality=100&w=870"
                          alt="Đại hội Đảng IV"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-800 mb-2">1976</h3>
                        <h4 className="text-lg font-semibold text-blue-700 mb-3">Đại hội IV</h4>
                        <p className="text-sm text-gray-700">
                          Đề ra mục tiêu đưa cả nước lên CNXH, đẩy mạnh công nghiệp hóa
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* 1978-1989 - Chiến tranh Tây Nam */}
              <motion.div variants={fadeInUp} className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
                    <div className="text-center">
                      <div className="w-full h-full mx-auto rounded-lg overflow-hidden shadow-md mb-4">
                        <Image
                          src="https://media.vov.vn/sites/default/files/styles/large/public/2025-01/khmer_do_7.jpg"
                          alt="Giải phóng Phnom Penh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-orange-800 mb-2">1978-1989</h3>
                        <h4 className="text-lg font-semibold text-orange-700 mb-3">Chiến tranh biên giới Tây Nam</h4>
                        <p className="text-sm text-gray-700">
                          Chiến tranh với tập đoàn diệt chủng Khmer Đỏ, giải phóng nhân dân Campuchia
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 1979 - Giải phóng Phnom Penh */}
              <motion.div variants={fadeInUp} className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="w-1/2 pl-8">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                    <div className="text-center">
                      <div className="w-full h-full mx-auto rounded-lg overflow-hidden shadow-md mb-4">
                        <Image
                          src="https://i1-vnexpress.vnecdn.net/2019/01/05/3-1546674982.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=8Mq4MOtiMFBhrSbKLQGHtA"
                          alt="Quân tình nguyện VN tại Phnom Penh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">7/1/1979</h3>
                        <h4 className="text-lg font-semibold text-green-700 mb-3">Giải phóng Phnom Penh</h4>
                        <p className="text-sm text-gray-700">
                          Quân tình nguyện Việt Nam tiến vào giải phóng thủ đô Phnom Penh, lật đổ chế độ Khmer Đỏ
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* 1979-1989 - Chiến tranh phía Bắc */}
              <motion.div variants={fadeInUp} className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
                    <div className="text-center">
                      <div className="w-full h-full mx-auto rounded-lg overflow-hidden shadow-md mb-4">
                        <Image
                          src="https://danviet.ex-cdn.com/files/f1/upload/1-2019/images/2019-02-14/Loat-anh-kho-quen-cuoc-chien-tranh-bien-gioi-phia-Bac-1979-241-1550156356-width674height500.jpg"
                          alt="Chiến tranh biên giới phía Bắc"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-yellow-800 mb-2">1979-1989</h3>
                        <h4 className="text-lg font-semibold text-yellow-700 mb-3">Chiến tranh biên giới phía Bắc</h4>
                        <p className="text-sm text-gray-700">
                          Chiến tranh biên giới với Trung Quốc, bảo vệ chủ quyền lãnh thổ
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="w-1/2 pl-8"></div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* Hạn chế và nguyên nhân */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-8">
              <ExclamationCircleOutlined className="text-3xl text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Hạn chế và nguyên nhân</h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg border-l-4 border-red-500">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">⚠️</div>
                  <h3 className="font-bold text-xl text-red-800">Hạn chế</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">📉 Kinh tế trì trệ</h4>
                    <p className="text-sm text-gray-700">Nền kinh tế rơi vào khủng hoảng kéo dài</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">💸 Lạm phát phi mã</h4>
                    <p className="text-sm text-gray-700">Có năm lên tới <strong>700–800%</strong></p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">😰 Đời sống khó khăn</h4>
                    <p className="text-sm text-gray-700">Nhân dân cực kỳ khó khăn, thiếu thốn</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg border-l-4 border-blue-500">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🔍</div>
                  <h3 className="font-bold text-xl text-blue-800">Nguyên nhân</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">📊 Xuất phát điểm thấp</h4>
                    <p className="text-sm text-gray-700">Kinh tế – xã hội rất thấp sau chiến tranh</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">🚫 Cấm vận & chiến tranh</h4>
                    <p className="text-sm text-gray-700">Cấm vận quốc tế, chiến tranh biên giới</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">⚙️ Sai lầm quản lý</h4>
                    <p className="text-sm text-gray-700">Cơ chế tập trung quan liêu bao cấp, kìm hãm sáng tạo</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
              <Image
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/497858433_1112386797587726_7388083362950169530_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J2HhD2FjuUkQ7kNvwEF_1Ie&_nc_oc=Admy0-pxxvGJqF4c02_mtBv0eaQ7v-x4uSwNLg_Te3fhh1ncOi0T-eQe9-dOal8jddw&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=mWSVfjExmJ2ulAfUZqvfYw&oh=00_AfV0u039Fw0ScGe21Hnx7YLx5VrcAWppN6IHdnEXnuBF8Q&oe=68B24A7D"
                alt="Tiền giấy 30 đồng"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">Tiền giấy 30 đồng</h4>
                <p className="text-sm text-gray-600">Biểu tượng của thời kỳ lạm phát cao</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Ý nghĩa lịch sử */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-8">
              <TrophyOutlined className="text-3xl text-gold-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Ý nghĩa lịch sử</h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-500">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🏆</div>
                    <h3 className="font-bold text-2xl text-yellow-800">Thành tựu tinh thần</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/70 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">💪 Kiên cường vượt khó</h4>
                      <p className="text-sm text-gray-700">Dù khó khăn, nhân dân Việt Nam vẫn giữ vững độc lập, kiên cường vượt qua thử thách</p>
                    </div>
                    
                    <div className="bg-white/70 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">📚 Bài học quý báu</h4>
                      <p className="text-sm text-gray-700">Giai đoạn bao cấp để lại bài học lớn về phát triển kinh tế – xã hội</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full shadow-lg bg-gradient-to-br from-green-50 to-blue-50 border-l-4 border-green-500">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🚀</div>
                    <h3 className="font-bold text-2xl text-green-800">Nền tảng Đổi mới</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/70 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">🎯 Cơ sở thực tiễn</h4>
                      <p className="text-sm text-gray-700">Trở thành cơ sở thực tiễn quan trọng để Đảng khởi xướng công cuộc <strong>Đổi mới (Đại hội VI, 1986)</strong></p>
                    </div>
                    
                    <div className="bg-white/70 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">🌟 Mở đường tương lai</h4>
                      <p className="text-sm text-gray-700">Mở đường cho nền kinh tế thị trường định hướng XHCN, tạo ra những thành tựu to lớn về sau</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Đại hội VI - Bước ngoặt lịch sử</h3>
              <p className="text-lg mb-6 opacity-90">
                Từ những khó khăn của thời kỳ bao cấp, Đảng và nhân dân Việt Nam đã rút ra bài học quý báu, 
                mở ra con đường Đổi mới - nền tảng cho sự phát triển vượt bậc của đất nước
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="https://file3.qdnd.vn/data/images/0/2025/01/29/upload_2176/dhvi.jpg?dpi=150&quality=100&w=870"
                    alt="Đại hội VI"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 text-gray-800">
                    <h4 className="font-semibold">Đại hội VI (1986)</h4>
                    <p className="text-sm">Khởi xướng công cuộc Đổi mới</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-4 text-gray-800 mb-4">
                    <h4 className="font-semibold">Video tư liệu Đại hội VI</h4>
                    <p className="text-sm text-gray-600">Khởi xướng công cuộc Đổi mới</p>
                  </div>
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/xFHawdU99KQ"
                      title="Video tư liệu Đại hội VI - 1986"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.div
          className="text-center py-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-600 italic">
            Thời kì bao cấp - Một giai đoạn lịch sử đầy thách thức nhưng đã góp phần định hình nên Việt Nam ngày nay
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default BaoCap
