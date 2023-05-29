FROM node:18-alpine

WORKDIR /app/

COPY ./app/package*.json ./
RUN npm i --no-audit --progress=false

COPY ./app/ ./
RUN npm run build

CMD ["node", "./dist/main.js"]
