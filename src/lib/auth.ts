// 인증 관련 유틸리티 함수

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// 비밀번호 해시화
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// 비밀번호 검증
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// JWT 토큰 생성
export function generateToken(payload: { id: string; username: string; email: string }): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d', // 7일 유효
  });
}

// JWT 토큰 검증
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// 토큰에서 사용자 정보 추출
export function getUserFromToken(token: string | undefined): any {
  if (!token) return null;
  
  // "Bearer TOKEN" 형식에서 토큰만 추출
  const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;
  
  return verifyToken(actualToken);
}

