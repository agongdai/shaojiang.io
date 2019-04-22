# boilerplate dockerfile
# centos, nginx, nodejs
# @author Shaojiang Cai caishaojiang@gmail.com
# @date 14/12/2017

FROM joycoding/centos-nginx-nodejs

# Create app directory
RUN mkdir -p /usr/src/shaojiang.io
WORKDIR /usr/src/shaojiang.io

# Install app dependencies
COPY package.json /usr/src/shaojiang.io/
# RUN npm install

# Bundle app source
COPY . /usr/src/shaojiang.io
RUN npm run build

# Softlink the nginx configuration file
RUN ln -s /usr/src/shaojiang.io/scripts/Docker.nginx.conf /etc/nginx/conf.d/shaojiang.io.conf
RUN ln -s /usr/src/shaojiang.io/scripts/nginx.gzip.conf /etc/nginx/conf.d/gzip.conf

EXPOSE 3000
# Run this script when starting a new docker container
CMD ["sh", "scripts/deploy.sh"]
