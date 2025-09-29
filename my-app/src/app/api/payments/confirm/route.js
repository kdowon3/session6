// API Route: 결제 승인 (구현 예정)
import { NextResponse } from 'next/server';

export async function POST(request) {
  // TODO: 강의에서 Toss Payments 결제 승인 로직 구현

  return NextResponse.json(
    { message: '결제 승인 기능이 아직 구현되지 않았습니다.' },
    { status: 501 }
  );
}