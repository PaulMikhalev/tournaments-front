FROM node:20-alpine

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Expose Nuxt dev port
EXPOSE 3000

# Default command (overridden by docker-compose to run in dev mode as well)
CMD ["npm", "run", "dev"]


