# PostgreSQL 데이터베이스 설정 가이드

관리자 페이지와 공지사항 관리 시스템을 위한 PostgreSQL 데이터베이스 설정 가이드입니다.

## 🗄️ 구현된 기능

### 관리자 기능
- ✅ 관리자 로그인/로그아웃
- ✅ JWT 기반 인증
- ✅ 공지사항 작성/수정/삭제
- ✅ 공지사항 상단 고정
- ✅ 공지사항 공개/비공개 설정

### 공지사항 기능  
- ✅ DB 기반 공지사항 목록 조회
- ✅ 페이지네이션
- ✅ 조회수 자동 증가
- ✅ 작성일시 표시

## 📦 설치된 패키지

```json
{
  "prisma": "PostgreSQL ORM",
  "@prisma/client": "Prisma 클라이언트",
  "bcryptjs": "비밀번호 암호화",
  "jsonwebtoken": "JWT 토큰 인증"
}
```

## 🚀 빠른 시작

### 1단계: PostgreSQL 설치

#### Windows
1. [PostgreSQL 공식 사이트](https://www.postgresql.org/download/windows/)에서 설치
2. 설치 시 비밀번호 설정 (기억해두기!)
3. 기본 포트: 5432

#### Mac  
```bash
brew install postgresql
brew services start postgresql
```

#### Linux (Ubuntu)
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### 2단계: 데이터베이스 생성

PostgreSQL 접속:
```bash
# Windows: SQL Shell (psql) 실행
# Mac/Linux:
psql postgres
```

데이터베이스 생성:
```sql
CREATE DATABASE business_homepage;
\q
```

### 3단계: 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```env
# PostgreSQL 데이터베이스 URL
# 형식: postgresql://사용자명:비밀번호@호스트:포트/데이터베이스명
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/business_homepage?schema=public"

# JWT 비밀 키 (랜덤한 긴 문자열로 변경!)
JWT_SECRET="change-this-to-a-very-long-random-string-in-production"

# 카카오톡 알림 (선택사항)
KAKAO_API_KEY=
ADMIN_PHONE=010-1234-5678
ADMIN_EMAIL=admin@company.com
```

⚠️ **중요**: `your_password`를 PostgreSQL 설치 시 설정한 비밀번호로 변경하세요!

### 4단계: Prisma 마이그레이션

데이터베이스 테이블 생성:

```bash
npx prisma migrate dev --name init
```

이 명령어로 다음이 생성됩니다:
- `Admin` 테이블 (관리자 계정)
- `Notice` 테이블 (공지사항)
- `Consultation` 테이블 (상담 신청)

### 5단계: Prisma Client 생성

```bash
npx prisma generate
```

### 6단계: 초기 관리자 계정 생성

Prisma Studio를 사용하여 관리자 계정 생성:

```bash
npx prisma studio
```

브라우저가 열리면:
1. `Admin` 테이블 선택
2. `Add record` 클릭
3. 데이터 입력:
   - **username**: admin
   - **password**: (아래 참고)
   - **email**: admin@company.com
   - **name**: 관리자

#### 비밀번호 해시 생성

Node.js로 비밀번호 해시 생성:

```bash
node
```

Node.js REPL에서:
```javascript
const bcrypt = require('bcryptjs');
bcrypt.hashSync('admin123', 10);
// 출력된 해시값을 복사하여 password 필드에 입력
```

또는 간단하게:
```bash
npx ts-node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('admin123', 10));"
```

생성된 해시값 (예: `$2a$10$...`)을 Prisma Studio의 password 필드에 붙여넣기!

## 🎯 사용 방법

### 관리자 로그인

1. 브라우저에서 http://localhost:3000/admin/login 접속
2. 로그인 정보 입력:
   - **아이디**: admin
   - **비밀번호**: admin123
3. 로그인 성공 → 관리자 대시보드로 이동

### 공지사항 작성

1. 관리자 대시보드에서 "새 공지사항 작성" 버튼 클릭
2. 제목과 내용 입력
3. 옵션 설정:
   - 📌 상단 고정: 중요 공지사항을 맨 위에 고정
   - ✅ 즉시 공개: 작성 즉시 공개 (체크 해제 시 비공개)
4. "공지사항 작성" 버튼 클릭

### 공지사항 수정/삭제

1. 관리자 대시보드에서 공지사항 목록 확인
2. 수정하려면 "수정" 버튼 클릭
3. 삭제하려면 "삭제" 버튼 클릭 (확인 메시지 표시)

### 일반 사용자가 공지사항 보기

1. http://localhost:3000/notice 접속
2. 공개된 공지사항 목록 확인
3. 고정된 공지사항은 맨 위에 표시됨

## 📊 데이터베이스 스키마

### Admin (관리자)
```prisma
model Admin {
  id        String   @id @default(cuid())
  username  String   @unique
  password  String   // bcrypt 해시
  email     String   @unique
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  notices   Notice[] // 작성한 공지사항
}
```

### Notice (공지사항)
```prisma
model Notice {
  id          String   @id @default(cuid())
  title       String
  content     String   @db.Text
  author      Admin    @relation(...)
  authorId    String
  views       Int      @default(0)
  isPinned    Boolean  @default(false)
  isPublished Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Consultation (상담 신청)
```prisma
model Consultation {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String
  service   String?
  message   String?  @db.Text
  status    String   @default("pending")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔧 유용한 명령어

### Prisma Studio 열기
```bash
npx prisma studio
```
- 브라우저에서 데이터베이스 관리
- 데이터 추가/수정/삭제

### 데이터베이스 초기화
```bash
npx prisma migrate reset
```
⚠️ **주의**: 모든 데이터가 삭제됩니다!

### 스키마 변경 후 마이그레이션
```bash
npx prisma migrate dev --name 변경사항_설명
```

### Prisma Client 재생성
```bash
npx prisma generate
```

## 🔐 보안 권장사항

### 1. 비밀번호 변경
초기 관리자 비밀번호(`admin123`)를 반드시 변경하세요!

### 2. JWT_SECRET 변경
`.env` 파일의 `JWT_SECRET`을 강력한 랜덤 문자열로 변경:
```bash
# 랜덤 문자열 생성 (Node.js)
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 3. 환경 변수 보호
- `.env` 파일을 `.gitignore`에 추가 (이미 추가됨)
- 절대 Git에 커밋하지 마세요!

### 4. 프로덕션 환경
- PostgreSQL을 외부 서비스로 사용 (예: AWS RDS, Supabase)
- HTTPS 사용
- 강력한 관리자 비밀번호 설정

## 🌐 프로덕션 배포

### Vercel + Supabase (추천)

1. **Supabase 설정**
   - [Supabase](https://supabase.com/) 가입
   - 새 프로젝트 생성
   - PostgreSQL 연결 정보 복사

2. **Vercel 환경 변수**
   ```
   DATABASE_URL=postgresql://...
   JWT_SECRET=your-secret-key
   ```

3. **배포**
   ```bash
   vercel deploy
   ```

### 데이터베이스 마이그레이션
프로덕션 DB에도 마이그레이션 필요:
```bash
npx prisma migrate deploy
```

## 🐛 문제 해결

### 연결 오류
```
Error: P1001: Can't reach database server
```
**해결**:
- PostgreSQL이 실행 중인지 확인
- 포트 번호 확인 (기본 5432)
- `.env`의 DATABASE_URL 확인

### 테이블이 없음
```
Error: Table 'Admin' does not exist
```
**해결**:
```bash
npx prisma migrate dev
```

### Prisma Client 오류
```
Error: Cannot find module '@prisma/client'
```
**해결**:
```bash
npm install @prisma/client
npx prisma generate
```

## 📞 API 엔드포인트

### 공개 API
- `GET /api/notices` - 공지사항 목록
- `GET /api/notices/[id]` - 특정 공지사항

### 관리자 API (인증 필요)
- `POST /api/admin/login` - 로그인
- `POST /api/admin/logout` - 로그아웃
- `GET /api/admin/me` - 현재 관리자 정보
- `GET /api/admin/notices` - 모든 공지사항 (비공개 포함)
- `POST /api/admin/notices` - 공지사항 작성
- `PUT /api/admin/notices/[id]` - 공지사항 수정
- `DELETE /api/admin/notices/[id]` - 공지사항 삭제

## 🎉 완료!

모든 설정이 완료되었습니다! 

- 관리자 페이지: http://localhost:3000/admin/login
- 공지사항 페이지: http://localhost:3000/notice

궁금한 점이 있으면 언제든 물어보세요! 😊

