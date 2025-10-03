# 카카오톡 알림 설정 가이드

무료 상담 신청 시 관리자에게 카카오톡 알림을 보내는 기능이 구현되어 있습니다.

## 🚀 현재 상태

- ✅ API Route 구현 완료 (`/api/consultation`)
- ✅ 프론트엔드 폼 연동 완료
- ✅ 데모 모드로 작동 중 (콘솔에 로그 출력)

## 📱 실제 카카오톡 알림 활성화 방법

### 1. 카카오 비즈니스 계정 생성

1. [카카오 비즈니스](https://business.kakao.com/) 접속
2. 비즈니스 계정 생성
3. 채널 개설

### 2. 카카오 개발자 센터 설정

1. [카카오 개발자 센터](https://developers.kakao.com/) 접속
2. 애플리케이션 추가
3. **REST API 키** 발급받기
4. **플랫폼 설정**에서 도메인 등록

### 3. 알림톡 설정

카카오톡 알림을 보내려면 두 가지 방법이 있습니다:

#### 방법 A: 카카오톡 친구톡 (무료, 간단)
- 채널 추가한 사용자에게만 발송 가능
- 별도 승인 불필요
- 개발/테스트 용도로 적합

#### 방법 B: 카카오 알림톡 (유료, 비즈니스용)
- 채널 추가 없이도 발송 가능
- 템플릿 사전 승인 필요
- 실제 서비스 운영에 적합
- [카카오 알림톡 신청](https://center-pf.kakao.com/)

### 4. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```env
# 카카오톡 알림 설정
KAKAO_API_KEY=your_kakao_rest_api_key_here
KAKAO_SENDER_KEY=your_kakao_sender_key_here
KAKAO_TEMPLATE_CODE=your_template_code_here

# 관리자 연락처
ADMIN_PHONE=010-1234-5678
ADMIN_EMAIL=admin@company.com
```

### 5. 코드 수정 (필요시)

현재 `/src/app/api/consultation/route.ts` 파일에 카카오 API 호출 코드가 준비되어 있습니다.

환경 변수를 설정하면 자동으로 실제 API를 호출하며, 설정이 없으면 데모 모드로 작동합니다.

## 🧪 테스트 방법

### 데모 모드 (현재 상태)

1. 개발 서버 실행:
```bash
npm run dev
```

2. http://localhost:3000/consultation 접속

3. 상담 신청 폼 작성 후 제출

4. **브라우저 콘솔**을 열어서 로그 확인:
   - ✅ 상담 신청 성공 메시지
   - 📱 카카오톡 알림 내용
   - 📧 이메일 알림 내용

### 실제 API 연동 후

환경 변수 설정 완료 후:
1. 개발 서버 재시작
2. 상담 신청 폼 제출
3. 설정한 관리자 번호로 카카오톡 알림 수신

## 📊 구현된 기능

### API Endpoint: `/api/consultation`

#### POST 요청
```typescript
{
  name: string,        // 이름 (필수)
  email: string,       // 이메일 (필수)
  phone: string,       // 전화번호 (필수)
  company?: string,    // 회사명
  service?: string,    // 관심 서비스
  budget?: string,     // 예산
  timeline?: string,   // 희망 일정
  message?: string     // 상세 내용
}
```

#### 응답
```typescript
{
  success: true,
  message: "상담 신청이 접수되었습니다.",
  notifications: {
    kakao: { success: true, mode: "demo" },
    email: { success: true }
  },
  timestamp: "2025-..."
}
```

## 🔔 알림 내용

관리자에게 다음 정보가 전송됩니다:

```
🔔 새로운 상담 신청이 접수되었습니다!

👤 이름: 홍길동
🏢 회사: (주)테스트
📧 이메일: test@example.com
📞 연락처: 010-1234-5678
💼 관심 서비스: 웹 개발 & 앱 개발
💰 예산: 1000만원 - 3000만원
📅 희망 일정: 1-3개월

📝 상세 내용:
쇼핑몰 웹사이트 개발 문의드립니다.

👉 빠른 답변 부탁드립니다!
```

## 💡 추가 개선 아이디어

1. **데이터베이스 연동**
   - MongoDB, PostgreSQL 등에 상담 신청 내역 저장
   - 관리자 대시보드에서 조회

2. **이메일 알림 추가**
   - Nodemailer, SendGrid, AWS SES 등 사용
   - 신청자에게 자동 확인 이메일 발송

3. **SMS 알림**
   - 문자 메시지 발송 (알리고, 카카오 등)

4. **슬랙/디스코드 알림**
   - Webhook으로 팀 채널에 알림

5. **관리자 대시보드**
   - 상담 신청 내역 관리
   - 상태 변경 (접수/진행중/완료)

## 🆘 문제 해결

### 카카오톡이 전송되지 않아요
1. 환경 변수가 올바르게 설정되었는지 확인
2. 개발 서버를 재시작했는지 확인
3. 브라우저 콘솔에서 에러 메시지 확인
4. 카카오 API 키의 권한 확인

### 데모 모드에서만 작동해요
- `.env.local` 파일에 `KAKAO_API_KEY`가 설정되지 않은 경우 데모 모드로 작동합니다.
- 이는 정상적인 동작이며, 개발 단계에서는 데모 모드로 테스트할 수 있습니다.

## 📚 참고 자료

- [카카오 개발자 문서](https://developers.kakao.com/docs)
- [카카오톡 메시지 API](https://developers.kakao.com/docs/latest/ko/message/common)
- [카카오 알림톡](https://center-pf.kakao.com/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

