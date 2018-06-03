FROM node:latest

RUN apt-get update

# set workspace.
ENV WORKSPACE /blueprint/
RUN mkdir $WORKSPACE -p
WORKDIR $WORKSPACE

RUN npm config set unsafe-perm true

# install glup.
RUN npm init -y
RUN npm install gulp-cli -g
RUN npm install gulp -D
RUN npm install gulp-watch gulp-aglio gulp-plumber
RUN mkdir docs public
COPY gulpfile.js gulpfile.js

# set node user.
RUN groupmod -g 1000 node && usermod -u 1000 -g 1000 node
USER node

# command.
CMD gulp watch

