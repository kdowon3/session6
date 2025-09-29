'use client';

import { useState } from 'react';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';

export default function PayButton({
  courseId = 'web-dev-course-2024',
  courseName = 'Next.js + Toss Payments 강의',
  amount = 99000
}) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [widgets, setWidgets] = useState(null);

  const handlePayment = async () => {
    setShowModal(true);

    // TODO: Toss Payments 연동 구현
  };

  const handleModalPayment = async () => {
    alert('아직 결제 기능이 구현되지 않았습니다.');

    // TODO: 실제 결제 로직 구현
  };

  const closeModal = () => {
    setShowModal(false);
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
        {loading ? '결제창 로딩 중...' : `수강권 결제하기 (${amount.toLocaleString()}원)`}
      </button>

      {/* 결제 모달 */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            {/* 모달 헤더 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                margin: 0
              }}>
                결제하기
              </h2>
              <button
                onClick={closeModal}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#6b7280'
                }}
              >
                ×
              </button>
            </div>

            {/* 강의 정보 */}
            <div style={{
              backgroundColor: '#f3f4f6',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{courseName}</h3>
              <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#ef4444' }}>
                {amount.toLocaleString()}원
              </p>
            </div>

            {/* 결제 수단 선택 영역 (연동 전) */}
            <div
              id="modal-payment-method"
              style={{
                marginBottom: '16px',
                minHeight: '200px',
                backgroundColor: '#f9fafb',
                border: '1px dashed #d1d5db',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{ textAlign: 'center', color: '#6b7280' }}>
                <p>결제 수단 위젯이 여기에 렌더링됩니다</p>
                <p style={{ fontSize: '12px' }}>TODO: Toss Payments 연동</p>
              </div>
            </div>

            {/* 이용약관 영역 (연동 전) */}
            <div
              id="modal-agreement"
              style={{
                marginBottom: '20px',
                minHeight: '100px',
                backgroundColor: '#f9fafb',
                border: '1px dashed #d1d5db',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{ textAlign: 'center', color: '#6b7280' }}>
                <p>이용약관 위젯이 여기에 렌더링됩니다</p>
                <p style={{ fontSize: '12px' }}>TODO: Toss Payments 연동</p>
              </div>
            </div>

            {/* 결제 버튼 */}
            <button
              onClick={handleModalPayment}
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
              }}
            >
              {loading ? '처리 중...' : '결제하기'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}