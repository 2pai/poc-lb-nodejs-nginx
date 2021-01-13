FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Exports
CMD [ "npm", "run", "start.dev" ]
