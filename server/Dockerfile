# # 1. Use an official Node.js runtime as a parent image (choose a version)
# FROM node:20-alpine AS base

# # 2. Set the working directory in the container
# WORKDIR /app

# # 3. Copy package.json and package-lock.json first for dependency caching
# COPY package*.json ./

# # === Dependencies Stage ===
# FROM base AS deps
# # Install production dependencies only
# RUN npm install --omit=dev

# # === Build Stage (for Prisma) ===
# FROM base AS builder
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# # Generate Prisma Client based on schema (crucial step!)
# RUN npx prisma generate

# # === Production Stage ===
# FROM base AS runner
# WORKDIR /app
# # Copy necessary files from previous stages
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/prisma ./prisma
# COPY --from=builder /app/index.js ./index.js
# # Copy migrations if needed for runtime checks, though deploy is better
# COPY --from=builder /app/prisma/migrations ./prisma/migrations

# # Expose the port the app runs on
# EXPOSE 5001

# # Define the command to run your app
# CMD ["node", "index.js"]

# 1. Use an official Node.js runtime as a parent image (choose a version)
FROM node:20-alpine AS base

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json first for dependency caching
COPY package*.json ./

# === Dependencies Stage ===
FROM base AS deps
# Install production dependencies only
RUN npm install --omit=dev

# === Build Stage (for Prisma) ===
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Generate Prisma Client based on schema (crucial step!)
RUN npx prisma generate

# === Production Stage ===
FROM base AS runner
WORKDIR /app
# Copy necessary files from previous stages
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/index.js ./index.js
# Copy migrations if needed for runtime checks, though deploy is better
COPY --from=builder /app/prisma/migrations ./prisma/migrations

# Expose the port the app runs on
EXPOSE 5001

# Define the command to run your app
CMD ["node", "index.js"]