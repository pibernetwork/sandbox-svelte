import { describe, expect, test } from 'vitest';
import { getPaginatorPages, type Pages } from './pages';

function assertBetween(
  pages: Pages,
  expectedPage: number,
  min: number,
  max: number,
  length: number
) {
  expect(pages.length).toEqual(length);
  expect(pages[0].page).toEqual(min);
  expect(pages[length - 1].page).toEqual(max);

  expect(pages.find((page) => page.active)?.page).toEqual(expectedPage);
}

describe('Paginator Utils', () => {
  describe('1 item', () => {
    test('Paginator with 1 page', () => {
      const pages = getPaginatorPages(1, 1);

      assertBetween(pages, 1, 1, 1, 1);
    });
  });

  describe('2 items', () => {
    test('Paginator with 1 page', () => {
      const pages = getPaginatorPages(1, 2);

      assertBetween(pages, 1, 1, 2, 2);
    });
  });

  describe('10 items', () => {
    test('Get Page 1 of 10 - More than Max', () => {
      const pages = getPaginatorPages(1, 10);

      assertBetween(pages, 1, 1, 7, 7);
    });

    test('Get Page 3 of 10 - More than Max', () => {
      const pages = getPaginatorPages(3, 10);

      assertBetween(pages, 3, 1, 7, 7);
    });

    test('Get Page 4 of 10 - More than Max', () => {
      const pages = getPaginatorPages(4, 10);

      assertBetween(pages, 4, 1, 7, 7);
    });

    test('Get Page 5 of 10 - More than Max', () => {
      const pages = getPaginatorPages(5, 10);

      assertBetween(pages, 5, 2, 8, 7);
    });

    test.only('Get Page 10 of 10 - More than Max', () => {
      const pages = getPaginatorPages(10, 10);

      assertBetween(pages, 10, 4, 10, 7);
    });
  });
});
