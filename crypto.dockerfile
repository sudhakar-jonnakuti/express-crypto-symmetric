FROM node:16.20-bullseye-slim as builder
RUN mkdir -p /home/node/express-crypto/node_modules && chown -R node:node /home/node/express-crypto
WORKDIR /home/node/express-crypto

USER node
COPY package.json package.json

RUN npm install
COPY --chown=node:node . .
EXPOSE 5001
CMD [ "npm", "run", "start" ]
