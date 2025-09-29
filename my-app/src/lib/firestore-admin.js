// Firebase Admin SDK - 서버 사이드에서만 사용
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Firebase Admin 앱이 이미 초기화되었는지 확인
const apps = getApps();

let adminApp;
if (apps.length === 0) {
  // 환경변수에서 서비스 계정 키 정보 가져오기
  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  adminApp = initializeApp({
    credential: cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
} else {
  adminApp = apps[0];
}

// Admin Firestore 인스턴스
export const adminDb = getFirestore(adminApp);

export default adminApp;