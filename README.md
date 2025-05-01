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

Установите необходимые браузеры для Playwright:
npx playwright install

Запуск тестов:
npx playwright test datasub-autotests.ts

Запуск в headed режиме (в браузере с интерфейсом, режим наблюдения):
npx playwright test datasub-autotests.ts --headed

Тесты используют Playwright — современный фреймворк для тестирования UI в браузерах (Chrome, Firefox, Safari).
Тесты написаны на TypeScript для удобной типизации и предсказуемости кода.
При успешной отправке формы проверяется появление сообщения "Форма отправлена."
При ошибках валидации проверяется наличие класса .is-invalid у соответствующих полей.
