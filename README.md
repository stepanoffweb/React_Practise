# Social network
- развивающийся проект 
- основная функциональность на данный момент: 
	- валидация полей ввода на клиентской (required field, пустой ввод, максимальное количество знаков, ?тип password/email?)
 и серверной (неактуальные данные) сторонах с выводом ошибки
	- Login/LogOut вводом email/password 
	- незареганному юзеру (проверка кукисов) доступен только раздел Users, остальные редиректят на логин
	- в разделе Users
		- доступны зареганные в БД пользователи сети (аватар, общие данные)
	    - навигация по базе посредством пагинации порциями по 10 страниц с 20 юзерами на каждой
		- кнопка follow/unfollow меняет состояние подписки на соответствующего юзера в БД сервера
        - по клику на аватарку переход на профиль соответствующего юзера с его постами  (пока - фейковыми)
	- в разделе Profile авторизованный юзер может поменять свои фото, статус (даблклик - текстовый ввод - расфокус),
 другие данные профиля
	- в разделе Messages добавлять фейковые сообщения (хранятся в state текущей сессии)
- TODO:
	- оформление (стилизация) приложения
	- разделы News/Music/Settings
	- дополнение базового функционала плюшками (выбор количества юзеров на странице, кол-ва страниц в пагинации,...)
 
## How does it work:
  - clone/download the repo branch </br>
  - go into /weather_finder
  - `npm install`</br>
  - `npm start`</br>
