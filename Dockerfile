# Dockerfile
# Use the official Apify Node.js base image
FROM apify/actor-node:20

# Copy all files from the current directory to the /src directory in the container
COPY . /src

# Install dependencies specified in package.json (if you had one)
# Since this is a very minimal example without external npm dependencies,
# this command might not do much, but it's good practice to include.
RUN npm install --omit=dev

# Run the Actor
CMD npm start
