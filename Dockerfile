FROM node:16-alpine3.16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx","-g","daemon off;"]