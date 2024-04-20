# Build step #1: build the React front end
FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV PORT 3000
EXPOSE 3000
COPY package.json ./
COPY ./public ./public
COPY ./src ./src
RUN npm install
CMD npm start

