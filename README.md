YouTube speed watch
===================

[![Build Status](https://travis-ci.org/naffiq/youtube-speed-watch.svg?branch=master)](https://travis-ci.org/naffiq/youtube-speed-watch)

[Демо приложения](http://youtube-speed-watch.naffiq.com/)

## Установка

Склонируйте проект и запустите `npm install` в корне.

## Тестирование

Запустите `npm test` для запуска Jest тестов

## Настройка API ключа для YouTube
Создайте приложение в консоли разработчика Google, включите YouTube API, чтобы
получить API ключ.

В корне приложения создайте файл `.env` со следующим содержимым:
```env
REACT_APP_YOUTUBE_API_KEY=ВАШ_КЛЮЧ
```


## Запуск

Команда `npm start` запускает проект для разработки, `npm run build`
для деплоя
