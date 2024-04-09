# Use an official lightweight Node.js image.
FROM node:alpine

# Install http-server to serve static content
RUN npm install -g http-server

# Set the working directory
WORKDIR /Users/michellefajardo/tester-24

# Copy the web application's assets to the container
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run http-server
CMD [ "http-server", ".", "-p 8080" ]
