import { expect, test } from '@playwright/test';

test('interface has expected h1', async ({ page }) => {
  await page.goto('/interface');
  await expect(page.getByRole('heading', { name: 'Interface - v1.0.0' })).toBeVisible();
});

// Modal
const MODAL_CLOSE = /Close modal/;

// Filter Modal
const FILTER_CLOSE = /Close filters/;
const FILTER_SAVE = /Save filters/;

// Create Modal
const FORM_CANCEL = /Cancel/;

// Create Modal - Create
const FORM_SAVE_CREATE = /Create/;

// Create Modal - edit
// const FORM_SAVE_EDIT = /Save/;

// Go to
const TO_FILTER = /Go to filters/;
const TO_CREATE = /Go to create/;
// const TO_EDIT = /Go to edit/;
// const TO_VIEW = /Go to view/;
// const TO_DELETE = /Go to delete/;
// const TO_LIST = /Go to delete/;

test.describe('Filters', () => {
  test('Open filters', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_FILTER }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).toBeVisible();
    await expect(page.getByRole('button', { name: FILTER_CLOSE })).toBeVisible();
  });

  test('Submit filters', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: FILTER_SAVE }).click();

    await expect(page.getByRole('button', { name: FILTER_CLOSE })).not.toBeVisible();
  });

  test('Close by Mode', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: FILTER_CLOSE }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).not.toBeVisible();
  });

  test('Close by Native Button', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).not.toBeVisible();
  });

  test('Open twice by Mode', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: FILTER_CLOSE }).click();
    await page.getByRole('button', { name: TO_FILTER }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).toBeVisible();
  });

  test('Open twice by Native Button', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();
    await page.getByRole('button', { name: TO_FILTER }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).toBeVisible();
  });

  // test('Cancel filters', async ({ page }) => {
  //   await page.goto('/interface');
  //   await expect(page.getByRole('heading', { name: 'Interface - v1.0.0' })).toBeVisible();
  // });
});

test.describe('Create', () => {
  test('Open Create New', async ({ page }) => {
    await page.goto('/interface');

    const button = page.getByRole('button', { name: TO_CREATE });

    await button.click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).toBeVisible();
    await expect(page.getByRole('button', { name: FORM_CANCEL })).toBeVisible();
  });

  test('Submit create new', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: FORM_SAVE_CREATE }).click();

    await expect(page.getByRole('button', { name: FORM_CANCEL })).not.toBeVisible();
  });

  test('Close by Mode', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: FORM_CANCEL }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).not.toBeVisible();
  });

  test('Close by Native Button', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).not.toBeVisible();
  });

  test('Open twice by Mode', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: FORM_CANCEL }).click();
    await page.getByRole('button', { name: TO_CREATE }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).toBeVisible();
  });

  test('Open twice by Native Button', async ({ page }) => {
    await page.goto('/interface');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();
    await page.getByRole('button', { name: TO_CREATE }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).toBeVisible();
  });
});
