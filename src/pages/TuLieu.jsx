import React from 'react'
import { Card, Button, Tag } from 'antd'
import { motion } from 'framer-motion'
import { DownloadOutlined, FileTextOutlined, VideoCameraOutlined, PictureOutlined } from '@ant-design/icons'

const TuLieu = () => {
  const documents = [
    {
      id: 1,
      title: "Nghị quyết Đại hội VI của Đảng (1986)",
      type: "document",
      category: "Chính trị",
      description: "Văn kiện lịch sử về chính sách Đổi mới",
      size: "2.3 MB",
      format: "PDF"
    },
    {
      id: 2,
      title: "Báo cáo kinh tế - xã hội 1986-2020",
      type: "document", 
      category: "Kinh tế",
      description: "Thống kê và phân tích 35 năm Đổi mới",
      size: "5.7 MB",
      format: "PDF"
    },
    {
      id: 3,
      title: "Hình ảnh thời kì bao cấp",
      type: "image",
      category: "Lịch sử",
      description: "Bộ sưu tập ảnh về cuộc sống thời bao cấp",
      size: "15.2 MB",
      format: "ZIP"
    },
    {
      id: 4,
      title: "Video: Lịch sử Đổi mới Việt Nam",
      type: "video",
      category: "Giáo dục",
      description: "Phim tài liệu về quá trình Đổi mới",
      size: "120 MB",
      format: "MP4"
    },
    {
      id: 5,
      title: "Hiến pháp nước CHXHCN Việt Nam 2013",
      type: "document",
      category: "Pháp luật",
      description: "Luật cơ bản của nhà nước",
      size: "1.8 MB",
      format: "PDF"
    },
    {
      id: 6,
      title: "Thống kê kinh tế 2020-2023",
      type: "document",
      category: "Kinh tế",
      description: "Số liệu kinh tế giai đoạn gần đây",
      size: "3.1 MB",
      format: "XLSX"
    }
  ]

  const getIcon = (type) => {
    switch(type) {
      case 'document': return <FileTextOutlined />
      case 'video': return <VideoCameraOutlined />
      case 'image': return <PictureOutlined />
      default: return <FileTextOutlined />
    }
  }

  const getTypeColor = (category) => {
    const colors = {
      'Chính trị': 'red',
      'Kinh tế': 'blue', 
      'Lịch sử': 'green',
      'Giáo dục': 'purple',
      'Pháp luật': 'orange'
    }
    return colors[category] || 'default'
  }

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-header">Tư liệu và Tài nguyên</h1>
        <div className="section-quote">
          "Tư liệu lịch sử là kho tàng tri thức quý báu của dân tộc"
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="text-center bg-gradient-to-br from-red-50 to-red-100">
              <div className="text-2xl font-bold text-red-600">6</div>
              <div className="text-sm text-red-500">Tài liệu</div>
            </Card>
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-blue-500">Văn bản chính thức</div>
            </Card>
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-2xl font-bold text-green-600">2</div>
              <div className="text-sm text-green-500">Tài liệu đa phương tiện</div>
            </Card>
            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-2xl font-bold text-purple-600">148</div>
              <div className="text-sm text-purple-500">MB Dung lượng</div>
            </Card>
          </div>
        </motion.div>

        {/* Document Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <Card 
                  className="content-card h-full hover:shadow-xl transition-all duration-300"
                  actions={[
                    <Button 
                      type="primary" 
                      icon={<DownloadOutlined />} 
                      size="small"
                      className="bg-primary hover:bg-red-700"
                    >
                      Tải xuống
                    </Button>
                  ]}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="text-2xl text-primary">
                      {getIcon(doc.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-1 line-clamp-2">
                        {doc.title}
                      </h4>
                      <Tag color={getTypeColor(doc.category)} size="small">
                        {doc.category}
                      </Tag>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {doc.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{doc.format}</span>
                    <span>{doc.size}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              🔗 Tài nguyên bổ sung
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Trang web chính thức</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <a href="#" className="text-blue-600 hover:underline text-sm">
                      Cổng thông tin Chính phủ
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <a href="#" className="text-blue-600 hover:underline text-sm">
                      Tổng cục Thống kê
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <a href="#" className="text-blue-600 hover:underline text-sm">
                      Viện Lịch sử Đảng
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3">Thư viện số</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <a href="#" className="text-blue-600 hover:underline text-sm">
                      Thư viện Quốc gia Việt Nam
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <a href="#" className="text-blue-600 hover:underline text-sm">
                      Kho lưu trữ quốc gia
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <a href="#" className="text-blue-600 hover:underline text-sm">
                      Bảo tàng Lịch sử Việt Nam
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="content-card">
            <h3 className="text-xl font-semibold text-primary mb-4">
              📋 Hướng dẫn sử dụng
            </h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">Lưu ý quan trọng:</h5>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Tài liệu chỉ được sử dụng cho mục đích học tập và nghiên cứu</li>
                <li>• Không được sao chép, phân phối trái phép</li>
                <li>• Trích dẫn phải ghi rõ nguồn gốc</li>
                <li>• Liên hệ quản trị viên nếu cần hỗ trợ</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TuLieu
