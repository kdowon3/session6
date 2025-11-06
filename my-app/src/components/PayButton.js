'use client';

import { useState } from 'react';
// loadTossPayments import문 추가

export default function PayButton({
    courseId = 'web-dev-course-2024',
    courseName = 'Next.js + Toss Payments 강의',
    amount = 9000,
}) {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [widgets, setWidgets] = useState(null);

    const handlePayment = async () => {
        setShowModal(true);

        try {
            // 1단계: Toss Payments SDK 로드

            // 2단계: 위젯 초기화

            // 3단계: 금액 설정

            // 위젯 저장 (4,5단계에서 사용)

            // 4단계: UI 렌더링

        } catch (error) {
            console.error('결제 위젯 초기화 실패:', error);
            alert('결제 위젯 초기화에 실패했습니다.');
            setShowModal(false);
        }
    };

    const handleModalPayment = async () => {
        if (!widgets) {
            alert('결제 위젯이 준비되지 않았습니다.');
            return;
        }

        setLoading(true);

        try {
            // 5단계: 주문 생성 및 결제 준비

            
            // 6단계: 백엔드에서 받은 정보로 위젯 호출
        } catch (error) {
            console.error('결제 요청 실패:', error);
            alert('결제 요청에 실패했습니다.');
            setLoading(false);
        }
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
                    transition: 'background-color 0.2s',
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
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '24px',
                            maxWidth: '500px',
                            width: '90%',
                            maxHeight: '80vh',
                            overflowY: 'auto',
                        }}
                    >
                        {/* 모달 헤더 */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '24px',
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    margin: 0,
                                }}
                            >
                                결제하기
                            </h2>
                            <button
                                onClick={closeModal}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: '#6b7280',
                                }}
                            >
                                ×
                            </button>
                        </div>

                        {/* 강의 정보 */}
                        <div
                            style={{
                                backgroundColor: '#f3f4f6',
                                padding: '16px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                            }}
                        >
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{courseName}</h3>
                            <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#ef4444' }}>
                                {amount.toLocaleString()}원
                            </p>
                        </div>

                        {/* 결제 수단 선택 영역*/}
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
                                justifyContent: 'center',
                            }}
                        ></div>

                        {/* 이용약관 영역*/}
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
                                justifyContent: 'center',
                            }}
                        ></div>

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
