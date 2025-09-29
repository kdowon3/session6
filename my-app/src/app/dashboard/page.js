'use client';

export default function DashboardPage() {
  // 강의용 단순화 - 주문 내역 없음 상태로 고정
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* 헤더 */}
        <header style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h1 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '4px'
              }}>
                주문 내역
              </h1>
              <p style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                안녕하세요, 데모 사용자님
              </p>
            </div>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <a
                href="/"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                홈으로
              </a>
              <a
                href="/classroom"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                강의실
              </a>
            </div>
          </div>
        </header>

        {/* 주문 목록 */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '20px'
          }}>
            최근 주문 (총 0건)
          </h2>

          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6b7280'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📦</div>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
              주문 내역이 없습니다
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '24px' }}>
              첫 강의를 구매해보세요!
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
              강의 둘러보기
            </a>
          </div>
        </div>

        {/* 도움말 */}
        <div style={{
          backgroundColor: '#eff6ff',
          borderRadius: '12px',
          padding: '20px',
          marginTop: '24px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1e40af',
            marginBottom: '8px'
          }}>
            💡 도움말
          </h3>
          <ul style={{
            fontSize: '14px',
            color: '#1e3a8a',
            paddingLeft: '20px',
            lineHeight: '1.6'
          }}>
            <li>결제 완료된 강의는 바로 수강할 수 있습니다.</li>
            <li>환불은 결제일로부터 7일 이내에 가능합니다.</li>
            <li>문의사항은 고객센터(1588-1234)로 연락해주세요.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}