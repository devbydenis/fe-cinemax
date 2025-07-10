# Stage 1
# pake image node:18-alpine sebagai base image karena lebih enteng + cepet
FROM node:lts-alpine AS react-build

# definisiin working directory di path /usr/src/app
WORKDIR /usr/src/app

# copy file package.json ke dalem container
COPY package*.json ./

# install dependencies
RUN npm install

# salin semua file ke dalam container
COPY . .

# Define build arguments untuk environment variables
ARG VITE_API_KEY
ARG VITE_BASE_URL
ARG VITE_BASE_URL_IMG

# Set environment variables untuk build process
ENV VITE_API_KEY=$VITE_API_KEY
ENV VITE_BASE_URL=$VITE_BASE_URL
ENV VITE_BASE_URL_IMG=$VITE_BASE_URL_IMG

# build aplikasi
RUN npm run build


# Stage 2
# gunakan image nginx:stable-alpine sebagai base image karena lebih ringan
FROM nginx:stable-alpine

# Add label to indicate this is for frontend build (helps with security scanning)
LABEL purpose="frontend-build"
LABEL note="API keys are embedded in frontend bundle and are not secret"

# salin hasil building dari stage 1 ke nginx
COPY --from=react-build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
