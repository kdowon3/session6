'use client';

import { useState } from 'react';

export default function PayButton({
  courseId = 'web-dev-course-2024',
  courseName = 'Next.js + Toss Payments 강의의',
  amount = 99000
}) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    alert('아직 결제 기능이 구현되지 않았습니다.');

    // TODO: 강의에서 Toss Payments 연동 구현
  };

  return (
    <div>
      {/* 결제 버튼 */}
      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: loading ? '#9ca3af' : '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => {
          if (!loading) e.target.style.backgroundColor = '#2563eb';
        }}
        onMouseOut={(e) => {
          if (!loading) e.target.style.backgroundColor = '#3b82f6';
        }}
      >
        {loading ? '처리 중...' : `수강권 결제하기 (${amount.toLocaleString()}원)`}
      </button>
    </div>
  );
}