FROM node:latest

WORKDIR /blog

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 3000 
RUN npm run build
CMD npm run dev