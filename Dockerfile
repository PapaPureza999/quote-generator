FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
# use npm install so it works even without a lockfile
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=10000

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 10000
CMD ["npm","run","start"]
