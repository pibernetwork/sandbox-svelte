import { expect, test } from '@playwright/test';

test('interface has expected h1', async ({ page }) => {
  await page.goto('/implementation');
  await expect(page.getByRole('heading', { name: 'Implementation - v1.0.0' })).toBeVisible();
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
const FORM_SAVE_EDIT = /Save/;

// Delete
const CONFIRM_DELETE = /Confirm delete/;
const CANCEL_DELETE = /Cancel delete/;

// Go to
const TO_FILTER = /Go to filters/;
const TO_CREATE = /Go to create/;
const TO_EDIT = /Go to edit/;
const TO_LIST = /Go to list/;
const TO_VIEW = /Go to view/;
const TO_DELETE = /Go to delete/;

// Select
const SELECT_VIEW = /Select item to view/;
const SELECT_DELETE = /Select item to delete/;

test.describe('Filters', () => {
  test('Open filters', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_FILTER }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).toBeVisible();
    await expect(page.getByRole('button', { name: FILTER_CLOSE })).toBeVisible();
  });

  test('Submit filters', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: FILTER_SAVE }).click();

    await expect(page.getByRole('button', { name: FILTER_CLOSE })).not.toBeVisible();
  });

  test('Close by Mode', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: FILTER_CLOSE }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).not.toBeVisible();
  });

  test('Close by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).not.toBeVisible();
  });

  test('Open twice by Mode', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: FILTER_CLOSE }).click();
    await page.getByRole('button', { name: TO_FILTER }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).toBeVisible();
  });

  test('Open twice by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_FILTER }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();
    await page.getByRole('button', { name: TO_FILTER }).click();

    await expect(page.getByRole('button', { name: FILTER_SAVE })).toBeVisible();
  });
});

test.describe('Create', () => {
  test('Open Create New', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_CREATE }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).toBeVisible();
    await expect(page.getByRole('button', { name: FORM_CANCEL })).toBeVisible();
  });

  test('Submit create new', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: FORM_SAVE_CREATE }).click();

    await expect(page.getByRole('button', { name: FORM_CANCEL })).not.toBeVisible();
  });

  test('Close by Cancel', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: FORM_CANCEL }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).not.toBeVisible();
  });

  test('Close by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).not.toBeVisible();
  });

  test('Open twice by Mode', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: FORM_CANCEL }).click();
    await page.getByRole('button', { name: TO_CREATE }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).toBeVisible();
  });

  test('Open twice by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: TO_CREATE }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();
    await page.getByRole('button', { name: TO_CREATE }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_CREATE })).toBeVisible();
  });

  //navigate to delete
  //navigate to edit
});

test.describe('View', () => {
  test('Open View - Select Item', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();

    await expect(page.getByRole('button', { name: TO_EDIT })).toBeVisible();
    await expect(page.getByRole('button', { name: TO_DELETE })).toBeVisible();
    await expect(page.getByRole('button', { name: TO_LIST })).toBeVisible();
  });

  test('Close by Cancel', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: TO_LIST }).click();

    await expect(page.getByRole('button', { name: TO_EDIT })).not.toBeVisible();
  });

  test('Close by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();

    await expect(page.getByRole('button', { name: TO_EDIT })).not.toBeVisible();
  });

  test('Open twice by Mode', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: TO_LIST }).click();
    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();

    await expect(page.getByRole('button', { name: TO_EDIT })).toBeVisible();
  });

  test('Open twice by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();
    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();

    await expect(page.getByRole('button', { name: TO_EDIT })).toBeVisible();
  });
});

test.describe('Delete', () => {
  test('Open Delete - Select Item', async ({ page }) => {
    await page.goto('/implementation');

    const button = await page.getByRole('button', { name: SELECT_DELETE }).nth(4);

    await button.click();

    await expect(page.getByRole('button', { name: CONFIRM_DELETE })).toBeVisible();
    await expect(page.getByRole('button', { name: CANCEL_DELETE })).toBeVisible();
  });

  test('Confirm Delete', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_DELETE }).nth(4).click();
    await page.getByRole('button', { name: CONFIRM_DELETE }).click();

    await expect(page.getByRole('button', { name: CANCEL_DELETE })).not.toBeVisible();
  });

  test('Close by Cancel', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_DELETE }).nth(4).click();
    await page.getByRole('button', { name: CANCEL_DELETE }).click();

    await expect(page.getByRole('button', { name: CONFIRM_DELETE })).not.toBeVisible();
  });

  test('Close by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_DELETE }).nth(4).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();

    await expect(page.getByRole('button', { name: CONFIRM_DELETE })).not.toBeVisible();
  });

  test('Open twice by Mode', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_DELETE }).nth(4).click();
    await page.getByRole('button', { name: CANCEL_DELETE }).click();
    await page.getByRole('button', { name: SELECT_DELETE }).nth(4).click();

    await expect(page.getByRole('button', { name: CONFIRM_DELETE })).toBeVisible();
  });

  test('Open twice by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_DELETE }).nth(4).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();
    await page.getByRole('button', { name: SELECT_DELETE }).nth(4).click();

    await expect(page.getByRole('button', { name: CONFIRM_DELETE })).toBeVisible();
  });
});

test.describe('Edit', () => {
  test('Go to Edit', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: TO_EDIT }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_EDIT })).toBeVisible();
    await expect(page.getByRole('button', { name: TO_VIEW })).toBeVisible();
    await expect(page.getByRole('button', { name: FORM_CANCEL })).toBeVisible();
  });

  test('Save Edit', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: TO_EDIT }).click();
    await page.getByRole('button', { name: FORM_SAVE_EDIT }).click();

    await expect(page.getByRole('button', { name: FORM_CANCEL })).not.toBeVisible();
  });

  test('Close by Cancel', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: TO_EDIT }).click();
    await page.getByRole('button', { name: FORM_CANCEL }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_EDIT })).not.toBeVisible();
  });

  test('Close by Native Button', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: TO_EDIT }).click();
    await page.getByRole('button', { name: MODAL_CLOSE }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_EDIT })).not.toBeVisible();
  });

  test('Go to View', async ({ page }) => {
    await page.goto('/implementation');

    await page.getByRole('button', { name: SELECT_VIEW }).nth(4).click();
    await page.getByRole('button', { name: TO_EDIT }).click();
    await page.getByRole('button', { name: TO_VIEW }).click();

    await expect(page.getByRole('button', { name: FORM_SAVE_EDIT })).not.toBeVisible();
    await expect(page.getByRole('button', { name: TO_EDIT })).toBeVisible();
  });
});
