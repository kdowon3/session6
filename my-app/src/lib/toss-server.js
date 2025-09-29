// Toss Payments 서버 사이드 API
import crypto from 'crypto';

const secretKey = process.env.TOSS_SECRET_KEY;
const webhookSecret = process.env.TOSS_WEBHOOK_SECRET;

// Base64로 인코딩된 시크릿 키
const encodedSecretKey = Buffer.from(secretKey + ':').toString('base64');

// 결제 승인 API 호출
export const confirmPayment = async ({ paymentKey, orderId, amount }) => {
  try {
    const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`결제 승인 실패: ${errorData.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Toss 결제 승인 오류:', error);
    throw error;
  }
};

// 웹훅 HMAC 검증
export const verifyWebhookSignature = (payload, signature) => {
  if (!webhookSecret) {
    throw new Error('TOSS_WEBHOOK_SECRET이 설정되지 않았습니다.');
  }

  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(payload, 'utf8')
    .digest('base64');

  return crypto.timingSafeEqual(
    Buffer.from(signature, 'base64'),
    Buffer.from(expectedSignature, 'base64')
  );
};

export default {
  confirmPayment,
  verifyWebhookSignature,
};