# Progress Block

Мини-компонент для отображения прогресса, написанный на чистом HTML, CSS и JavaScript.

## Возможности:

- **Адаптивная вёрстка:** Компонент корректно отображается на экранах разных размеров и в любой ориентации.
- **Управление через JS API:** Полностью отвязанная от вёрстки логика, позволяющая управлять состоянием виджета из любого места в коде.
- **Без зависимостей:** Написан без использования внешних библиотек и фреймворков.

### Состояния

Компонент имеет три независимых состояния, которыми можно управлять:

- **Normal (Базовое состояние):**
    - Позволяет отображать прогресс в виде дуги.
    - Начало дуги находится в положении «12 часов».
    - При увеличении параметра `Value` от 0 до 100, дуга закрашивается по часовой стрелке. При значении 100 круг полностью закрашен.

- **Animated (Анимация):**
    - Независимое состояние, при котором весь блок начинает непрерывно вращаться по часовой стрелке.
    - Может быть скомбинировано с состоянием `Normal`.

- **Hidden (Скрытие):**
    - Полностью скрывает компонент со страницы, но сохраняет за ним его место в разметке, чтобы не нарушать расположение других элементов.

## Демо

[Открыть на GitHub Pages](https://Vlad6376.github.io/progress-block/)

## Старт

Просто откройте `index.html` или загрузите проект на сервер.