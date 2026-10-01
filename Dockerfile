FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY . .

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app ./

ENV PORT=3000 NODE_ENV=production
EXPOSE 3000

CMD ["node", "src/server.js"]
