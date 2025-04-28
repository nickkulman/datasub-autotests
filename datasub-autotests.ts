import { test, expect } from '@playwright/test';

test('Подтверждение успешной отправки формы "Request A Quote"', async ({ page }) => {
  await page.goto('https://qatest.datasub.com/');

  await page.fill('#name', 'Дмитрий Борисов');
  await page.fill('#email', 'd.borisov@example.com');
  await page.selectOption('#service', 'B Service');
  await page.fill('#message', 'Тестовое соообщение');

  await page.getByRole('button', { name: 'Request A Quote' }).click();


  // Проверка появления сообщения об успешной отправке
  await expect(page.locator('#formStatus')).toHaveText('Форма отправлена.');
});

test('Отправка формы "Request A Quote" с невалидным именем', async ({ page }) => {
  await page.goto('https://qatest.datasub.com/');

  await page.fill('#name', '123'); // Невалидное имя
  await page.fill('#email', 'd.borisov@example.com');
  await page.selectOption('#service', 'C Service');
  await page.fill('#message', 'Тестовое соообщение');

  await page.getByRole('button', { name: 'Request A Quote' }).click();

  // Проверка появления класса is-invalid у поля name
  await expect(page.locator('#name.is-invalid')).toBeVisible();
});
