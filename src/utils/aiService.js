import { AI_CONFIG, PROVIDER_CONFIGS } from '../config/aiConfig';

/**
 * Sends a message to the configured AI service and gets a response
 * @param {string} message - The user's message
 * @param {Array} previousMessages - Previous conversation messages
 * @returns {Promise<string>} - The AI's response
 */
export const sendMessageToAI = async (message, previousMessages = []) => {
  try {
    const { provider, apiKey, systemPrompt } = AI_CONFIG;

    // Format previous messages for context
    const formattedMessages = previousMessages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({
        role: msg.role,
        content: msg.content
      }));
    
    // Add system prompt for context
    const messages = [
      { role: 'system', content: systemPrompt },
      ...formattedMessages,
      { role: 'user', content: message }
    ];

    // Debug logging
    console.log("Using provider:", provider);
    console.log("Provider config:", PROVIDER_CONFIGS[provider]);
    console.log("API key available:", apiKey ? "Yes (length: " + apiKey.length + ")" : "No");

    // Check if we have a valid API key before attempting to call external APIs
    if (provider === 'openai' && apiKey && apiKey.trim() !== '') {
      try {
        return await sendToOpenAI(messages, apiKey);
      } catch (error) {
        console.warn("OpenAI API error, falling back to mock response:", error.message);
        
        // Check if it's a quota error and provide helpful information
        if (error.message.includes('insufficient_quota') || error.message.includes('429')) {
          return getQuotaErrorResponse(message);
        }
        
        // For other errors, fall back to mock responses
        return getMockResponse(message);
      }
    } else if (provider === 'gemini' && apiKey && apiKey.trim() !== '') {
      try {
        return await sendToGemini(messages, apiKey);
      } catch (error) {
        console.warn("Gemini API error, falling back to mock response:", error.message);
        return getMockResponse(message);
      }
    } else {
      // Use mock response if no valid provider or API key
      console.info("Using mock AI responses (no valid API configuration)");
      return getMockResponse(message);
    }
  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    return "Xin lỗi, đã có lỗi xảy ra khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.";
  }
};

/**
 * Sends messages to OpenAI API
 */
const sendToOpenAI = async (messages, apiKey) => {
  try {
    console.log("Sending request to OpenAI API...");
    
    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7
    };
    
    console.log("Request data:", JSON.stringify(requestData, null, 2));
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error(`OpenAI API error (${response.status}): ${errorText}`);
      throw new Error(`OpenAI API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    console.log("OpenAI response received:", data);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API call failed:", error);
    throw error;
  }
};

/**
 * Sends messages to Google Gemini API
 */
const sendToGemini = async (messages, apiKey) => {
  try {
    console.log("Sending request to Gemini API...");
    
    // Convert messages to Gemini format - Gemini doesn't support 'system' role
    const geminiMessages = messages
      .filter(msg => msg.role !== 'system') // Remove system messages
      .map(msg => ({
        role: msg.role === 'assistant' ? 'model' : msg.role,
        parts: [{ text: msg.content }]
      }));
    
    // If there's a system prompt, prepend it to the first user message
    const systemPrompt = messages.find(msg => msg.role === 'system')?.content;
    if (systemPrompt && geminiMessages.length > 0 && geminiMessages[0].role === 'user') {
      geminiMessages[0].parts[0].text = `${systemPrompt}\n\n${geminiMessages[0].parts[0].text}`;
    }
    
    console.log("Original messages:", messages);
    console.log("Filtered Gemini messages:", geminiMessages);
    
    const requestData = {
      contents: geminiMessages,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000
      }
    };
    
    console.log("Gemini request data:", JSON.stringify(requestData, null, 2));
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error(`Gemini API error (${response.status}): ${errorText}`);
      throw new Error(`Gemini API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    console.log("Gemini response received:", data);
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Invalid response format from Gemini API');
    }
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw error;
  }
};

/**
 * Provides helpful information when quota is exceeded
 */
const getQuotaErrorResponse = (message) => {
  return `Tôi hiểu bạn muốn hỏi về "${message}", nhưng hiện tại tôi đang gặp vấn đề với quota API.

🔧 **Để khắc phục vấn đề này:**

1. **Kiểm tra tài khoản OpenAI:**
   - Đăng nhập vào https://platform.openai.com
   - Kiểm tra phần "Usage" và "Billing"
   - Đảm bảo thông tin thanh toán đã được cập nhật

2. **Xác minh tài khoản:**
   - Kiểm tra email xác minh
   - Cập nhật thông tin cá nhân nếu cần

3. **Tạm thời sử dụng chế độ offline:**
   - Thay đổi provider từ 'openai' thành 'mock' trong file aiConfig.js
   - Tôi sẽ trả lời dựa trên dữ liệu có sẵn

Trong khi chờ khắc phục, tôi có thể trả lời một số câu hỏi cơ bản về lịch sử Việt Nam giai đoạn 1954-1964.`;
};

/**
 * Enhanced mock function for testing without an API
 */
