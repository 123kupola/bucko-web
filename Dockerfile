# syntax=docker/dockerfile:1

# 1. Base stage with dependencies
FROM node:20-bookworm AS base

WORKDIR /app

# Install system dependencies for building
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package*.json ./
RUN npm install

# 2. Build stage (for production builds)
FROM base AS build
COPY . .
RUN npm run build

# 3. Production stage
FROM node:20-bookworm AS production

WORKDIR /app

# Copy built assets from the build stage
COPY --from=build /app/dist /app/dist
COPY package.json ./

EXPOSE 4321

CMD ["npm", "run", "preview"]

# 4. Development stage (for hot reload)
FROM base AS development

WORKDIR /app

# Copy source code (dependencies already installed in base stage)
COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]
