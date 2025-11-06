import { NextResponse } from 'next/server';
import { setOrderCookie } from '@/lib/cookie';

export async function POST(request) {
    try {
        const body = await request.json();
        const { courseName, amount } = body;

        // 입력값 검증
        if (!courseName || !amount) {
            return NextResponse.json({ error: '필수 입력값이 누락되었습니다.' }, { status: 400 });
        }

        // 서버에서 안전한 orderId 생성

        // 쿠키에 주문 정보 저장

        // 결제 위젯에 필요한 정보 반환
        return NextResponse.json({});
    } catch (error) {
        console.error('주문 생성 오류:', error);
        return NextResponse.json({ error: '주문 생성 중 오류가 발생했습니다.' }, { status: 500 });
    }
}
