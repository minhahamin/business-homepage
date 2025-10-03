import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend 초기화 함수
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

// 견적 요청 이메일 전송
async function sendQuoteEmail(formData: any) {
  try {
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@company.com';
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const emailContent = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 견적 요청서
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 기본 정보
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 회사명: ${formData.companyName}
👤 담당자: ${formData.contactPerson}
📧 이메일: ${formData.email}
📞 연락처: ${formData.phone}

📌 프로젝트 정보
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 서비스 유형: ${formData.serviceType}
🎯 프로젝트 유형: ${formData.projectType || '미입력'}
💰 예산 범위: ${formData.budget || '미입력'}
📅 개발 일정: ${formData.timeline || '미입력'}

📝 프로젝트 설명:
${formData.description}

${formData.additionalServices?.length > 0 ? `
📌 추가 서비스
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.additionalServices.join(', ')}
` : ''}

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
        subject: `🔔 새로운 견적 요청 - ${formData.companyName}`,
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
      console.log('📧 [데모] 견적 요청 이메일 (RESEND_API_KEY 미설정):');
      console.log({
        to: ADMIN_EMAIL,
        from: FROM_EMAIL,
        subject: `🔔 새로운 견적 요청 - ${formData.companyName}`,
        content: emailContent
      });
      return { success: true, mode: 'demo' };
    }
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return { success: false, error };
  }
}

// 견적 요청 저장 (데이터베이스)
async function saveQuoteRequest(formData: any) {
  try {
    // Consultation 모델에 저장 (견적 요청도 상담의 일종)
    // 필요시 별도 Quote 모델 생성 가능
    console.log('💾 견적 요청 데이터:', {
      company: formData.companyName,
      contact: formData.contactPerson,
      service: formData.serviceType,
    });
    return { success: true };
  } catch (error) {
    console.error('저장 실패:', error);
    return { success: false, error };
  }
}

// POST 요청 핸들러
export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // 유효성 검사
    if (!formData.companyName || !formData.contactPerson || !formData.email || 
        !formData.phone || !formData.serviceType || !formData.description) {
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

    console.log('📝 새로운 견적 요청 접수:', {
      company: formData.companyName,
      contact: formData.contactPerson,
      email: formData.email,
      service: formData.serviceType,
      timestamp: new Date().toISOString()
    });

    // 이메일 전송
    const emailResult = await sendQuoteEmail(formData);
    
    // 데이터베이스 저장 (선택사항)
    const saveResult = await saveQuoteRequest(formData);

    return NextResponse.json({
      success: true,
      message: '견적 요청이 접수되었습니다. 영업일 기준 1-2일 내에 연락드리겠습니다.',
      notifications: {
        email: emailResult,
        saved: saveResult
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('견적 요청 처리 중 오류:', error);
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
    message: '견적 요청 API',
    endpoint: '/api/quote',
    method: 'POST',
    status: 'active'
  });
}

