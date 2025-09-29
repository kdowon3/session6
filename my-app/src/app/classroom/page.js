'use client';

export default function ClassroomPage() {
  // 강의용 단순화 - 항상 접근 거부 상태로 설정
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '48px',
        textAlign: 'center',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>🚫</div>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#ef4444',
          marginBottom: '16px'
        }}>
          접근 권한이 없습니다
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          marginBottom: '32px',
          lineHeight: '1.5'
        }}>
          이 강의를 수강하려면 먼저 수강권을 구매해주세요.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500'
          }}
        >
          수강권 구매하러 가기
        </a>
      </div>
    </div>
  );
}