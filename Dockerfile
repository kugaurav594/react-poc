# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory 
#TODO Need to verify this
WORKDIR /src

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json ./
COPY package-lock.json ./
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build
# RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
# CMD ["yarn", "start"]
