
FROM node:18-alpine

# bind your app to the gateway IP
ENV HOST=0.0.0.0

WORKDIR /usr/src/app
RUN yarn global add turbo

COPY package.json ./
COPY package-lock.json ./

COPY apps/workshop/package.json ./apps/workshop/package.json
COPY apps/Eldplat_Admin/package.json ./apps/Eldplat_Admin/package.json
COPY apps/Eldplat_Client/package.json ./apps/Eldplat_Client/package.json
COPY packages/baseui/package.json ./packages/baseui/package.json

RUN npm install

COPY . .

EXPOSE 6006
EXPOSE 3000
EXPOSE 3001

CMD ["turbo", "run", "dev"]