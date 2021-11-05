FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "tsconfig.json","package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci
COPY . .
RUN chown -R node /usr/src/app
USER node
RUN npm run build
CMD ["npm", "start"]
