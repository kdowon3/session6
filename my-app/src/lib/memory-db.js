// 메모리 기반 간단한 데이터베이스 (강의용)
// 서버 재시작시 모든 데이터가 초기화됩니다.

let orders = [];
let entitlements = [];

// 샘플 데이터 (강의 시연용)
const sampleOrders = [
  {
    orderId: 'order_demo_001',
    userId: 'user_demo',
    amount: 99000,
    status: 'PAID',
    paymentKey: 'payment_demo_001',
    method: '카드',
    createdAt: Date.now() - 24 * 60 * 60 * 1000, // 하루 전
    updatedAt: Date.now() - 24 * 60 * 60 * 1000,
    lecture: {
      title: 'Next.js + Toss Payments 강의',
      startsAt: '2024-11-06T10:00:00+09:00'
    }
  }
];

const sampleEntitlements = [
  {
    id: 'entitlement_demo_001',
    userId: 'user_demo',
    courseId: 'web-dev-course-2024',
    orderId: 'order_demo_001',
    active: true,
    createdAt: Date.now() - 24 * 60 * 60 * 1000,
    expiresAt: null // 평생 소장
  }
];

export const memoryDb = {
  // 주문 관련
  orders: {
    create: (order) => {
      orders.push(order);
      return order;
    },

    findById: (orderId) => {
      return orders.find(order => order.orderId === orderId);
    },

    findByUserId: (userId) => {
      return orders.filter(order => order.userId === userId);
    },

    updateStatus: (orderId, status, updateData = {}) => {
      const order = orders.find(o => o.orderId === orderId);
      if (order) {
        order.status = status;
        order.updatedAt = Date.now();
        Object.assign(order, updateData);
      }
      return order;
    },

    getAll: () => orders,

    clear: () => { orders = []; }
  },

  // 수강권 관련
  entitlements: {
    create: (entitlement) => {
      entitlements.push(entitlement);
      return entitlement;
    },

    findByUserId: (userId) => {
      return entitlements.filter(e => e.userId === userId && e.active);
    },

    findByCourseId: (userId, courseId) => {
      return entitlements.find(e =>
        e.userId === userId &&
        e.courseId === courseId &&
        e.active
      );
    },

    deactivate: (id) => {
      const entitlement = entitlements.find(e => e.id === id);
      if (entitlement) {
        entitlement.active = false;
      }
      return entitlement;
    },

    getAll: () => entitlements,

    clear: () => { entitlements = []; }
  },

  // 유틸리티
  utils: {
    // 샘플 데이터 로드 (데모용)
    loadSampleData: () => {
      orders = [...sampleOrders];
      entitlements = [...sampleEntitlements];
      console.log('샘플 데이터 로드됨:', { orders: orders.length, entitlements: entitlements.length });
    },

    // 모든 데이터 초기화
    clearAll: () => {
      orders = [];
      entitlements = [];
      console.log('모든 데이터 초기화됨');
    },

    // 현재 상태 출력 (디버깅용)
    getStatus: () => ({
      orders: orders.length,
      entitlements: entitlements.length,
      lastOrderTime: orders.length > 0 ? Math.max(...orders.map(o => o.createdAt)) : null
    })
  }
};

// 고유 ID 생성 헬퍼
export const generateId = (prefix = 'id') => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// 서버 시작시 로그
console.log('🗂️ 메모리 데이터베이스 초기화됨');