# Use the official Node.js LTS image
FROM node:18

# Set the working directory inside the container to front-end
WORKDIR /app/front-end

# Copy package.json and package-lock.json
COPY front-end/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the front-end application code
COPY front-end/ .

# Expose port 5173 (default for Vite development server)
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]
