FROM node:18

# where the image is built from,  run, copy etc built out of working dir
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# first dot relative to the build context, the destiniton is relative to the WORKDIR
COPY . . 

RUN npm run build

EXPOSE 3000

CMD ["npm","run", "start"]



