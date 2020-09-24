# declare node version
FROM node:14

# create app directory working
WORKDIR /docker-base-be

# copy file package.json
COPY package*.json ./

RUN npm install -g nodemon

# install dependencies
RUN npm install

# bundle app source
COPY . .

# configure ENV

# dockerized will run on port PORT
EXPOSE $PORT

# run to start server
CMD ["npm", "run", "dev"]







