// API Route: Toss Payments 웹훅 (구현 예정)
import { NextResponse } from 'next/server';

export async function POST(request) {
  // TODO: 강의에서 Toss Payments 웹훅 처리 로직 구현

  return NextResponse.json(
    { message: '웹훅 처리 기능이 아직 구현되지 않았습니다.' },
    { status: 501 }
  );
}