const getMockResponse = (message) => {
  const lowerMsg = message.toLowerCase();
  
  // Basic greetings
  if (lowerMsg.includes('xin chào') || lowerMsg.includes('hello')) {
    return 'Xin chào! Tôi là AI chuyên gia về Việt Nam, được huấn luyện chuyên sâu về thời kỳ BAO CẤP (1976-1986) và ĐỔI MỚI (1986-nay). Tôi có thể giúp bạn tìm hiểu về các thành tựu quan trọng của Việt Nam trong giai đoạn này. Bạn muốn biết điều gì?';
  } 
  
  // Specific questions about Bao Cap period
  if (lowerMsg.includes('bao cấp') || lowerMsg.includes('thời kỳ bao cấp')) {
    return 'Thời kỳ BAO CẤP (1976-1986) là giai đoạn Việt Nam áp dụng chính sách kinh tế tập trung, bao cấp toàn diện. Đặc điểm chính:\n\n📅 **Chính sách kinh tế:**\n- Kế hoạch hóa tập trung, nhà nước kiểm soát toàn bộ\n- Tem phiếu, sổ gạo, phân phối hàng hóa theo định mức\n- Xóa bỏ tư hữu, cải tạo công thương nghiệp\n\n⚠️ **Hậu quả:**\n- Thiếu hụt hàng hóa trầm trọng\n- Năng suất lao động thấp\n- Lạm phát cao, đời sống nhân dân khó khăn\n\nĐây chính là lý do dẫn đến chính sách ĐỔI MỚI năm 1986.';
  }
  
  if (lowerMsg.includes('đổi mới') || lowerMsg.includes('chính sách đổi mới')) {
    return 'Chính sách ĐỔI MỚI (1986) là bước ngoặt lịch sử của Việt Nam:\n\n🚀 **Đại hội Đảng VI (1986):**\n- Mốc son đánh dấu sự thay đổi toàn diện\n- Từ bỏ mô hình kinh tế bao cấp\n- Chuyển sang kinh tế thị trường định hướng XHCN\n\n💡 **Nội dung chính:**\n- Xóa bỏ bao cấp, tem phiếu\n- Cho phép kinh tế tư nhân phát triển\n- Mở cửa hội nhập quốc tế\n- Thu hút đầu tư nước ngoài\n\n🏆 **Kết quả:** GDP tăng trưởng 6-8%/năm, từ nước nghèo thành nước có thu nhập trung bình.';
  }

  if (lowerMsg.includes('thành tựu') || lowerMsg.includes('thành công')) {
    return 'Việt Nam đã đạt được những THÀNH TỰU to lớn sau Đổi mới:\n\n💰 **Kinh tế:**\n- GDP tăng trưởng 6-8%/năm (ổn định)\n- Xuất khẩu gạo, cà phê, thủy sản hàng đầu thế giới\n- Thu hút FDI lớn từ Nhật, Hàn, Singapore\n- Từ nước nghèo → thu nhập trung bình\n\n🌍 **Hội nhập:**\n- ASEAN (1995), WTO (2007)\n- CPTPP, EVFTA\n- Quan hệ với 180+ quốc gia\n\n🏥 **Xã hội:**\n- Xóa đói giảm nghèo thành công\n- Phổ cập giáo dục, y tế phát triển\n- Cơ sở hạ tầng hiện đại\n\nĐây là minh chứng cho sự đúng đắn của chính sách Đổi mới!';
  }

  if (lowerMsg.includes('kinh tế') || lowerMsg.includes('tăng trưởng')) {
    return 'KINH TẾ Việt Nam sau Đổi mới đã có bước phát triển thần kỳ:\n\n📊 **Tăng trưởng GDP:**\n- Trước 1986: Suy thoái, lạm phát 700%\n- Sau 1986: Tăng trưởng 6-8%/năm ổn định\n- 2020: GDP đạt 340 tỷ USD\n\n🏭 **Cơ cấu kinh tế:**\n- Từ nông nghiệp thuần túy → công nghiệp, dịch vụ hiện đại\n- Xuất khẩu: 280 tỷ USD (2020)\n- FDI: 38 tỷ USD (2020)\n\n🌾 **Nông nghiệp:**\n- Gạo: Xuất khẩu 6.3 triệu tấn (2020)\n- Cà phê: Nhà xuất khẩu lớn thứ 2 thế giới\n- Thủy sản: Top 5 thế giới\n\nĐây là kết quả của việc chuyển từ bao cấp sang kinh tế thị trường!';
  }

  if (lowerMsg.includes('hội nhập') || lowerMsg.includes('quan hệ quốc tế')) {
    return 'HỘI NHẬP QUỐC TẾ của Việt Nam sau Đổi mới rất ấn tượng:\n\n🤝 **Tổ chức quốc tế:**\n- ASEAN (1995): Thành viên tích cực\n- WTO (2007): Hội nhập kinh tế toàn cầu\n- Liên Hợp Quốc: Ủy viên không thường trực HĐBA\n\n📜 **Hiệp định thương mại:**\n- CPTPP (2018): 11 quốc gia châu Á-Thái Bình Dương\n- EVFTA (2020): Hiệp định với EU\n- RCEP (2020): Hiệp định thương mại lớn nhất thế giới\n\n🌍 **Quan hệ song phương:**\n- 180+ quốc gia có quan hệ ngoại giao\n- 70+ quốc gia đối tác chiến lược\n- Đặc biệt: Mỹ, Nhật, Hàn, EU, ASEAN\n\nViệt Nam từ "bị cấm vận" → "đối tác tin cậy" của cộng đồng quốc tế!';
  }
  
  // General response for unknown questions
  return `Tôi hiểu bạn muốn hỏi về "${message}", nhưng hiện tại tôi đang hoạt động ở chế độ offline do vấn đề với API.

📚 **Tôi có thể trả lời về các chủ đề sau:**
- Thời kỳ BAO CẤP (1976-1986) và những khó khăn
- Chính sách ĐỔI MỚI (1986) và ý nghĩa lịch sử
- THÀNH TỰU kinh tế, xã hội sau Đổi mới
- HỘI NHẬP quốc tế và quan hệ ngoại giao
- So sánh trước và sau Đổi mới

Bạn có thể hỏi về một trong những chủ đề trên không?`;
};
