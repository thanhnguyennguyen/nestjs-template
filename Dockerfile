FROM node:18.1-alpine3.14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

RUN npm ci --force
RUN npm run build 
RUN npm prune --production --force

# ENV NODE_ENV=production
ENV PORT=8080

CMD [ "node", "build/main" ]