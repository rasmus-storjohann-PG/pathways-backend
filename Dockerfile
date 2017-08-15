FROM node

COPY . /pathways-backend
WORKDIR /pathways-backend
RUN npm install
CMD /pathways-backend/node_modules/.bin/swagger project start
