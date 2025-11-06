import { cookies } from 'next/headers';

// 쿠키 키 상수
const COOKIE_KEYS = {
    CURRENT_ORDER: 'currentOrder',
};

// 쿠키 기본 설정
const DEFAULT_COOKIE_OPTIONS = {
    maxAge: 60 * 60, // 1시간
    httpOnly: false,
    secure: false, // 개발환경
    sameSite: 'lax',
};

// 주문 정보를 쿠키에 저장
export async function setOrderCookie(orderData) {
    try {
        const cookieStore = await cookies();
        const cookieValue = JSON.stringify({
            orderId: orderData.orderId,
            courseName: orderData.courseName,
            amount: orderData.amount,
            status: orderData.status || 'CREATED',
            createdAt: Date.now(),
        });

        cookieStore.set(COOKIE_KEYS.CURRENT_ORDER, cookieValue, DEFAULT_COOKIE_OPTIONS);
        return true;
    } catch (error) {
        console.error('쿠키 저장 오류:', error);
        return false;
    }
}

// 주문 정보를 쿠키에서 읽기
export async function getOrderCookie() {
    try {
        const cookieStore = await cookies();
        const orderCookie = cookieStore.get(COOKIE_KEYS.CURRENT_ORDER);

        if (!orderCookie) {
            return { success: false, error: '주문 정보를 찾을 수 없습니다.' };
        }

        const orderInfo = JSON.parse(orderCookie.value);
        return { success: true, data: orderInfo };
    } catch (error) {
        console.error('쿠키 읽기 오류:', error);
        return { success: false, error: '주문 정보가 손상되었습니다.' };
    }
}

// 주문 쿠키 삭제
export async function deleteOrderCookie() {
    try {
        const cookieStore = await cookies();
        cookieStore.delete(COOKIE_KEYS.CURRENT_ORDER);
        return true;
    } catch (error) {
        console.error('쿠키 삭제 오류:', error);
        return false;
    }
}

// 주문 ID 검증
export function validateOrderId(cookieOrderId, requestOrderId) {
    if (cookieOrderId !== requestOrderId) {
        return {
            success: false,
            error: '주문 정보가 일치하지 않습니다.',
            details: { cookie: cookieOrderId, request: requestOrderId },
        };
    }
    return { success: true };
}
