import PayButton from '@/components/PayButton';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* 헤더 */}
        <header style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px',
          padding: '20px 0'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1f2937'
          }}>
            강의 결제
          </h1>
        </header>

        {/* 강의 카드 */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* 강의 정보 */}
            <div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '16px'
              }}>
                Next.js + Toss Payments 강의
              </h2>

              <div style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '20px',
                fontSize: '14px',
                color: '#6b7280'
              }}>
                <div>
                  <strong>일정:</strong> 2025.11.06
                </div>
                <div>
                  <strong>강사:</strong> NEXT
                </div>
              </div>

              <div style={{
                marginBottom: '24px'
              }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#ef4444',
                  marginBottom: '8px'
                }}>
                  9,000원
                </div>
              </div>

              <div style={{
                backgroundColor: '#f3f4f6',
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '24px'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px'
                }}>
                  🎯 강의 혜택
                </h3>
                <ul style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  paddingLeft: '20px'
                }}>
                  <li>오늘 아니면 못사는 토스페이먼츠 연동 강의</li>
                </ul>
              </div>
            </div>

            {/* 결제 영역 */}
            <div style={{
              backgroundColor: '#f9fafb',
              padding: '24px',
              borderRadius: '8px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                수강권 결제
              </h3>
              <PayButton
                courseId="web-dev-course-2024"
                courseName="Next.js + Toss Payments 강의"
                amount={9000}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
