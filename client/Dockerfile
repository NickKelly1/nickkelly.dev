FROM node:14

WORKDIR /usr/src/app

# # Install app dependencies
# # Get both package.json & package-lock.json
COPY package*.json ./

# Install deps
RUN npm install

# Copy source
COPY . .

# Build in container
RUN npm run build

EXPOSE 3000

CMD npm run start
