// Toss Payments 클라이언트 SDK
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';

// Toss Payments 클라이언트 키 (테스트 환경)
const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;

let tossPayments = null;

// Toss Payments SDK 초기화
export const initTossPayments = async () => {
  if (!tossPayments) {
    tossPayments = await loadTossPayments(clientKey);
  }
  return tossPayments;
};

// 결제 위젯 생성
export const createPaymentWidget = async (customerKey) => {
  const toss = await initTossPayments();
  return toss.widgets({
    customerKey: customerKey || 'ANONYMOUS', // 비회원의 경우 'ANONYMOUS' 사용
  });
};

// 결제 요청
export const requestPayment = async (paymentWidget, { orderId, orderName, amount, successUrl, failUrl }) => {
  return await paymentWidget.requestPayment({
    orderId,
    orderName,
    amount,
    successUrl: successUrl || `${window.location.origin}/checkout/success`,
    failUrl: failUrl || `${window.location.origin}/checkout/fail`,
  });
};

export default {
  initTossPayments,
  createPaymentWidget,
  requestPayment,
};