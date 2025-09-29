// API Route: 주문 생성 및 조회 (메모리 DB 사용)
import { NextResponse } from 'next/server';
import { memoryDb, generateId } from '@/lib/memory-db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, courseId, courseName, amount } = body;

    // 입력값 검증
    if (!userId || !courseId || !courseName || !amount) {
      return NextResponse.json(
        { error: '필수 입력값이 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 고유한 주문 ID 생성
    const orderId = generateId('order');

    // 주문 데이터
    const orderData = {
      orderId,
      userId,
      amount,
      status: 'CREATED', // 초기 상태
      paymentKey: null,
      method: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      lecture: {
        title: courseName,
        startsAt: '2024-11-06T10:00:00+09:00',
      },
    };

    // 메모리 DB에 주문 저장
    const createdOrder = memoryDb.orders.create(orderData);

    console.log(`주문 생성됨: ${orderId}, 사용자: ${userId}, 금액: ${amount}`);

    return NextResponse.json({
      orderId,
      amount,
      status: 'CREATED',
    });

  } catch (error) {
    console.error('주문 생성 오류:', error);
    return NextResponse.json(
      { error: '주문 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// GET 요청 - 주문 조회
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');
    const userId = searchParams.get('userId');

    if (orderId) {
      // 특정 주문 조회
      const order = memoryDb.orders.findById(orderId);

      if (!order) {
        return NextResponse.json(
          { error: '주문을 찾을 수 없습니다.' },
          { status: 404 }
        );
      }

      return NextResponse.json(order);
    }

    if (userId) {
      // 사용자의 주문 목록 조회 (최근 10건)
      const orders = memoryDb.orders.findByUserId(userId)
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 10);

      return NextResponse.json({ orders });
    }

    return NextResponse.json(
      { error: 'orderId 또는 userId가 필요합니다.' },
      { status: 400 }
    );

  } catch (error) {
    console.error('주문 조회 오류:', error);
    return NextResponse.json(
      { error: '주문 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}