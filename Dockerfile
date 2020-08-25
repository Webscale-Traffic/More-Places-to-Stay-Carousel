# What image do you want to start building on?
FROM node:8.10-alpine

# Make a folder in your image where your app's source code can live
# the -p makes all necessary parent folders automatically
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
# this command tells your container where the working directory is
# is the working
WORKDIR /src/app

# What source code do you what to copy, and where to put it?
COPY . /src/app

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3004

# How do you start your app?
CMD ["npm", "run", "start"]