FROM node:18.18.0

COPY . /app/
WORKDIR /app

RUN npm install

EXPOSE 3000
CMD npm run start