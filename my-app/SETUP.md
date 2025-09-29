# 🚀 강의 결제 데모 앱 - 강의용 베이스 프로젝트

## 📋 개요

이 프로젝트는 **Toss Payments 연동 강의용** 베이스 앱입니다.
- **현재 상태**: Firebase 연동만 완료된 기본 구조
- **강의 목표**: 여기에 Toss Payments 결제 기능 추가하기

## ⚡ 시작하기

### 1단계: 환경변수 설정

```bash
cp .env.local.example .env.local
```

Firebase 설정만 입력하면 됩니다. (Toss Payments는 강의에서 추가)

### 2단계: 실행

```bash
npm install
npm run dev
```

## 📊 현재 상태

### ✅ 구현 완료
- **홈페이지**: 강의 카드 및 UI 완성
- **Firebase 연동**: Firestore 데이터베이스 연결
- **기본 구조**: 강의실, 대시보드 페이지
- **간단한 컴포넌트**: 결제 버튼 (기능 없음), 수강 배지

### ⏳ 강의에서 구현 예정
- **Toss Payments 연동**: SDK 설치 및 설정
- **결제 버튼 로직**: PayButton에 실제 결제 기능 추가
- **주문 시스템**: 주문 생성/조회 API (`/api/orders`)
- **결제 승인 API**: `/api/payments/confirm`
- **웹훅 처리**: `/api/webhooks/toss`
- **결제 플로우**: 성공/실패 페이지 로직
- **수강권 시스템**: 결제 완료 후 수강 상태 업데이트

## 🎯 강의 진행 계획

### 1강: Toss Payments 기본 설정
- SDK 설치 및 환경변수 설정
- 기본 결제 위젯 렌더링

### 2강: 결제 버튼 구현
- PayButton 컴포넌트에 Toss SDK 연동
- 주문 생성 후 결제창 호출

### 3강: 서버 사이드 결제 승인
- `/api/payments/confirm` 구현
- Toss API 호출 및 상태 업데이트

### 4강: 결제 완료 플로우
- 성공/실패 페이지 로직 구현
- 수강권 발급 시스템

### 5강: 웹훅 및 고급 기능
- 웹훅 HMAC 검증
- 멱등성 처리 및 에러 핸들링

## 🗂 프로젝트 구조

```
src/
├── app/
│   ├── page.js                    # 홈페이지 (완성)
│   ├── classroom/page.js           # 강의실 (완성)
│   ├── dashboard/page.js           # 대시보드 (완성)
│   ├── checkout/
│   │   ├── success/page.js         # 성공 페이지 (기본)
│   │   └── fail/page.js           # 실패 페이지 (기본)
│   └── api/
│       ├── orders/route.js         # 주문 API (기본 - TODO)
│       ├── payments/confirm/route.js  # 결제 승인 (TODO)
│       └── webhooks/toss/route.js     # 웹훅 (TODO)
├── components/
│   ├── PayButton.js               # 결제 버튼 (기본 - 알림만)
│   └── EnrollBadge.js            # 수강 상태 (기본 - 미수강 표시)
└── lib/
    ├── firestore-*.js             # Firebase 설정 (완성)
    └── toss*.js                   # Toss 라이브러리 (기본)
```

## 💡 학습자 가이드

### 강의 전 준비사항
1. Firebase 프로젝트 생성 및 Firestore 활성화
2. 환경변수 설정 (Firebase 키만)
3. 앱 실행 확인

### 강의 중 배우게 될 것
- Toss Payments SDK 사용법
- 결제 플로우 설계
- 서버 사이드 결제 승인
- 웹훅을 통한 상태 동기화
- 보안 고려사항 (HMAC 검증 등)

## 🔧 개발 명령어

```bash
npm run dev    # 개발 서버 실행
npm run build  # 프로덕션 빌드
npm run start  # 프로덕션 서버 실행
```

---

**강의 준비 완료!** 🎉 이제 Toss Payments 연동을 시작할 수 있습니다.