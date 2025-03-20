FROM node:14
WORKDIR /usr/src/6513118
COPY package*.json ./
COPY app.js ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]