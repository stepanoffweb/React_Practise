# React_Practise
Приложения с законченным функционалом различной сложности на ReactJS.
  - e_ - elementary
  - s_ - symple
  - c_ - complex
# App directories (каждое приложение - в своей git branch)
## _useReducer
- создаем простое 'todo' где в App находятся и useState, и reducer со вспомогательными обработчиками конкретных кейсов
## s_getviewport_width
Получаем на хуках (useState/useEffect) размеры viewport при ресайзе с использованием lodash throttle для таймаута проверки события - экономия ресурсов
## s_styled_components
Creating a console UI to browser: styling Components set (Header, textarea, Button,...) with animation, ThemeProvider, media requests, 'styled-components'library.
## Neighbourhood Map (neighbourhood-map branch)
Learned from [Github repo](https://www.youtube.com/redirect?v=nDJ00zO9X2U&event=video_description&redir_token=bVU8gcsJVc0rbt5J8c2t6GxlyCJ8MTU2MDU4MjQzOEAxNTYwNDk2MDM4&q=https%3A%2F%2Fgithub.com%2Felharony%2FUdacity-P8-Neighborhood-Map-Project-Explained)</br>
Used Google Maps API + FourSquare API:
* Add Google Maps to React App without external components
* Get venues from ForeSquare in React usin axios
* Adding dinamic Markers to Google Maps
* Display an InfoWindow when clicking on a Marker
## WeatherFinder (weather branch)
Актуальная сводка погоды по клику. Необходимо ввести либо географические координаты места, либо страну (US/UK) и zipcode|postcode
* Работа с API
* Операции с DOM
## Flashcard Quiz (flashcards branch)
Получение данных с сервера для формирования и последовательного вывода опросных страниц в браузере. Сбор ответов и отправка их на сервер.
* Работа с API (Firebase DB)
* Работа с хуками (useRef, useEffect, useState)
* Grid-позиционирование
* Вывод полученнного с сервера текста в читабельной форме ( без &gt;&lt; ...)
## Interactive map with markers from JSON data (map_gl branch)
* Работа с Mapbox + react-map-gl
* Работа с хуками (useEffect, useState)
## Currency Converter (currency_converter branch)
Автоматический расчет конвертации по валютным парам при введении исходной суммы в одно из полей и выборе базовой и выходной валют по актуальным на момент расчета данным European Central Bank.
* Работа с API (http://exchangeratesapi.io/)
* Работа с хуками (useEffect, useState)
## Social Network (soc-net branch)
* Развивающийся проект социальной сети с базовым функционалом и кастомной стилизацией 