import { NextResponse } from 'next/server';
import { getOrderCookie, deleteOrderCookie, validateOrderId } from '@/lib/cookie';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const orderId = searchParams.get('orderId');
        const paymentKey = searchParams.get('paymentKey');
        const amount = searchParams.get('amount');

        console.log('결제 승인 요청:', { orderId, paymentKey, amount });

        // 입력값 검증
        if (!orderId || !paymentKey || !amount) {
            return NextResponse.json({ error: '필수 입력값이 누락되었습니다.' }, { status: 400 });
        }

        // Toss Payments API 결제 승인 요청
       

        // 쿠키에서 주문 정보 확인 (메모리 DB 대신)
       
        // orderId 일치 확인
        

        // 결제 완료 후 쿠키 정리
        

        // 성공 페이지로 리다이렉트 (필요한 정보 모두 전달)
        const successUrl = new URL('/checkout/success', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
        successUrl.searchParams.set('orderId', orderId);
        successUrl.searchParams.set('amount', amount);
        successUrl.searchParams.set('paymentKey', paymentKey);
        successUrl.searchParams.set('method', paymentData.method || '간편결제');
        successUrl.searchParams.set(
            'orderName',
            orderInfo.courseName || paymentData.orderName || 'Next.js + Toss Payments 강의'
        );

        return NextResponse.redirect(successUrl.toString());
    } catch (error) {
        console.error('결제 승인 오류:', error);
        return NextResponse.json({ error: '결제 승인 중 오류가 발생했습니다.' }, { status: 500 });
    }
}
