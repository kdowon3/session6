// API Route: 주문 생성 (강의용 기본 구조)
import { NextResponse } from 'next/server';

export async function POST(request) {
  // TODO: 강의에서 주문 생성 로직 구현
  return NextResponse.json(
    { message: '주문 생성 기능이 아직 구현되지 않았습니다.' },
    { status: 501 }
  );
}

// GET 요청 - 주문 조회 (강의용 기본 구조)
export async function GET(request) {
  // TODO: 강의에서 주문 조회 로직 구현
  return NextResponse.json(
    { message: '주문 조회 기능이 아직 구현되지 않았습니다.' },
    { status: 501 }
  );
}