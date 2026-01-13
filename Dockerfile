# 1. 빌드 단계 (맥북/GitHub Actions의 고성능 CPU 사용)
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. 실행 단계 (파이 3B용 32비트 이미지 생성)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# 필요한 파일만 복사 (용량 최소화)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
