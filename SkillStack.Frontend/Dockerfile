FROM node:20.9.0 AS development
WORKDIR /app

RUN npm install -g @angular/cli@17.3.7

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]