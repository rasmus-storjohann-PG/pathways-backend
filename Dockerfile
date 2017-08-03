FROM node

COPY . /pathways-backend
WORKDIR /pathways-backend
RUN npm install
