# datasub-autotests
Автоматизированные тесты для формы "Request A Quote" на сайте https://qatest.datasub.com/, написанные с использованием Playwright и TypeScript.  
Эти тесты:  
Проверяют успешную отправку формы (Happy Path)  
Проверяют валидацию ошибок при неверном заполнении формы (Negative Case).

Установка проекта
Склонируйте репозиторий к себе на компьютер:
git clone https://github.com/nickkulman/datasub-autotests.git

Перейдите в папку проекта:
cd datasub-autotests

Установите все зависимости:
npm install
(установка Playwright и всех необходимых библиотек)

Как запускать тесты:
1. Обычный запуск всех тестов:
npx playwright test

2. Запуск с открытием браузера (режим наблюдения):
npx playwright test --headed

3. Запуск только одного файла
npx playwright test datasub-autotests.ts

4. Генерация HTML-отчёта после тестов:
npx playwright show-report
(чтобы получить наглядный отчёт после прогонки тестов)

Тесты используют Playwright — современный фреймворк для тестирования UI в браузерах (Chrome, Firefox, Safari).
Тесты написаны на TypeScript для удобной типизации и предсказуемости кода.
При успешной отправке формы проверяется появление сообщения "Форма отправлена."
При ошибках валидации проверяется наличие класса .is-invalid у соответствующих полей.



