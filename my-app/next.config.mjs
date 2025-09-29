import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ESM 환경에서 __dirname 대체
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Next.js가 잘못된 워크스페이스 루트를 추론하는 경고를 방지
        // 현재 앱 디렉터리를 루트로 고정
        outputFileTracingRoot: path.join(__dirname),
    },
};

export default nextConfig;
