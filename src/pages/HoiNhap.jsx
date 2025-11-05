import React from "react";
import { Card, Tooltip, Image } from "antd";
import { motion } from "framer-motion";
import {
  BarChartOutlined, // Kinh tế/Đường lối
  FlagOutlined, // Bối cảnh/Vị thế
  TrophyOutlined, // Nâng tầm chiến lược
  ExclamationCircleOutlined, // Độc lập, Tự chủ
  MessageOutlined, // Kết luận/Bài học
  HomeOutlined, // Chính trị
  ShoppingOutlined, // Kinh tế
  CalendarOutlined, // Giai đoạn
  DownloadOutlined, // Nút hành động
  RiseOutlined, // Tăng trưởng
  GlobalOutlined, // Toàn cầu hóa
  UsergroupAddOutlined, // Gia nhập tổ chức
  FileTextOutlined, // Hiệp định
} from "@ant-design/icons";

const HoiNhap = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const ImagePlaceholder = ({ src, alt, caption }) => (
    <motion.div variants={fadeInUp} className="mb-6 text-center">
      <Image
        width="100%"
        height={250}
        style={{
          objectFit: "cover",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
        }}
        src={src}
        alt={alt}
        fallback="https://placehold.co/400x250/ccc/white?text=Loading+Image..."
      />
      {caption && (
        <p className="mt-2 text-sm text-gray-500 italic">{caption}</p>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#eceae1" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <h1
              className="text-5xl md:text-6xl font-bold mb-8"
              style={{ color: "#6b291c" }}
            >
              Hội nhập quốc tế và tự chủ
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Giai đoạn Bản lề (1996–2005)
            </h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600 italic">
              Câu hỏi kiến tạo: Làm thế nào Việt Nam vừa mở rộng hội nhập quốc
              tế, vừa giữ vững độc lập, tự chủ trong giai đoạn 1996–2005?
            </p>
          </div>
        </motion.div>

        {/* Visual Element - Image Section (Phần chèn hình ảnh lớn) */}
        <motion.div variants={fadeInUp} className="mb-12">
          <Card
            className="shadow-2xl rounded-2xl overflow-hidden border-b-8 border-teal-500"
            bodyStyle={{ padding: 0 }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Trái: Hình ảnh minh họa */}
              <div className="lg:w-1/2 p-4 flex items-center justify-center bg-gray-100">
                <Image
                  width="100%"
                  height={350}
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                  src="https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/ct(253).jpg"
                  alt="Hình ảnh đại diện cho giai đoạn Việt Nam gia nhập các tổ chức quốc tế (ASEAN, APEC, ASEM) và ký BTA."
                  fallback="https://placehold.co/800x400/293a8d/ffffff?text=Loading+Image..."
                />
              </div>
              {/* Phải: Ngữ cảnh chính */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-white">
                <h3 className="text-3xl font-bold text-indigo-700 mb-4">
                  <FlagOutlined className="mr-2" /> Dấu ấn Hội nhập và Tự chủ
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Giai đoạn này là minh chứng cho sự chuyển mình từ nền kinh tế
                  khép kín sang hội nhập <strong>chủ động</strong>, với các cột
                  mốc quan trọng như gia nhập ASEAN, APEC và triển khai Hiệp
                  định Thương mại Việt–Mỹ.
                </p>
                <p className="mt-3 text-md text-gray-500 italic font-medium">
                  Nguyên tắc cốt lõi: "Giữ vững độc lập, tự chủ đi đôi với mở
                  rộng hợp tác quốc tế, đa phương hóa, đa dạng hóa quan hệ đối
                  ngoại." (Đại hội VIII)
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Content - Structure & Key Points */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Bối cảnh & Yêu cầu khách quan */}
            <motion.div variants={fadeInUp}>
              <Card
                title={
                  <span className="flex items-center text-lg font-bold text-blue-700">
                    <FlagOutlined className="mr-2 text-xl" /> 1. Bối cảnh & Yêu
                    cầu
                  </span>
                }
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl border-t-4 border-blue-500 h-full"
              >
                <div className="space-y-4 text-gray-700">
                  <p>
                    Sau 10 năm Đổi mới (1986–1996), Việt Nam đạt thành tựu quan
                    trọng: kinh tế tăng trưởng liên tục, chính trị ổn định.
                  </p>
                  <ImagePlaceholder
                    src="https://bcp.cdnchinhphu.vn/334894974524682240/2025/1/27/gdp1-1737981098327780556610.jpg"
                    alt="Biểu đồ tăng trưởng kinh tế Việt Nam giai đoạn 1986-1996"
                    caption="Hình 1: Tăng trưởng kinh tế sau Đổi mới"
                  />
                  <p>
                    Thách thức: Vẫn là nước đang phát triển, cơ sở vật chất kỹ
                    thuật yếu, nguy cơ tụt hậu cao so với khu vực.
                  </p>
                  <ImagePlaceholder
                    src="https://static.tapchitaichinh.vn/images/upload/vantruongtc/09022021/kinh_te_viet_nam4663362_2682021.jpg"
                    alt="Hình ảnh minh họa cơ sở hạ tầng còn hạn chế của Việt Nam"
                    caption="Hình 2: Những thách thức về hạ tầng và công nghệ"
                  />
                  <p className="font-semibold text-teal-600">
                    Yêu cầu khách quan: Phải chủ động hội nhập kinh tế quốc tế,
                    đồng thời giữ vững độc lập, tự chủ, an ninh quốc gia.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 2. Đường lối hội nhập quốc tế của Đảng giai đoạn 1996–2005 */}
            <motion.div variants={fadeInUp}>
              <Card
                title={
                  <span className="flex items-center text-lg font-bold text-indigo-700">
                    <BarChartOutlined className="mr-2 text-xl" /> 2. Đường lối
                    Hội nhập (1996–2005)
                  </span>
                }
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl border-t-4 border-indigo-500 h-full"
              >
                <h4 className="font-bold text-md mb-2">
                  <CalendarOutlined className="mr-1" /> 2.1. Đại hội VIII
                  (1996): Khởi đầu chủ động
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mục tiêu: Phấn đấu đến năm 2020, nước ta cơ bản trở thành
                    một nước công nghiệp theo hướng hiện đại.
                  </p>
                  <ImagePlaceholder
                    src="https://th.bing.com/th/id/OIP.jBCqkkTVfqq6up7vT9eV4QHaEo?w=293&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    alt="Hình ảnh đại hội Đảng VIII với mục tiêu công nghiệp hóa"
                    caption="Hình 3: Đại hội VIII và tầm nhìn đến 2020"
                  />
                  <p>
                    Chủ trương: "Phát triển nền kinh tế hàng hóa nhiều thành
                    phần...{" "}
                    <strong>
                      chủ động hội nhập kinh tế khu vực và thế giới
                    </strong>
                    ."
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <UsergroupAddOutlined /> Gia nhập ASEAN (1995), AFTA
                      (1996).
                    </li>
                    <li>
                      <GlobalOutlined /> Trở thành thành viên ASEM (1996), APEC
                      (1998).
                    </li>
                  </ul>
                  <ImagePlaceholder
                    src="https://quocphongthudo.vn/upload/2001606/fck/files/image_2e1c5.png"
                    alt="Hình ảnh lá cờ Việt Nam bên cạnh cờ các nước ASEAN/APEC"
                    caption="Hình 4: Việt Nam mở rộng quan hệ quốc tế"
                  />
                  <p className="font-medium">
                    Nguyên tắc: "Dựa vào nguồn lực trong nước là chính, đồng
                    thời tranh thủ tối đa nguồn lực bên ngoài."
                  </p>
                </div>

                <h4 className="font-bold text-md mb-2 mt-6">
                  <TrophyOutlined className="mr-1" /> 2.2. Đại hội IX (2001):
                  Nâng tầm chiến lược
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Khẳng định: "Mở rộng quan hệ đối ngoại,{" "}
                    <strong>chủ động hội nhập kinh tế quốc tế</strong> theo tinh
                    thần phát huy tối đa nội lực, bảo đảm độc lập, tự chủ và
                    định hướng xã hội chủ nghĩa."
                  </p>
                  <p>
                    Xác định mô hình:{" "}
                    <strong>
                      "Kinh tế thị trường định hướng xã hội chủ nghĩa"
                    </strong>{" "}
                    là mô hình kinh tế tổng quát.
                  </p>
                  <ImagePlaceholder
                    src="https://imgnvsk.vnanet.vn/MediaUpload/Medium/2023/08/22/2-quang-canh-dai-hoi-dang-lan-thu-ix-anh-the-thuan-ttxvn22-14-5-58.jpg"
                    alt="Hình ảnh minh họa mô hình kinh tế thị trường định hướng XHCN"
                    caption="Hình 5: Định hướng chiến lược tại Đại hội IX"
                  />
                  <p>
                    Triển khai Hiệp định Thương mại Việt Nam – Hoa Kỳ (2000) và
                    chuẩn bị đàm phán gia nhập WTO.
                  </p>
                  <ImagePlaceholder
                    src="https://moit.gov.vn/upload/2005517/fck/files/dam_phan_Viet_Nam_-_Hoa_Ky_b6f29.jpg"
                    alt="Hình ảnh về lễ ký kết Hiệp định Thương mại Việt Nam - Hoa Kỳ"
                    caption="Hình 6: Hợp tác thương mại Việt – Mỹ"
                  />
                </div>
              </Card>
            </motion.div>

            {/* 3. Giữ vững Độc lập, Tự chủ trong quá trình hội nhập quốc tế */}
            <motion.div variants={fadeInUp}>
              <Card
                title={
                  <span
                    className="flex items-center text-lg font-bold"
                    style={{ color: "#6b291c" }}
                  >
                    <ExclamationCircleOutlined className="mr-2 text-xl" /> 3.
                    Kết hợp Hội nhập và Tự chủ
                  </span>
                }
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl border-t-4 h-full"
                style={{ borderTopColor: "#6b291c" }}
              >
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <HomeOutlined
                      className="text-lg mr-2"
                      style={{ color: "#6b291c" }}
                    />
                    <strong>Chính trị – Đối ngoại:</strong> Kiên định đường lối
                    độc lập, tự chủ, đa phương hóa, đa dạng hóa. Không lệ thuộc
                    vào bất kỳ khối chính trị nào.
                  </li>
                  <ImagePlaceholder
                    src="https://media.vov.vn/sites/default/files/styles/large/public/2024-01/ngoai%20giao%20cay%20tre_0.jpg"
                    alt="Hình ảnh lá cờ Việt Nam bay trong bối cảnh quốc tế"
                    caption="Hình 7: Vững vàng chính trị đối ngoại"
                  />
                  <li>
                    <ShoppingOutlined
                      className="text-lg mr-2"
                      style={{ color: "#6b291c" }}
                    />
                    <strong>Kinh tế:</strong> Phát huy tối đa nội lực, xây dựng
                    nền kinh tế tự chủ, vận hành theo cơ chế thị trường có sự
                    quản lý của Nhà nước. Hội nhập từng bước vững chắc.
                  </li>
                  <ImagePlaceholder
                    src="https://images2.thanhnien.vn/528068263637045248/2025/5/30/a1-17486205640121882020376.jpg"
                    alt="Hình ảnh người nông dân, công nhân Việt Nam đang làm việc"
                    caption="Hình 8: Phát huy nội lực trong nước"
                  />
                  <li>
                    <Tooltip title="Nghị quyết Trung ương 5 khóa VIII (1998)">
                      <span className="text-gray-700">
                        <CalendarOutlined
                          className="text-lg mr-2"
                          style={{ color: "#6b291c" }}
                        />
                        <strong>Văn hóa – Xã hội:</strong> Giữ gìn và phát huy
                        bản sắc văn hóa dân tộc. Chủ động tiếp thu tinh hoa nhân
                        loại, chống lai căng (Nghị quyết 03-NQ/TW).
                      </span>
                    </Tooltip>
                  </li>
                  <ImagePlaceholder
                    src="https://ims.baohoabinh.com.vn/NewsImg/6_2020/142688_2363.jpg"
                    alt="Hình ảnh tà áo dài truyền thống hoặc lễ hội văn hóa Việt Nam"
                    caption="Hình 9: Nền tảng văn hóa dân tộc"
                  />
                </ul>
              </Card>
            </motion.div>

            {/* 4. Kết quả và ý nghĩa thực tiễn */}
            <motion.div variants={fadeInUp}>
              <Card
                title={
                  <span className="flex items-center text-lg font-bold text-green-700">
                    <MessageOutlined className="mr-2 text-xl" /> 4. Kết quả & Ý
                    nghĩa thực tiễn
                  </span>
                }
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl border-t-4 border-green-500 h-full"
              >
                <div className="space-y-4 text-gray-700">
                  <p className="font-medium">
                    Thành tựu: Thoát khỏi khủng hoảng kinh tế – xã hội, tăng
                    trưởng kinh tế liên tục, vị thế quốc tế nâng cao rõ rệt, môi
                    trường hòa bình ổn định.
                  </p>
                  <ImagePlaceholder
                    src="https://tttctt.1cdn.vn/thumbs/540x360/2025/10/16/cover-bai-.jpg"
                    alt="Hình ảnh các tòa nhà hiện đại, đô thị phát triển ở Việt Nam"
                    caption="Hình 10: Diện mạo Việt Nam đổi mới"
                  />
                  <p>
                    Bài học 1: Giữ vững độc lập, tự chủ là điều kiện tiên quyết
                    của hội nhập quốc tế.
                  </p>
                  <p>
                    Bài học 2: Phát huy nội lực, kết hợp với tranh thủ nguồn lực
                    bên ngoài là phương châm cơ bản.
                  </p>
                  <p>
                    Bài học 3: Kết hợp sức mạnh dân tộc với sức mạnh thời đại,
                    kiên định mục tiêu xã hội chủ nghĩa.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 5. Kết luận và bài học kinh nghiệm */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 lg:col-span-3"
            >
              <Card
                title={
                  <span className="flex items-center text-xl font-bold text-gray-800">
                    <CalendarOutlined className="mr-2 text-2xl" /> 5. Nhận Định
                    Về Giai Đoạn 1996–2005
                  </span>
                }
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl border-4 border-dashed border-gray-300 bg-gray-50"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  <span className="inline-block border-b-2 border-blue-400 pb-1">
                    Nhận định khách quan
                  </span>
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                  <li>
                    <strong>Giai đoạn bản lề:</strong> Chuyển từ hội nhập khu
                    vực sang toàn diện, đặt nền tảng cho việc gia nhập WTO
                    (2007).
                  </li>
                  <li>
                    <strong>Tính đúng đắn của Đường lối:</strong> Mô hình kinh
                    tế thị trường định hướng xã hội chủ nghĩa và chủ trương đa
                    phương hóa, đa dạng hóa là phù hợp với xu thế toàn cầu hóa.
                  </li>
                  <li>
                    <strong>Thành công:</strong> Giữ vững chủ quyền và ổn định,
                    đồng thời đạt tăng trưởng kinh tế cao và thu hút FDI.
                  </li>
                  <li>
                    <strong>Hạn chế:</strong> Bộc lộ các thách thức như khoảng
                    cách phát triển vùng miền và năng lực cạnh tranh nội địa còn
                    thấp.
                  </li>
                </ul>
                <ImagePlaceholder
                  src="https://cdn2.tuoitre.vn/thumb_w/1200/471584752817336320/2024/11/12/quoc-hoi-17314051281981102490421.jpg"
                  alt="Hình ảnh cân bằng giữa thành tựu và thách thức hội nhập"
                  caption="Hình 11: Hai mặt của quá trình hội nhập"
                />

                <h3 className="text-xl font-bold mt-6 mb-4 text-teal-600">
                  <span className="inline-block border-b-2 border-teal-400 pb-1">
                    Quan điểm cá nhân
                  </span>
                </h3>
                <div className="space-y-3 text-gray-800">
                  <p>
                    Theo góc nhìn cá nhân, giai đoạn 1996–2005 thể hiện rõ bản
                    lĩnh và tầm nhìn chiến lược của Đảng trong việc lựa chọn con
                    đường <strong>hội nhập có kiểm soát</strong>. Điểm nổi bật
                    là sự tự tin bước vào các "sân chơi" lớn (APEC, ASEM, Hiệp
                    định Việt–Mỹ), khác biệt hoàn toàn so với mô hình khép kín
                    trước đó.
                  </p>
                  <p className="italic">
                    Tuy nhiên, hạn chế nổi bật là sự phụ thuộc tương đối vào vốn
                    đầu tư nước ngoài và năng lực cạnh tranh yếu của doanh
                    nghiệp trong nước. Dẫu vậy, những quyết sách đúng đắn thời
                    kỳ này mang tính nền tảng, mở ra cánh cửa để Việt Nam tự tin
                    tiến vào kỷ nguyên hội nhập sâu rộng hơn.
                  </p>
                </div>
                <ImagePlaceholder
                  src="https://tapchicongsan.org.vn/documents/20182/308950850/9.10.+Bo+chinh+tri.jpg/cb06e93e-bd96-4555-8c1d-2179bd78f342?t=1696843820764"
                  alt="Hình ảnh thể hiện tầm nhìn và bản lĩnh của lãnh đạo Việt Nam"
                  caption="Hình 12: Con đường hội nhập có kiểm soát"
                />

                {/* <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Tư duy chiến lược trong giai đoạn hội nhập
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        // Hành động giả lập cho nút
                        console.log("Xem tài liệu chi tiết...");
                      }}
                      className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center cursor-pointer"
                    >
                      <DownloadOutlined className="mr-2" />
                      Tìm kiếm tài liệu liên quan
                    </motion.button>
                  </div>
                </div> */}
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div
          className="text-center py-8 border-t border-gray-200 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-600 italic">
            Hội nhập và Tự chủ - Nền tảng vững chắc cho sự phát triển của Việt
            Nam sau này.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HoiNhap;