# Домашнее задание к занятию «7.7. Cypress 2»

Любые вопросы по решению задач задавайте в чате учебной группы.

Не забывайте про важные моменты, без которых работы не будут приниматься на проверку:

- корректное оформление репозиториев;
- использование .gitignore;
- форматирование кода.

## Задача 3. Интеграционные тесты

1. Создайте новый проект с test suite (используйте `describe()`) с API-тестами для [проекта](https://petstore.swagger.io/#/).

В вашем наборе должны быть тесты для проверки:

- создания пользователя;
- правки пользователя;
- удаления пользователя.

Тесты должны быть независимыми друг от друга и выполняться в любом порядке. Рекомендуем использовать кастомные команды, так как вам придётся повторять одни и те же предусловия для разных тестов.

2. Поключите ваш проект к Dashboard. Помните, что он будет иметь уникальные идентификаторы.
3. Запустите тесты так, чтобы результаты отображались на Dashboard.
4. Настройте публичный доступ к вашему проекту и пришлите ссылку на ваш Dashboard, а также репозитарий с API тестами, как результат задания.

**Важно: не забывайте про использование принципа DRY везде, где это необходимо.**
