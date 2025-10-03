# 📱 카카오톡 "나에게 보내기" 설정 가이드

비즈니스 계정 없이 **개인 카카오톡으로 알림**을 받는 간단한 방법입니다!

## ✨ 특징

- ✅ 개인 카카오 계정만 있으면 OK
- ✅ 비즈니스 계정 불필요
- ✅ 무료!
- ✅ 5분 안에 설정 완료
- ✅ 포트폴리오/개인 프로젝트에 완벽

---

## 🚀 빠른 설정 (5분)

### 1단계: 카카오 개발자 계정

1. https://developers.kakao.com/ 접속
2. 카카오 계정으로 로그인 (개인 계정 OK!)
3. **내 애플리케이션** 클릭
4. **애플리케이션 추가하기** 클릭
5. **앱 이름** 입력:
   - 앱 이름: `비즈니스 홈페이지`
   - 사업자명: 본인 이름
6. **저장** 클릭

### 2단계: REST API 키 복사

1. 방금 만든 앱 클릭
2. **요약 정보** 또는 **앱 키** 탭
3. **REST API 키** 복사
   - 예: `abc123def456ghi789...`

### 3단계: 플랫폼 등록

1. **플랫폼** 메뉴 클릭
2. **Web 플랫폼 등록** 클릭
3. **사이트 도메인** 입력:
   ```
   http://localhost:3000
   ```
4. **저장** 클릭

### 4단계: 카카오 로그인 활성화

1. **제품 설정** → **카카오 로그인** 클릭
2. **활성화 설정** → **ON** 으로 변경
3. **Redirect URI** 등록:
   ```
   http://localhost:3000
   ```
4. **저장** 클릭

### 5단계: 인증 코드 발급

브라우저 **새 탭**에서 다음 URL 접속:

```
https://kauth.kakao.com/oauth/authorize?client_id=YOUR_REST_API_KEY&redirect_uri=http://localhost:3000&response_type=code&scope=talk_message
```

**⚠️ 중요**: `YOUR_REST_API_KEY`를 2단계에서 복사한 REST API 키로 변경!

예시:
```
https://kauth.kakao.com/oauth/authorize?client_id=abc123def456&redirect_uri=http://localhost:3000&response_type=code&scope=talk_message
```

→ 카카오 로그인
→ 동의하기
→ 리다이렉트됨
→ **주소창의 `code=` 뒤의 값 복사**

예: `http://localhost:3000/?code=ABC123XYZ789...`
→ `ABC123XYZ789...` 부분만 복사!

### 6단계: Access Token 발급 (중요!)

**PowerShell에서** 실행 (아래 값들을 변경하세요):

```powershell
$restApiKey = "YOUR_REST_API_KEY"
$code = "YOUR_CODE"

$body = @{
    grant_type = "authorization_code"
    client_id = $restApiKey
    redirect_uri = "http://localhost:3000"
    code = $code
}

$response = Invoke-RestMethod -Uri "https://kauth.kakao.com/oauth/token" -Method Post -Body $body -ContentType "application/x-www-form-urlencoded"

Write-Host "Access Token:"
Write-Host $response.access_token
```

또는 **온라인 도구** 사용:
1. https://reqbin.com/ 접속
2. **POST** 선택
3. URL: `https://kauth.kakao.com/oauth/token`
4. **Body** → `x-www-form-urlencoded` 선택
5. 다음 값 입력:
   ```
   grant_type: authorization_code
   client_id: YOUR_REST_API_KEY
   redirect_uri: http://localhost:3000
   code: YOUR_CODE
   ```
6. **Send** 클릭
7. 응답에서 `access_token` 복사

### 7단계: .env 파일에 추가

프로젝트 루트의 `.env` 파일에 추가:

```env
# 카카오톡 나에게 보내기
KAKAO_ACCESS_TOKEN=your_access_token_here
```

### 8단계: 개발 서버 재시작

```bash
npm run dev
```

---

## 🧪 테스트

1. http://localhost:3000/consultation 접속
2. 폼 작성 후 제출
3. **내 카카오톡 확인!** 📱
   - 나에게 보내기로 메시지 도착!

---

## ⏰ Access Token 만료

Access Token은 **2개월 후** 만료됩니다.

### 만료되면?
- 카카오톡 알림이 안 감
- 5단계부터 다시 진행 (새 토큰 발급)

### 자동 갱신 (선택사항)
Refresh Token 사용하면 자동 갱신 가능
→ 복잡하니 포트폴리오용으로는 불필요

---

## 🆚 다른 방법과 비교

### 카카오톡 나에게 보내기 (현재)
- ✅ 매우 간단
- ✅ 개인 계정만 OK
- ✅ 무료
- ❌ 본인에게만 발송
- ❌ 2개월마다 토큰 갱신

### 카카오 알림톡 (비즈니스)
- ❌ 복잡 (비즈니스 계정, 템플릿 승인)
- ❌ 유료
- ✅ 누구에게나 발송
- ✅ 자동 갱신

### Discord Webhook (대안!)
- ✅ 매우 간단 (1분 설정)
- ✅ 무료
- ✅ 만료 없음
- ✅ PC/모바일 알림
- ❌ 카카오톡 아님

---

## 💡 Discord Webhook 대안 (더 간단!)

카카오톡보다 **훨씬 간단**한 방법이 있습니다:

### Discord 설정 (1분!)

1. Discord 서버 만들기 (무료)
2. 채널 설정 → **통합** → **Webhook 만들기**
3. Webhook URL 복사
4. `.env`에 추가:
   ```env
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
   ```

5. API에서 호출:
   ```typescript
   await fetch(process.env.DISCORD_WEBHOOK_URL, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       content: `🔔 새로운 상담 신청\n\n👤 ${formData.name}\n...`
     })
   });
   ```

→ Discord 앱으로 즉시 알림! (PC/모바일)

**원하시면 Discord Webhook으로 바꿔드릴까요?** (카카오톡보다 10배 쉬움!)

---

## 🎯 추천

### 포트폴리오/개인 프로젝트
→ **Discord Webhook** (매우 간단, 만료 없음)

### 실제 비즈니스
→ **이메일** (Resend, 전문적)

### 카카오톡 꼭 필요
→ 위 가이드대로 설정

어떤 방법을 선택하시겠어요? 😊

