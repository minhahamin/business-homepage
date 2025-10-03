import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend 초기화 함수
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

// 카카오톡 알림 전송 함수 (나에게 보내기)
async function sendKakaoNotification(formData: any) {
  try {
    const KAKAO_ACCESS_TOKEN = process.env.KAKAO_ACCESS_TOKEN;

    const messageText = `🔔 새로운 상담 신청이 접수되었습니다!

👤 이름: ${formData.name}
🏢 회사: ${formData.company || '미입력'}
📧 이메일: ${formData.email}
📞 연락처: ${formData.phone}
💼 관심 서비스: ${getServiceName(formData.service)}
💰 예산: ${getBudgetRange(formData.budget)}
📅 희망 일정: ${getTimelineText(formData.timeline)}

📝 상세 내용:
${formData.message || '없음'}

👉 빠른 답변 부탁드립니다!`;

    if (!KAKAO_ACCESS_TOKEN) {
      console.log('⚠️ 카카오 Access Token이 설정되지 않았습니다. 데모 모드로 실행합니다.');
      console.log('📱 [데모] 카카오톡 알림이 전송되었습니다:');
      console.log({
        받는사람: '나에게 보내기',
        내용: messageText
      });
      return { success: true, mode: 'demo' };
    }

    // 카카오톡 "나에게 보내기" API 호출
    const response = await fetch('https://kapi.kakao.com/v2/api/talk/memo/default/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${KAKAO_ACCESS_TOKEN}`
      },
      body: new URLSearchParams({
        template_object: JSON.stringify({
          object_type: 'text',
          text: messageText,
          link: {
            web_url: 'http://localhost:3000/admin',
            mobile_web_url: 'http://localhost:3000/admin'
          }
        })
      })
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('카카오톡 API 오류:', result);
      throw new Error('카카오톡 전송 실패');
    }

    console.log('✅ 카카오톡 전송 성공!');
    return { success: true, mode: 'production' };
  } catch (error) {
    console.error('카카오톡 알림 전송 실패:', error);
    return { success: false, error: error };
  }
}

// 이메일 알림 전송 함수 (Resend)
async function sendEmailNotification(formData: any) {
  try {
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@company.com';
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const emailContent = `
새로운 상담 신청이 접수되었습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 상담 신청서
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 기본 정보
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 이름: ${formData.name}
🏢 회사: ${formData.company || '미입력'}
📧 이메일: ${formData.email}
📞 연락처: ${formData.phone}

📌 상담 내용
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 관심 서비스: ${getServiceName(formData.service)}
💰 예산: ${getBudgetRange(formData.budget)}
📅 희망 일정: ${getTimelineText(formData.timeline)}

📝 상세 내용:
${formData.message || '없음'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ 접수 시간: ${new Date().toLocaleString('ko-KR')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    // Resend로 실제 이메일 발송
    const resend = getResendClient();
    if (resend) {
      const data = await resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `🔔 새로운 상담 신청 - ${formData.name}님`,
        text: emailContent,
        html: `
          <div style="font-family: monospace; white-space: pre-wrap; background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            ${emailContent}
          </div>
        `,
      });

      console.log('✅ 이메일 전송 성공:', data);
      return { success: true, mode: 'production', emailId: data.data?.id };
    } else {
      // API 키가 없으면 데모 모드
      console.log('📧 [데모] 상담 신청 이메일 (RESEND_API_KEY 미설정):');
      console.log({
        to: ADMIN_EMAIL,
        subject: `🔔 새로운 상담 신청 - ${formData.name}님`,
        content: emailContent
      });
      return { success: true, mode: 'demo' };
    }
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return { success: false, error };
  }
}

// 서비스명 변환
function getServiceName(service: string): string {
  const serviceMap: { [key: string]: string } = {
    'web-app': '웹 개발 & 앱 개발',
    'system': '시스템 통합 & 구축',
    'cloud': '클라우드 솔루션',
    'ai': 'AI/머신러닝 서비스',
    'marketing': '디지털 마케팅',
    'consulting': 'IT 컨설팅',
    'maintenance': '유지보수 & 지원',
    'other': '기타'
  };
  return serviceMap[service] || service;
}

// 예산 범위 변환
function getBudgetRange(budget: string): string {
  const budgetMap: { [key: string]: string } = {
    'under-500': '500만원 미만',
    '500-1000': '500만원 - 1000만원',
    '1000-3000': '1000만원 - 3000만원',
    '3000-5000': '3000만원 - 5000만원',
    'over-5000': '5000만원 이상',
    'negotiable': '협의 후 결정'
  };
  return budgetMap[budget] || budget || '미입력';
}

// 일정 변환
function getTimelineText(timeline: string): string {
  const timelineMap: { [key: string]: string } = {
    'urgent': '긴급 (1개월 이내)',
    '1-3': '1-3개월',
    '3-6': '3-6개월',
    '6+': '6개월 이상',
    'flexible': '유연하게 조정 가능'
  };
  return timelineMap[timeline] || timeline || '미입력';
}

// POST 요청 핸들러
export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // 유효성 검사
    if (!formData.name || !formData.email || !formData.phone) {
      return NextResponse.json(
        { success: false, message: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: '올바른 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    console.log('📝 새로운 상담 신청 접수:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      timestamp: new Date().toISOString()
    });

    // 카카오톡 알림 전송
    const kakaoResult = await sendKakaoNotification(formData);
    
    // 이메일 알림 전송 (선택사항)
    const emailResult = await sendEmailNotification(formData);

    // 실제로는 여기서 데이터베이스에 저장
    // await saveToDatabase(formData);

    return NextResponse.json({
      success: true,
      message: '상담 신청이 접수되었습니다. 24시간 내에 연락드리겠습니다.',
      notifications: {
        kakao: kakaoResult,
        email: emailResult
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('상담 신청 처리 중 오류:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// GET 요청 핸들러 (테스트용)
export async function GET() {
  return NextResponse.json({
    message: '상담 신청 API',
    endpoint: '/api/consultation',
    method: 'POST',
    status: 'active'
  });
}

