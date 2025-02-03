# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json из текущей директории
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем глобально serve для сервирования приложения
RUN npm install -g serve

# Копируем весь проект в контейнер
COPY . .

# Строим проект
RUN npm run build

# Указываем порт для контейнера
EXPOSE 3000

# Запускаем сервер с использованием serve
CMD ["serve", "-s", "build"]
