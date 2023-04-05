FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx

COPY --from=builder /app/dist/hmsauth /usr/share/nginx/html/
EXPOSE 80
