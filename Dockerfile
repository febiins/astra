# Step 1: Build using Node
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 🔥 Copy both public and src folders
COPY public ./public
COPY src ./src
COPY index.html .

# 🔥 Now run the build (Vite copies public → dist automatically)
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine

# Clean default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
