FROM node:alpine as builder
COPY package.json .
COPY ./ ./
RUN npm install
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /build /usr/share/nginx/html