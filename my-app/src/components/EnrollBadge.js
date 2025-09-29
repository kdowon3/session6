'use client';

export default function EnrollBadge({ courseId = 'web-dev-course-2024' }) {
  // 강의용 단순화 - 항상 "미수강" 상태 표시
  return (
    <div style={{
      padding: '8px 16px',
      backgroundColor: '#ef4444',
      color: 'white',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500'
    }}>
      ❌ Not Enrolled
    </div>
  );
}