FROM node:9
LABEL Maintainer="Angel M <@_angelmm>"

# Base folder
WORKDIR /app

# Dependencies
COPY package.json yarn.lock /app/
RUN yarn install

# Port
EXPOSE 3000

# Default command
CMD ["yarn", "start"]