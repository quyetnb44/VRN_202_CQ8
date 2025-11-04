import React, { useState } from "react";
import { Card, Button, Select, Divider } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import Quiz from "../components/Quiz";

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("hoiNhapContext");

  const quizzes = {
    hoiNhapContext: {
      title: "Bối cảnh và yêu cầu hội nhập sau Đổi mới",
      icon: "🌏",
      questions: [
        {
          question:
            "Sau 10 năm Đổi mới (1986–1996), Việt Nam đã thoát khỏi tình trạng gì?",
          options: [
            "Khủng hoảng chính trị",
            "Khủng hoảng kinh tế – xã hội kéo dài",
            "Chiến tranh biên giới",
            "Suy thoái văn hóa",
          ],
          correctAnswer: 1,
          explanation:
            "Đến năm 1996, Việt Nam cơ bản thoát khỏi khủng hoảng kinh tế – xã hội, tạo thế và lực mới cho phát triển.",
        },
        {
          question:
            "Đặc điểm nổi bật của kinh tế Việt Nam giai đoạn 1986–1996 là:",
          options: [
            "Phát triển công nghiệp nặng vượt trội",
            "Phụ thuộc hoàn toàn vào viện trợ nước ngoài",
            "Tăng trưởng liên tục và đời sống nhân dân được cải thiện",
            "Giảm phát trầm trọng",
          ],
          correctAnswer: 2,
          explanation:
            "Kinh tế tăng trưởng liên tục, đời sống nhân dân được cải thiện, chính trị – xã hội ổn định.",
        },
        {
          question:
            "Một thách thức lớn của Việt Nam khi bước vào giai đoạn 1996 là:",
          options: [
            "Thiếu nguồn lao động",
            "Khoảng cách tụt hậu so với khu vực còn lớn",
            "Thừa vốn đầu tư trong nước",
            "Cạnh tranh khoa học – công nghệ yếu",
          ],
          correctAnswer: 1,
          explanation:
            "Việt Nam vẫn là nước đang phát triển, cơ sở vật chất kỹ thuật yếu và tụt hậu so với khu vực.",
        },
        {
          question: "Xu thế chủ đạo của thế giới cuối thế kỷ XX là:",
          options: [
            "Chiến tranh lạnh trở lại",
            "Toàn cầu hóa và khu vực hóa kinh tế",
            "Chủ nghĩa bảo hộ kinh tế",
            "Tự cô lập các quốc gia",
          ],
          correctAnswer: 1,
          explanation:
            "Toàn cầu hóa và khu vực hóa là xu thế nổi bật của thời kỳ này.",
        },
        {
          question: "Theo Đại hội VIII, để phát triển đất nước cần kết hợp:",
          options: [
            "Dựa vào nguồn lực nước ngoài là chính",
            "Độc lập, tự chủ gắn với hợp tác quốc tế",
            "Hội nhập bằng mọi giá",
            "Đóng cửa để tự phát triển",
          ],
          correctAnswer: 1,
          explanation:
            "Đại hội VIII nhấn mạnh: Giữ vững độc lập, tự chủ đi đôi với mở rộng hợp tác quốc tế.",
        },
        {
          question: "Hội nhập quốc tế được xem là:",
          options: [
            "Nhu cầu chủ quan của Đảng",
            "Yêu cầu khách quan của quá trình phát triển",
            "Hệ quả tất yếu của chiến tranh",
            "Lựa chọn tạm thời",
          ],
          correctAnswer: 1,
          explanation:
            "Hội nhập là yêu cầu khách quan trong bối cảnh toàn cầu hóa mạnh mẽ.",
        },
        {
          question:
            "Một trong những động lực nội tại của Việt Nam sau 10 năm đổi mới là:",
          options: [
            "Ổn định chính trị – xã hội",
            "Khủng hoảng kinh tế",
            "Tăng nhập siêu",
            "Suy thoái văn hóa",
          ],
          correctAnswer: 0,
          explanation:
            "Ổn định chính trị – xã hội giúp Việt Nam tự tin bước vào hội nhập.",
        },
        {
          question:
            "Tổ chức nào Việt Nam gia nhập đầu tiên trong tiến trình hội nhập?",
          options: ["APEC", "ASEAN", "WTO", "EU"],
          correctAnswer: 1,
          explanation:
            "Việt Nam gia nhập ASEAN năm 1995, mở đầu giai đoạn hội nhập khu vực.",
        },
        {
          question: "Hội nhập quốc tế của Việt Nam nhằm mục tiêu cơ bản là:",
          options: [
            "Tăng cường sức mạnh quân sự",
            "Phát triển kinh tế, nâng cao đời sống nhân dân",
            "Giành lại thị trường nội địa",
            "Cạnh tranh với các nước lớn",
          ],
          correctAnswer: 1,
          explanation:
            "Hội nhập nhằm thúc đẩy kinh tế, nâng cao đời sống và vị thế quốc gia.",
        },
        {
          question: "Tư tưởng 'dựa vào nội lực là chính' thể hiện:",
          options: [
            "Tư duy phụ thuộc",
            "Tinh thần độc lập, tự chủ trong hội nhập",
            "Hạn chế mở cửa",
            "Chính sách cô lập",
          ],
          correctAnswer: 1,
          explanation:
            "Đây là nguyên tắc cốt lõi giúp Việt Nam hội nhập mà vẫn giữ bản lĩnh độc lập.",
        },
      ],
    },
    hoiNhapPolicy: {
      title: "Đường lối và chính sách hội nhập 1996–2005",
      icon: "🏛️",
      questions: [
        {
          question:
            "Đại hội VIII (1996) đánh dấu Việt Nam bước vào giai đoạn nào?",
          options: [
            "Ổn định chính trị sau chiến tranh",
            "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước",
            "Tập trung xây dựng nông nghiệp",
            "Phát triển kinh tế tự cung tự cấp",
          ],
          correctAnswer: 1,
          explanation:
            "Đại hội VIII mở ra thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa.",
        },
        {
          question: "Đại hội VIII xác định mục tiêu đến năm 2020:",
          options: [
            "Trở thành nước phát triển",
            "Cơ bản trở thành nước công nghiệp theo hướng hiện đại",
            "Tham gia WTO",
            "Xóa bỏ kinh tế thị trường",
          ],
          correctAnswer: 1,
          explanation:
            "Mục tiêu chiến lược là công nghiệp hóa – hiện đại hóa đến 2020.",
        },
        {
          question: "Việt Nam gia nhập APEC vào năm nào?",
          options: ["1996", "1998", "2001", "2005"],
          correctAnswer: 1,
          explanation:
            "Việt Nam chính thức trở thành thành viên APEC năm 1998.",
        },
        {
          question: "Chính sách kinh tế của Đại hội VIII nhấn mạnh:",
          options: [
            "Kinh tế kế hoạch hóa tập trung",
            "Kinh tế hàng hóa nhiều thành phần theo cơ chế thị trường có quản lý",
            "Tự cung tự cấp",
            "Tư hữu hóa toàn bộ nền kinh tế",
          ],
          correctAnswer: 1,
          explanation:
            "Đây là mô hình phù hợp để hội nhập mà vẫn giữ định hướng XHCN.",
        },
        {
          question:
            "Bài học thứ năm trong 10 năm đổi mới mà Đại hội VIII nêu ra là:",
          options: [
            "Đẩy mạnh cải cách hành chính",
            "Mở rộng hợp tác quốc tế, kết hợp sức mạnh dân tộc với sức mạnh thời đại",
            "Chú trọng giáo dục phổ thông",
            "Phát triển nông nghiệp toàn diện",
          ],
          correctAnswer: 1,
          explanation: "Bài học này là nền tảng của tư duy hội nhập chủ động.",
        },
        {
          question: "Hiệp định Thương mại Việt Nam – Hoa Kỳ được ký vào năm:",
          options: ["1998", "1999", "2000", "2002"],
          correctAnswer: 2,
          explanation:
            "Hiệp định được ký năm 2000, mở ra cơ hội lớn cho thương mại song phương.",
        },
        {
          question:
            "Chiến lược phát triển kinh tế – xã hội 2001–2010 do Đại hội IX thông qua nhằm:",
          options: [
            "Tập trung vào nông nghiệp",
            "Đưa Việt Nam ra khỏi tình trạng kém phát triển và tạo nền tảng công nghiệp hóa",
            "Giảm tốc độ tăng trưởng để ổn định",
            "Tập trung vào thương mại dịch vụ",
          ],
          correctAnswer: 1,
          explanation:
            "Chiến lược này đặt mục tiêu cơ bản công nghiệp hóa đất nước.",
        },
        {
          question: "Đại hội IX khẳng định mô hình kinh tế tổng quát là:",
          options: [
            "Kinh tế tư bản tự do",
            "Kinh tế kế hoạch hóa tập trung",
            "Kinh tế thị trường định hướng xã hội chủ nghĩa",
            "Kinh tế hỗn hợp kiểu phương Tây",
          ],
          correctAnswer: 2,
          explanation:
            "Đây là bước phát triển mới trong tư duy lý luận của Đảng.",
        },
        {
          question:
            "Một trong những hoạt động đối ngoại nổi bật giai đoạn 2001–2005 là:",
          options: [
            "Gia nhập WTO",
            "Chuẩn bị đàm phán gia nhập WTO",
            "Tham gia Liên minh châu Âu",
            "Rút khỏi AFTA",
          ],
          correctAnswer: 1,
          explanation:
            "Giai đoạn này Việt Nam tích cực chuẩn bị đàm phán WTO (gia nhập năm 2007).",
        },
        {
          question: "Chủ trương hội nhập của Đại hội IX nhấn mạnh điều gì?",
          options: [
            "Hội nhập toàn diện không điều kiện",
            "Phát huy nội lực, bảo đảm độc lập, tự chủ và định hướng XHCN",
            "Mở cửa hoàn toàn nền kinh tế",
            "Phụ thuộc vào vốn FDI",
          ],
          correctAnswer: 1,
          explanation:
            "Đại hội IX nhấn mạnh hội nhập chủ động nhưng có kiểm soát, giữ vững định hướng XHCN.",
        },
      ],
    },
    hoiNhapTuChu: {
      title: "Hội nhập mà vẫn giữ độc lập, tự chủ",
      icon: "🕊️",
      questions: [
        {
          question:
            "Đường lối đối ngoại của Việt Nam trong thời kỳ hội nhập là:",
          options: [
            "Phụ thuộc vào các nước lớn",
            "Độc lập, tự chủ, hòa bình, hợp tác và phát triển",
            "Chính sách đóng cửa",
            "Theo mô hình của Mỹ",
          ],
          correctAnswer: 1,
          explanation:
            "Đây là phương châm xuyên suốt, bảo đảm chủ quyền và lợi ích quốc gia.",
        },
        {
          question:
            "Phát huy nội lực đồng thời tranh thủ nguồn lực bên ngoài thể hiện:",
          options: [
            "Tư tưởng tự cung tự cấp",
            "Quan điểm độc lập tự chủ kết hợp hội nhập",
            "Chiến lược hướng nội thuần túy",
            "Chính sách bảo hộ",
          ],
          correctAnswer: 1,
          explanation: "Đây là cách kết hợp linh hoạt giữa tự chủ và hội nhập.",
        },
        {
          question: "Đại hội IX khẳng định Việt Nam là:",
          options: [
            "Đối tác phụ thuộc của các nước phát triển",
            "Bạn và đối tác tin cậy của các nước trong cộng đồng quốc tế",
            "Thành viên trung lập của Liên Hợp Quốc",
            "Quốc gia tự cô lập",
          ],
          correctAnswer: 1,
          explanation:
            "Thể hiện vị thế chủ động, bình đẳng trong quan hệ quốc tế.",
        },
        {
          question: "Độc lập tự chủ về kinh tế là nền tảng của:",
          options: [
            "Tự do văn hóa",
            "Độc lập về chính trị",
            "Mở rộng thị trường",
            "Hội nhập toàn cầu",
          ],
          correctAnswer: 1,
          explanation: "Kinh tế vững mạnh là cơ sở đảm bảo độc lập chính trị.",
        },
        {
          question: "Nguyên tắc phát triển kinh tế của Đảng là:",
          options: [
            "Nhà nước nắm toàn bộ sản xuất",
            "Kết hợp nhiều thành phần kinh tế theo cơ chế thị trường có quản lý",
            "Phát triển kinh tế tư bản chủ nghĩa",
            "Đóng cửa để bảo vệ sản xuất trong nước",
          ],
          correctAnswer: 1,
          explanation:
            "Mô hình này vừa phù hợp với thực tiễn vừa đảm bảo tính định hướng XHCN.",
        },
        {
          question: "Về văn hóa, Đảng xác định:",
          options: [
            "Văn hóa là sản phẩm phụ của kinh tế",
            "Văn hóa là nền tảng tinh thần, vừa là mục tiêu, vừa là động lực của phát triển",
            "Chỉ cần hội nhập kinh tế, không cần hội nhập văn hóa",
            "Tiếp thu toàn bộ văn hóa phương Tây",
          ],
          correctAnswer: 1,
          explanation:
            "Đây là quan điểm xuyên suốt được khẳng định tại Hội nghị TW5 khóa VIII.",
        },
        {
          question: "Nghị quyết TW5 khóa VIII (1998) tập trung vào vấn đề gì?",
          options: [
            "Phát triển nông nghiệp",
            "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
            "Phát triển công nghiệp nặng",
            "Cải cách hành chính",
          ],
          correctAnswer: 1,
          explanation:
            "Nghị quyết nhấn mạnh việc giữ gìn bản sắc dân tộc trong hội nhập.",
        },
        {
          question: "Giữ độc lập tự chủ trong hội nhập giúp Việt Nam:",
          options: [
            "Không phụ thuộc, giữ vững chủ quyền và lợi ích quốc gia",
            "Cạnh tranh với các nước láng giềng",
            "Tự cô lập để bảo vệ văn hóa",
            "Tăng nhập siêu",
          ],
          correctAnswer: 0,
          explanation:
            "Đây là mục tiêu xuyên suốt của đường lối đối ngoại độc lập, tự chủ.",
        },
        {
          question: "Hội nhập về văn hóa được hiểu là:",
          options: [
            "Tiếp thu tinh hoa nhân loại, đồng thời bảo vệ giá trị truyền thống dân tộc",
            "Sao chép hoàn toàn văn hóa nước ngoài",
            "Loại bỏ yếu tố truyền thống",
            "Đóng cửa văn hóa",
          ],
          correctAnswer: 0,
          explanation:
            "Đảng chủ trương hội nhập văn hóa có chọn lọc, chống lai căng, thực dụng.",
        },
        {
          question:
            "Kết quả của việc giữ vững độc lập, tự chủ trong hội nhập là:",
          options: [
            "Tăng trưởng kinh tế gắn với ổn định chính trị – xã hội",
            "Gia tăng phụ thuộc vào viện trợ",
            "Đóng cửa nền kinh tế",
            "Giảm vai trò của Nhà nước",
          ],
          correctAnswer: 0,
          explanation:
            "Đây là minh chứng cho sự thành công của đường lối hội nhập đúng đắn.",
        },
      ],
    },
    hoiNhapLessons: {
      title: "Thành tựu và bài học của hội nhập 1996–2005",
      icon: "📈",
      questions: [
        {
          question:
            "Tăng trưởng kinh tế Việt Nam giai đoạn 1996–2005 có đặc điểm:",
          options: [
            "Liên tục và ổn định",
            "Suy giảm nghiêm trọng",
            "Phụ thuộc vào viện trợ nước ngoài",
            "Chỉ tăng trong lĩnh vực nông nghiệp",
          ],
          correctAnswer: 0,
          explanation:
            "Kinh tế tăng trưởng liên tục, đời sống nhân dân cải thiện rõ rệt.",
        },
        {
          question:
            "Cơ cấu kinh tế giai đoạn 1996–2005 chuyển dịch theo hướng:",
          options: [
            "Nông nghiệp – công nghiệp – dịch vụ",
            "Công nghiệp – dịch vụ – nông nghiệp",
            "Dịch vụ – công nghiệp – nông nghiệp",
            "Không thay đổi đáng kể",
          ],
          correctAnswer: 1,
          explanation:
            "Công nghiệp hóa – hiện đại hóa làm tăng tỷ trọng công nghiệp và dịch vụ.",
        },
        {
          question: "Một kết quả nổi bật của hội nhập là:",
          options: [
            "Mất ổn định chính trị",
            "Vị thế quốc tế của Việt Nam được nâng cao",
            "Gia tăng xung đột khu vực",
            "Giảm hợp tác quốc tế",
          ],
          correctAnswer: 1,
          explanation:
            "Việt Nam trở thành đối tác tin cậy, có vị thế trong khu vực và thế giới.",
        },
        {
          question: "Một trong ba bài học lớn rút ra là:",
          options: [
            "Hội nhập càng sâu càng mất độc lập",
            "Phải giữ vững độc lập, tự chủ trong mọi tình huống",
            "Cần phụ thuộc vào nước lớn",
            "Chú trọng quân sự hơn kinh tế",
          ],
          correctAnswer: 1,
          explanation: "Độc lập tự chủ là điều kiện tiên quyết của hội nhập.",
        },
        {
          question: "Phát huy nội lực kết hợp nguồn lực bên ngoài là:",
          options: [
            "Phương châm cơ bản của hội nhập",
            "Chính sách tạm thời",
            "Sai lầm chiến lược",
            "Hạn chế mở cửa",
          ],
          correctAnswer: 0,
          explanation:
            "Đây là phương châm giúp Việt Nam phát triển bền vững trong hội nhập.",
        },
        {
          question: "Thành tựu hội nhập chứng minh đường lối của Đảng là:",
          options: [
            "Thận trọng quá mức",
            "Đúng đắn và sáng tạo",
            "Lệ thuộc vào mô hình nước ngoài",
            "Thiếu thực tế",
          ],
          correctAnswer: 1,
          explanation:
            "Thành tựu kinh tế – chính trị – đối ngoại khẳng định tính đúng đắn của đường lối.",
        },
        {
          question: "Một trong những thách thức đặt ra sau hội nhập là:",
          options: [
            "Cạnh tranh quốc tế gay gắt",
            "Suy giảm dân số",
            "Thiếu tài nguyên thiên nhiên",
            "Thiếu đất nông nghiệp",
          ],
          correctAnswer: 0,
          explanation:
            "Hội nhập đi kèm cạnh tranh gay gắt trên thị trường toàn cầu.",
        },
        {
          question: "Việc gia nhập các tổ chức quốc tế giúp Việt Nam:",
          options: [
            "Tăng cường hợp tác và mở rộng thị trường",
            "Giảm đầu tư nước ngoài",
            "Mất quyền tự chủ kinh tế",
            "Bị cô lập về chính trị",
          ],
          correctAnswer: 0,
          explanation:
            "Hội nhập giúp mở rộng hợp tác kinh tế, thương mại, đầu tư.",
        },
        {
          question: "Bài học quan trọng trong xây dựng văn hóa hội nhập là:",
          options: [
            "Hòa nhập nhưng không hòa tan",
            "Tiếp thu toàn bộ văn hóa nước ngoài",
            "Bỏ qua bản sắc dân tộc",
            "Không cần bảo tồn văn hóa truyền thống",
          ],
          correctAnswer: 0,
          explanation:
            "Hòa nhập nhưng không hòa tan là nguyên tắc cốt lõi của văn hóa hội nhập.",
        },
        {
          question: "Tổng kết lại, giai đoạn 1996–2005 chứng minh Việt Nam đã:",
          options: [
            "Thất bại trong hội nhập",
            "Hội nhập thành công, khẳng định vị thế quốc gia",
            "Chưa đạt được tiến bộ đáng kể",
            "Phụ thuộc hoàn toàn vào viện trợ",
          ],
          correctAnswer: 1,
          explanation:
            "Đây là giai đoạn nền tảng, chuẩn bị cho hội nhập sâu rộng sau này (gia nhập WTO 2007).",
        },
      ],
    },
  };

  const currentQuiz = quizzes[selectedQuiz];

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
              <h3 className="text-xl font-semibold text-primary">
                Chọn chủ đề kiểm tra
              </h3>
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
                    <h2 className="text-2xl font-bold text-primary">
                      {currentQuiz.title}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Kiểm tra hiểu biết của bạn về chủ đề này
                    </p>
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
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 bg-gray-50 hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedQuiz(key)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{quiz.icon}</div>
                    <h5 className="font-semibold text-sm text-gray-700 mb-1">
                      {quiz.title.split(" ")[0]} {quiz.title.split(" ")[1]}
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
                <strong>Tổng cộng:</strong>{" "}
                {Object.values(quizzes).reduce(
                  (total, quiz) => total + quiz.questions.length,
                  0
                )}{" "}
                câu hỏi trong {Object.keys(quizzes).length} chủ đề về lịch sử
                Việt Nam
              </p>
              <p className="mt-2">
                Hãy thử sức với tất cả các chủ đề để kiểm tra kiến thức của bạn!
                🎯
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuizPage;
