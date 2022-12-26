FROM node:16-slim

WORKDIR /src

#NPM
#COPY package.json package-lock.json /src/
COPY package.json yarn.lock /src/

#NPM
#RUN npm ci --silent
RUN yarn  --frozen-lockfile


COPY . .

CMD yarn start