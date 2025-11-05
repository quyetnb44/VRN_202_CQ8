import React, { useState, useEffect } from 'react';

const PolicySimulator = () => {
  const [stats, setStats] = useState({
    economy: 50,    // Tăng trưởng Kinh tế (min 0, max 100)
    autonomy: 70,   // Độc lập Tự chủ (min 0, max 100)
    risk: 30        // Rủi ro Phụ thuộc (min 0, max 100)
  });

  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [decisionHistory, setDecisionHistory] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [finalAnalysis, setFinalAnalysis] = useState('');
  const [finalScore, setFinalScore] = useState('');
  const [finalStats, setFinalStats] = useState({ economy: 0, autonomy: 0, risk: 0 });

  const SCENARIOS = [
    {
      year: 1996,
      short_title: "Thực hiện cam kết AFTA",
      question: "Đại hội VIII đã thông qua đường lối chủ động hội nhập. Bạn sẽ chọn hướng đi nào cho việc thực hiện các cam kết khu vực (như AFTA) ngay từ bây giờ?",
      choices: [
        {
          text: "Tăng tốc thực hiện ngay các cam kết AFTA và mở cửa thị trường nhanh chóng. (Hướng Hội nhập)",
          effects: { economy: 15, autonomy: -5, risk: 10 },
          feedback: "Quyết định A: Tăng tốc hội nhập giúp Việt Nam nhanh chóng tiếp cận thị trường và vốn FDI, thúc đẩy kinh tế tăng trưởng mạnh. Tuy nhiên, nó tạo sức ép lớn lên doanh nghiệp nội địa non trẻ và tăng nguy cơ phụ thuộc vào vốn đầu tư bên ngoài. (Hội nhập > Tự chủ)"
        },
        {
          text: "Ưu tiên củng cố nội lực, chỉ hội nhập từ từ theo lộ trình đã cam kết. (Hướng Tự chủ)",
          effects: { economy: 5, autonomy: 10, risk: -5 },
          feedback: "Quyết định B: Hội nhập thận trọng giúp bảo vệ doanh nghiệp trong nước khỏi sức ép cạnh tranh quá lớn và giữ vững khả năng kiểm soát nền kinh tế. Tuy nhiên, tốc độ tăng trưởng kinh tế có thể bị chậm lại so với tiềm năng. (Tự chủ > Hội nhập)"
        }
      ]
    },
    {
      year: 1998,
      short_title: "Khủng hoảng Tài chính Châu Á",
      question: "Khu vực đang xảy ra Khủng hoảng tài chính châu Á (1997–1998). Vốn đầu tư nước ngoài (FDI) rút ra ồ ạt. Bạn sẽ hành động gì để bảo vệ kinh tế trong nước?",
      choices: [
        {
          text: "Tiếp tục chính sách mở cửa, ban hành các ưu đãi mới để thu hút FDI, chấp nhận rủi ro dòng vốn biến động. (Hướng Hội nhập)",
          effects: { economy: 10, autonomy: -10, risk: 15 },
          feedback: "Quyết định A: Việc này thể hiện sự nhất quán, giúp Việt Nam tiếp tục thu hút nguồn vốn cần thiết khi khủng hoảng lắng xuống. Tuy nhiên, việc ưu đãi quá mức làm tăng rủi ro phụ thuộc và tiềm ẩn nguy cơ bất ổn khi dòng vốn thay đổi. (Hội nhập > Tự chủ)"
        },
        {
          text: "Siết chặt kiểm soát vốn, ưu tiên phát triển nội lực và huy động nguồn vốn trong nước để chống đỡ khủng hoảng. (Hướng Tự chủ)",
          effects: { economy: -5, autonomy: 15, risk: -10 },
          feedback: "Quyết định B: Kiểm soát vốn giúp giảm thiểu tác động của khủng hoảng tài chính toàn cầu và giữ vững quyền kiểm soát kinh tế vĩ mô. Tuy nhiên, nó khiến Việt Nam mất đi một số cơ hội thu hút vốn và làm chậm tăng trưởng. (Tự chủ > Hội nhập)"
        }
      ]
    },
    {
      year: 2000,
      short_title: "Hiệp định Thương mại Việt - Mỹ (BTA)",
      question: "Hoa Kỳ đề nghị ký Hiệp định Thương mại Song phương Việt - Mỹ (BTA). Đây là một cơ hội lớn, nhưng có thể mở đường cho sự can thiệp kinh tế sâu hơn. Bạn sẽ:",
      choices: [
        {
          text: "Ký ngay BTA để mở cửa thị trường Mỹ, chấp nhận rủi ro và điều chỉnh luật pháp theo chuẩn quốc tế. (Hướng Hội nhập)",
          effects: { economy: 20, autonomy: -10, risk: 15 },
          feedback: "Quyết định A: Ký BTA là bước ngoặt lịch sử, giúp xuất khẩu bùng nổ (tăng trưởng kinh tế cực cao) và thu hút làn sóng vốn FDI mới. Tuy nhiên, việc thay đổi luật pháp và mở cửa thị trường Mỹ sẽ khiến nền kinh tế dễ bị ảnh hưởng bởi biến động bên ngoài. (Hội nhập rất nhanh)"
        },
        {
          text: "Trì hoãn, đàm phán thêm các điều khoản bảo vệ doanh nghiệp nội địa, ưu tiên tự chủ. (Hướng Tự chủ)",
          effects: { economy: 10, autonomy: 5, risk: -5 },
          feedback: "Quyết định B: Trì hoãn giúp có thêm thời gian chuẩn bị và đàm phán được các điều kiện thuận lợi hơn, giảm thiểu rủi ro chính trị. Tuy nhiên, Việt Nam bỏ lỡ cơ hội vàng để bứt phá về tăng trưởng kinh tế trong ngắn hạn. (Tự chủ rất vững)"
        }
      ]
    },
    {
      year: 2001,
      short_title: "Mô hình Kinh tế Thị trường XHCN",
      question: "Đại hội IX xác định mô hình 'Kinh tế thị trường định hướng xã hội chủ nghĩa'. Trong thực tế, bạn sẽ ưu tiên khía cạnh nào để vừa phát triển kinh tế, vừa giữ định hướng XHCN?",
      choices: [
        {
          text: "Ưu tiên phát triển nhanh các thành phần kinh tế tư nhân và FDI, giảm vai trò của DNNN. (Hướng Hội nhập)",
          effects: { economy: 10, autonomy: -5, risk: 10 },
          feedback: "Quyết định A: Tập trung vào thị trường và FDI giúp tăng trưởng nhanh hơn và hiệu quả hơn. Tuy nhiên, nó làm suy yếu vai trò chủ đạo của kinh tế nhà nước, có thể dẫn đến chệch hướng XHCN và tăng bất bình đẳng xã hội. (Hội nhập > Định hướng)"
        },
        {
          text: "Duy trì vai trò chủ đạo của DNNN, tăng cường quản lý nhà nước để bảo đảm định hướng XHCN và công bằng xã hội. (Hướng Tự chủ)",
          effects: { economy: 5, autonomy: 15, risk: -5 },
          feedback: "Quyết định B: Duy trì quyền kiểm soát của Nhà nước và vai trò chủ đạo của DNNN giúp bảo đảm an sinh xã hội và định hướng chính trị. Tuy nhiên, nó có thể làm chậm tốc độ cải cách, khiến nền kinh tế kém linh hoạt và kém hấp dẫn FDI. (Định hướng > Thị trường)"
        }
      ]
    },
    {
      year: 2003,
      short_title: "Bảo vệ Bản sắc Văn hóa",
      question: "Nghị quyết Trung ương về văn hóa yêu cầu 'chủ động tiếp thu tinh hoa nhân loại, đồng thời bảo vệ giá trị truyền thống'. Bạn sẽ ưu tiên nguồn lực cho lĩnh vực nào trong bối cảnh toàn cầu hóa?",
      choices: [
        {
          text: "Đẩy mạnh hợp tác quốc tế trong giáo dục, khoa học công nghệ, chấp nhận rủi ro 'Tây hóa' văn hóa. (Hướng Hội nhập)",
          effects: { economy: 10, autonomy: -5, risk: 10 },
          feedback: "Quyết định A: Việc này giúp nhanh chóng nâng cao chất lượng nguồn nhân lực và năng lực công nghệ. Tuy nhiên, việc mở cửa quá nhanh về văn hóa có thể dẫn đến sự xói mòn bản sắc và suy thoái đạo đức xã hội. (Hội nhập Văn hóa > Tự chủ)"
        },
        {
          text: "Tăng cường đầu tư vào giáo dục truyền thống, văn hóa dân tộc, kiểm soát chặt chẽ nội dung văn hóa nước ngoài. (Hướng Tự chủ)",
          effects: { economy: 0, autonomy: 10, risk: -5 },
          feedback: "Quyết định B: Giữ vững nền tảng văn hóa dân tộc là yếu tố cốt lõi của độc lập, tự chủ. Tuy nhiên, việc kiểm soát quá chặt có thể gây cản trở tiếp thu tri thức mới và làm chậm quá trình phát triển xã hội. (Tự chủ Văn hóa > Hội nhập)"
        }
      ]
    },
    {
      year: 2005,
      short_title: "Đàm phán WTO về Dịch vụ",
      question: "Bạn đang chuẩn bị đàm phán vòng cuối gia nhập WTO. Một số nước yêu cầu Việt Nam mở cửa hoàn toàn thị trường dịch vụ (ngân hàng, viễn thông) ngay lập tức. Bạn sẽ phản ứng thế nào?",
      choices: [
        {
          text: "Chấp nhận mở cửa nhanh, đổi lại là việc gia nhập WTO sớm, nâng cao vị thế quốc tế. (Hướng Hội nhập)",
          effects: { economy: 15, autonomy: -15, risk: 20 },
          feedback: "Quyết định A: Gia nhập WTO sớm sẽ là đỉnh cao của hội nhập, thu hút FDI và thương mại cực mạnh. Nhưng mở cửa dịch vụ quá nhanh có thể gây đổ vỡ hệ thống tài chính/viễn thông trong nước và khiến Việt Nam hoàn toàn phụ thuộc vào các tập đoàn lớn nước ngoài. (Rủi ro Phụ thuộc cực lớn)"
        },
        {
          text: "Kiên quyết đòi lộ trình mở cửa dần dần 5-7 năm, chấp nhận gia nhập WTO muộn hơn. (Hướng Tự chủ)",
          effects: { economy: 10, autonomy: 10, risk: -10 },
          feedback: "Quyết định B: Bảo vệ các ngành nhạy cảm trong nước bằng lộ trình dài hơi giúp doanh nghiệp có thời gian chuẩn bị. Quyết định này giữ vững sự tự chủ về kinh tế vĩ mô, dù có thể làm chậm quá trình gia nhập một chút. (Hội nhập Vững chắc)"
        }
      ]
    }
  ];

  useEffect(() => {
    // Khởi động game khi component mount
    startGame();
  }, []);

  const updateStatsDisplay = () => {
    // Đảm bảo chỉ số không vượt quá 0-100
    setStats(prevStats => ({
      economy: Math.max(0, Math.min(100, prevStats.economy)),
      autonomy: Math.max(0, Math.min(100, prevStats.autonomy)),
      risk: Math.max(0, Math.min(100, prevStats.risk))
    }));
  };

  useEffect(() => {
    updateStatsDisplay();
  }, [stats.economy, stats.autonomy, stats.risk]);

  const startGame = () => {
    setCurrentScenarioIndex(0);
    setDecisionHistory([]);
    setStats({
      economy: 50,
      autonomy: 70,
      risk: 30
    });
    setShowFeedback(false);
    setShowResult(false);
    setCurrentFeedback('');
  };

  const makeChoice = (choiceIndex) => {
    const currentScenario = SCENARIOS[currentScenarioIndex];
    const choice = currentScenario.choices[choiceIndex];

    // 1. Lưu quyết định vào lịch sử
    const newDecision = {
      year: currentScenario.year,
      title: currentScenario.short_title,
      choice: String.fromCharCode(65 + choiceIndex),
      text: choice.text,
      isIntegration: choice.text.includes("Hướng Hội nhập")
    };

    setDecisionHistory(prev => [...prev, newDecision]);

    // 2. Áp dụng Hiệu ứng
    setStats(prevStats => ({
      economy: prevStats.economy + choice.effects.economy,
      autonomy: prevStats.autonomy + choice.effects.autonomy,
      risk: prevStats.risk + choice.effects.risk
    }));

    // 3. Hiển thị feedback
    setCurrentFeedback(choice.feedback);
    setShowFeedback(true);
  };

  const nextScenario = () => {
    setShowFeedback(false);
    const nextIndex = currentScenarioIndex + 1;

    if (nextIndex < SCENARIOS.length) {
      setCurrentScenarioIndex(nextIndex);
    } else {
      showFinalResult();
    }
  };

  const showFinalResult = () => {
    // Tính toán Điểm Tổng hợp (40% KT, 40% TC, 20% (100-RR))
    let score = (stats.economy * 0.4) + (stats.autonomy * 0.4) + ((100 - stats.risk) * 0.2);
    score = Math.max(0, Math.min(100, score));

    let rank = "";
    let analysis = "";

    // Phân tích Đường lối chung
    const integrationCount = decisionHistory.filter(d => d.isIntegration).length;
    const autonomyCount = decisionHistory.length - integrationCount;
    let policyStyle = "";

    if (integrationCount > autonomyCount + 1) {
      policyStyle = "Đường lối Hội nhập Nhanh chóng (Ưu tiên tăng trưởng bằng mọi giá).";
      analysis = "Bạn đã đưa ra nhiều quyết định nghiêng về phía Hội nhập Nhanh. Điều này giúp thúc đẩy tăng trưởng kinh tế ở mức RẤT CAO, nhưng nguy cơ Phụ thuộc Kinh tế và thách thức về giữ vững Độc lập Tự chủ đã tăng lên đáng kể. Cần thận trọng trong giai đoạn phát triển tiếp theo.";
    } else if (autonomyCount > integrationCount + 1) {
      policyStyle = "Đường lối Tự chủ Vững chắc (Ưu tiên an toàn và nội lực).";
      analysis = "Bạn đã đưa ra nhiều quyết định nghiêng về phía Tự chủ Vững chắc, giúp giữ vững sự ổn định và kiểm soát nền kinh tế. Độc lập Tự chủ được nâng cao, nhưng tốc độ tăng trưởng kinh tế có thể bị chậm lại so với tiềm năng. Có thể bạn đã bỏ lỡ một số cơ hội vàng từ bên ngoài.";
    } else {
      policyStyle = "Đường lối Cân bằng Hài hòa (Kết hợp Hội nhập và Tự chủ).";
      analysis = "Bạn đã thực hiện một đường lối cân bằng, kết hợp linh hoạt giữa việc mở cửa hội nhập và giữ vững độc lập, tự chủ. Đây là mô hình Lý tưởng của giai đoạn này, giúp đất nước phát triển ổn định với rủi ro được kiểm soát tốt nhất.";
    }

    if (score >= 90) {
      rank = `Xuất Sắc (Đạt ${score.toFixed(1)}/100) - Lãnh đạo Tầm nhìn`;
    } else if (score >= 75) {
      rank = `Giỏi (Đạt ${score.toFixed(1)}/100) - Hoạch định Cân bằng`;
    } else if (score >= 50) {
      rank = `Khá (Đạt ${score.toFixed(1)}/100) - Hội nhập Thận trọng`;
    } else {
      rank = `Cần cải thiện (Đạt ${score.toFixed(1)}/100) - Rủi ro Cao`;
    }

    setFinalStats({
      economy: stats.economy,
      autonomy: stats.autonomy,
      risk: stats.risk
    });

    setFinalScore(`Đánh giá chung: ${rank}`);
    setFinalAnalysis(`Đường lối của bạn: ${policyStyle}\n\n${analysis}`);
    setShowResult(true);
  };

  const getBarColor = (value, isRisk = false) => {
    if (isRisk) {
      // Risk (Phụ thuộc) tốt khi thấp
      return value <= 30 ? 'bg-green-400' : 'bg-red-500';
    }
    // Economy/Autonomy tốt khi cao
    return value >= 70 ? 'bg-green-400' : value >= 30 ? 'bg-yellow-400' : 'bg-red-500';
  };

  const currentScenario = currentScenarioIndex < SCENARIOS.length ? SCENARIOS[currentScenarioIndex] : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7fafc' }}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          {/* Header và Chỉ số */}
          <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8 text-white shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-1">
              Hoạch Định Chiến Lược: 1996–2005
            </h1>
            <p className="text-center text-indigo-200 mb-6 italic">
              Cân bằng Hội nhập và Tự chủ để phát triển bền vững
            </p>

            <div className="grid grid-cols-3 gap-4 text-sm md:text-base font-semibold">
              {/* Chỉ số Tăng trưởng Kinh tế */}
              <div className="bg-indigo-800 p-2 rounded-lg">
                <p className="text-indigo-200 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  Kinh tế (Mục tiêu: Tăng trưởng)
                </p>
                <div className="h-2 bg-gray-600 rounded-full mt-1">
                  <div 
                    className={`stat-bar ${getBarColor(stats.economy)} transition-all duration-500`}
                    style={{ width: `${Math.max(0, Math.min(100, stats.economy))}%`, height: '100%', borderRadius: '9999px' }}
                  ></div>
                </div>
                <span className="text-xs block text-right mt-1">{Math.max(0, Math.min(100, stats.economy)).toFixed(0)}</span>
              </div>

              {/* Chỉ số Độc lập Tự chủ */}
              <div className="bg-indigo-800 p-2 rounded-lg">
                <p className="text-indigo-200 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.152A.75.75 0 0112 2c.414 0 .762.3.785.648L13.1 4H19.7c.7 0 1.3.6 1.3 1.3v13.4c0 .7-.6 1.3-1.3 1.3H4.3c-.7 0-1.3-.6-1.3-1.3V5.3c0-.7.6-1.3 1.3-1.3h6.6L11.049 2.152z"></path>
                  </svg>
                  Tự chủ (Mục tiêu: Nâng cao)
                </p>
                <div className="h-2 bg-gray-600 rounded-full mt-1">
                  <div 
                    className={`stat-bar ${getBarColor(stats.autonomy)} transition-all duration-500`}
                    style={{ width: `${Math.max(0, Math.min(100, stats.autonomy))}%`, height: '100%', borderRadius: '9999px' }}
                  ></div>
                </div>
                <span className="text-xs block text-right mt-1">{Math.max(0, Math.min(100, stats.autonomy)).toFixed(0)}</span>
              </div>

              {/* Chỉ số Rủi ro Phụ thuộc */}
              <div className="bg-indigo-800 p-2 rounded-lg">
                <p className="text-indigo-200 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.398 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Phụ thuộc (Mục tiêu: Kiểm soát)
                </p>
                <div className="h-2 bg-gray-600 rounded-full mt-1">
                  <div 
                    className={`stat-bar ${getBarColor(stats.risk, true)} transition-all duration-500`}
                    style={{ width: `${Math.max(0, Math.min(100, stats.risk))}%`, height: '100%', borderRadius: '9999px' }}
                  ></div>
                </div>
                <span className="text-xs block text-right mt-1">{Math.max(0, Math.min(100, stats.risk)).toFixed(0)}</span>
              </div>
            </div>
          </header>

          {/* Khung Game chính */}
          <main className="p-6 md:p-10">
            {!showResult ? (
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {currentScenario ? `Năm: ${currentScenario.year}` : 'HOÀN THÀNH'}
                </h2>
                
                {currentScenario && (
                  <>
                    <div className="text-lg text-gray-700 mb-8 border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-xl text-blue-800 mb-3">Tình huống:</p>
                      <p>{currentScenario.question}</p>
                    </div>

                    {/* Vùng Lựa chọn */}
                    {!showFeedback && (
                      <div className="space-y-4">
                        {currentScenario.choices.map((choice, index) => (
                          <button
                            key={index}
                            onClick={() => makeChoice(index)}
                            className="btn-choice w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md flex items-center justify-center text-left transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                          >
                            <span className="text-2xl mr-3">{String.fromCharCode(65 + index)}.</span>
                            <span className="text-lg">{choice.text}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Vùng Phản hồi Chuyên gia */}
                    {showFeedback && (
                      <div className="mt-8 bg-yellow-100 p-6 rounded-xl border-2 border-yellow-400 animate-fadeIn">
                        <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
                          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                          Phản hồi Chuyên gia
                        </h3>
                        <p className="text-gray-700 italic">{currentFeedback}</p>
                        <div className="mt-4 flex justify-end">
                          <button
                            onClick={nextScenario}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
                          >
                            Tiếp tục
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : (
              /* Vùng Kết quả Cuối cùng */
              <div className="bg-purple-100 p-8 rounded-xl border-4 border-purple-500 text-left">
                <h2 className="text-3xl font-bold text-purple-800 text-center mb-6 border-b-2 border-purple-300 pb-2">
                  BÁO CÁO TỔNG KẾT ĐƯỜNG LỐI (1996–2005)
                </h2>

                <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                  1. Hiệu suất Tổng thể
                </h3>
                <div className="bg-white p-4 rounded-lg shadow-inner mb-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">{finalStats.economy.toFixed(0)}</p>
                    <p className="text-gray-500 text-sm">Tăng trưởng Kinh tế</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-600">{finalStats.autonomy.toFixed(0)}</p>
                    <p className="text-gray-500 text-sm">Độc lập Tự chủ</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600">{finalStats.risk.toFixed(0)}</p>
                    <p className="text-gray-500 text-sm">Rủi ro Phụ thuộc</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 6a1 1 0 011-1h10a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path>
                  </svg>
                  2. Phân tích Đường lối
                </h3>
                <p className="text-lg text-gray-700 italic mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-purple-400 whitespace-pre-line">
                  {finalAnalysis}
                </p>
                <p className="text-xl font-bold text-purple-700 mb-6 text-center">{finalScore}</p>

                <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.69-.921 1.99 0l3.082 9.474a1 1 0 01-.95 1.37h-6.172a1 1 0 01-.95-1.37l3.082-9.474z"></path>
                  </svg>
                  3. Bảng Tổng Hợp Quyết Định
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Năm</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Kịch bản</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Quyết định</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {decisionHistory.map((decision, index) => (
                        <tr key={index} className="hover:bg-blue-50">
                          <td className="px-3 py-2 whitespace-nowrap font-medium">{decision.year}</td>
                          <td className="px-3 py-2">{decision.title}</td>
                          <td className="px-3 py-2 text-sm text-gray-700">
                            <span className={decision.isIntegration ? 'text-blue-600 font-semibold' : 'text-green-600 font-semibold'}>
                              {decision.choice}.
                            </span>{' '}
                            {decision.text.replace(/ \(Hướng.*?\)/, '')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={startGame}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
                  >
                    Chơi Lại Mô Phỏng
                  </button>
                </div>
              </div>
            )}
          </main>

          {/* Footer */}
          <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
            Mô phỏng Hoạch định Chính sách Việt Nam (1996–2005) - Dự án Học tập
          </footer>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PolicySimulator;

