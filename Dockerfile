FROM node:20-alpine AS builder-two-ships
WORKDIR /app
COPY two-ships/package.json ./
RUN npm install
COPY two-ships/ ./
RUN npm run build

FROM nginx:alpine
COPY --from=builder-two-ships /app/dist /usr/share/nginx/html/two-ships
COPY KeepWhiteSpace/ /usr/share/nginx/html/keepwhitespace
COPY index.html /usr/share/nginx/html/
EXPOSE 80
