FROM node:6.10.1

WORKDIR /code

COPY package.json /code/package.json
RUN npm install && npm ls
COPY . /code
EXPOSE 3100
CMD ["npm","start"]



