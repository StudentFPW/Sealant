# _Реальный кейс от компании «Силант»_

Задача разработать электронную сервисную книжку для складской техники «Силант».

## О сервисе, который нужно реализовать

- [ООО "Чебоксарский завод силовых агрегатов"](https://chzsa.ru/)

> Те, кто покупает погрузчики, должны их обслуживать. У всех деталей есть свой срок службы, и их важно вовремя менять. Если не заменить деталь вовремя, погрузчик может сломаться и предприятие, которое его использует, частично остановится и будет терять деньги.

> Сервис, в котором можно было бы отслеживать состояние каждой купленной машины и всех её комплектующих. Так любой, кто купил погрузчик «Силант» может войти на сайт под своим профилем, и понять, каким машинам в скором времени нужно обслуживание.

> Добавить возможность отслеживать, как идёт обслуживание техники. Так можно понять, когда очередной погрузчик выйдет из сервиса и вернётся в строй.

### Требования к сервису

Сервис должен хранить следующие данные о складской технике «Силант»:

- комплектация погрузчика;
- место использования;
- истории обслуживания, поломок и ремонта.

В сервисе должна быть реализована авторизация, в том числе различные роли: гость, клиент, сервисная организация и менеджер. У каждой роли должен быть настроен свой уровень доступа к просмотру и редактированию данных.

### Кто будет пользоваться сервисом

Целевая аудитория сервиса — это все, кто имеют отношение к работе с погрузчиками.

А именно:

- эксплуатанты техники: те, кто покупают технику;
- сервисные организации: те, кто её чинят;
- представители производителя техники: те, кто производят технику, то есть сами ЧЗСА.

Для каждого типа пользователей нужно будет реализовать свои функции и свой интерфейс взаимодействия.

### Жизненный цикл машины

Цикл начинается при выпуске новой машины (однократное заполнение данных с техническими характеристиками машины) и проходит с указанием неограниченного количества данных о ТО и рекламациях по технике в процессе её эксплуатации

### Функционал сервиса

Сервис имеет разный функционал для пользователей с разными ролями. Ключевой функционал: выдача в виде таблицы информации  ["из базы данных о машинах"](https://lms-cdn.skillfactory.ru/assets/courseware/v1/9b5dadab0245a0d967cf5cdb819ecdda/asset-v1:SkillFactory+FPW-2.0+27AUG2020+type@asset+block/%D0%9C%D0%BE%D0%B9_%D0%A1%D0%B8%D0%BB%D0%B0%D0%BD%D1%82_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B4%D0%BB%D1%8F_%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B0_output.zip) (технические характеристики, ТО, рекламации и пр.).

Сервис должен отображать в табличной форме данные из БД в зависимости от уровня прав доступа пользователей.

Сортировка данных в Таблицах по умолчанию должна проводиться по полям:

- «дата отгрузки с завода» для таблицы «машина»;
- «дата проведения ТО» для таблицы «ТО»;
- «дата отказа« для таблицы «рекламации».

В таблицах должна быть предусмотрена функция фильтрации по следующим полям:

- модель техники;
- модель двигателя;
- модель трансмиссии;
- модель управляемого моста;
- модель ведущего моста для таблицы «Машина»;
- вид ТО;
- зав.номер машины;
- сервисная компания для таблицы «ТО»;
- узел отказа;
- способ восстановления;
- сервисная компания для таблицы «Рекламация».

Строки в таблице должны быть кликабельны и вести на страницу с отображением полных данных, включая поле «описание» сущностей, которые задаются в справочниках.

Авторизация должна проводиться по логину/паролю, которые назначаются администратором системы. Пользователь не может самостоятельно поменять логин и/или пароль.

На сайте запретите пользователям регистрацию. Для этого в пакете allauth переопределите метод is_open_for_signup, он должен возвращать False. Подробнее в ["документации"](https://docs.allauth.org/en/latest/socialaccount/advanced.html) на docs.allauth.org. Администратор может создавать пользователя в админ панели.

Пользователь без авторизации может получить ограниченную информацию о комплектации машины, введя её заводской номер. Данному типу пользователя доступно поле для ввода заводского номера машины и кнопка поиск.

Результат поиска: таблица с данными по определённой машине со следующими полями: таблица «Машина» (поля 1–10). Если данные по заводскому номеру не найдены, то выдается сообщение, что данных о машине с таким заводским номером нет в системе.

Авторизованные пользователи имеют разный доступ к данным, получают таблицы с данными обо всех доступных им машинах.

Данные располагаются на нескольких вкладках (согласно таблицам «Машина», «ТО», «Рекламации»):

- технические данные;
- ТО;
- рекламации.

Возможность внесения изменений для пользователей с разными ролями должна быть реализована согласно таблице в юните «Роли, которые нужно реализовать в сервисе».

### Макет приветственной страницы

Макет приветственной страницы доступен для всех пользователей без авторизации.

### Макет основной внутренней страницы

Макет основной внутренней страницы доступен для авторизованных пользователей. Пользователю доступна для просмотра (в том числе редактирования) таблица с данными в зависимости от его прав доступа.

### Требования к верстке

Верстка должна быть:

- резиновой (тянущейся);
- адаптивной — основные разрешения экранов: 1920x1080, 1366x768, 1536x864, 1440x900, 360x640;
- кроссбраузерной — работать в наиболее распространённых браузерах (Google Chrome и Safari) последних версий.

### Интерфейс

Интерфейс сервиса должен быть реализован с применением ключевых элементов фирменного стиля бренда «Силант»:

- Цвета: #163E6C, #D20A11, #EBE6D6.
- Шрифт: ["PT Astra Sans"](https://lms-cdn.skillfactory.ru/assets/courseware/v1/aecc5e5356f023712efba9621c3a46af/asset-v1:SkillFactory+FPW-2.0+27AUG2020+type@asset+block/PT_Astra_Sans.zip).

### Задания со звездочкой

- Реализуйте возможность получения данных (данные, соответствующие таблицам «Машина», «ТО», «Рекламации») из системы в формате json по RESTful API, с описанием API.

- Используйте в интерфейсе элементы фирменного стиля бренда «Силант» ["(ссылка на материалы)"](https://lms-cdn.skillfactory.ru/assets/courseware/v1/f13c13afef00126bf64381fa7bff1eff/asset-v1:SkillFactory+FPW-2.0+27AUG2020+type@asset+block/%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81__%D0%9C%D0%BE%D0%B9_%D0%A1%D0%B8%D0%BB%D0%B0%D0%BD%D1%82_.zip).
