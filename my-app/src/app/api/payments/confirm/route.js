// API Route: 결제 승인 (강의용 기본 구조 + 메모리 DB 연동)
import { NextResponse } from 'next/server';
import { memoryDb, generateId } from '@/lib/memory-db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { orderId, paymentKey, amount } = body;

    console.log('결제 승인 요청:', { orderId, paymentKey, amount });

    // 입력값 검증
    if (!orderId || !paymentKey || !amount) {
      return NextResponse.json(
        { error: '필수 입력값이 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 주문 조회
    const order = memoryDb.orders.findById(orderId);
    if (!order) {
      return NextResponse.json(
        { error: '주문을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    // 금액 검증
    if (order.amount !== amount) {
      return NextResponse.json(
        { error: '주문 금액이 일치하지 않습니다.' },
        { status: 400 }
      );
    }

    // TODO: 강의에서 실제 Toss Payments API 호출 구현
    // 현재는 모의 결제 승인 처리

    // 주문 상태 업데이트
    const updatedOrder = memoryDb.orders.updateStatus(orderId, 'PAID', {
      paymentKey,
      method: '카드', // 임시 값
    });

    // 수강권 생성
    const entitlementId = generateId('entitlement');
    const entitlement = {
      id: entitlementId,
      userId: order.userId,
      courseId: 'web-dev-course-2024',
      orderId: orderId,
      active: true,
      createdAt: Date.now(),
      expiresAt: null // 평생 소장
    };

    memoryDb.entitlements.create(entitlement);

    console.log(`결제 승인 완료: ${orderId}, 수강권 생성: ${entitlementId}`);

    return NextResponse.json({
      success: true,
      orderId,
      paymentKey,
      status: 'PAID',
      entitlementId
    });

  } catch (error) {
    console.error('결제 승인 오류:', error);
    return NextResponse.json(
      { error: '결제 승인 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}