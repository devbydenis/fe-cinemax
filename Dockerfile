# Stage 1
# pake image node:18-alpine sebagai base image karena lebih enteng + cepet
FROM node:lts-alpine AS react-build

# definisiin working directory di path /usr/src/app
WORKDIR /usr/src/app

# copy file package.json ke dalem container
COPY package\*.json ./

# install dependencies
RUN npm install

# salin semua file ke dalam container
COPY . .

# build aplikasi
RUN npm run build


# Stage 2
# gunakan image nginx:stable-alpine sebagai base image karena lebih ringan
FROM nginx:stable-alpine

# salin hasil building dari stage 1 ke nginx
COPY --from=react-build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
