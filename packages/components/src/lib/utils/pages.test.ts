import { describe, expect, test } from 'vitest';
import { getMinMaxMobilePage, getPaginatorPages, type Pages } from './pages';

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

function assertSmall(pages: Pages, expectedPage: number) {
  expect(pages.find((page) => page.page === expectedPage)?.small).toEqual(true);
}

describe('Paginator Utils', () => {
  describe('1 item', () => {
    test('Paginator with 1 page', () => {
      const pages = getPaginatorPages(1, 1, 7, 1);

      assertBetween(pages, 1, 1, 1, 1);
      assertSmall(pages, 1);
    });
  });

  describe('2 items', () => {
    test('Paginator with 1 page', () => {
      const pages = getPaginatorPages(1, 2, 7, 1);

      assertBetween(pages, 1, 1, 2, 2);
      assertSmall(pages, 1);
      assertSmall(pages, 2);
    });
  });

  describe('5 items', () => {
    test('Get Page 1 of 5 - More than Max', () => {
      const pages = getPaginatorPages(1, 5, 7, 1);

      assertBetween(pages, 1, 1, 5, 5);
    });

    test('Get Page 3 of 5 - More than Max', () => {
      const pages = getPaginatorPages(3, 5, 7, 1);

      assertBetween(pages, 3, 1, 5, 5);
    });

    test('Get Page 4 of 5 - More than Max', () => {
      const pages = getPaginatorPages(4, 5, 7, 1);

      assertBetween(pages, 4, 1, 5, 5);
    });

    test('Get Page 5 of 5 - More than Max', () => {
      const pages = getPaginatorPages(5, 5, 7, 1);

      assertBetween(pages, 5, 1, 5, 5);
    });
  });

  describe('10 items', () => {
    test('Get Page 1 of 10 - More than Max', () => {
      const pages = getPaginatorPages(1, 10, 7, 1);

      assertBetween(pages, 1, 1, 7, 7);
      assertSmall(pages, 1);
      assertSmall(pages, 2);
      assertSmall(pages, 3);
    });

    test('Get Page 3 of 10 - More than Max', () => {
      const pages = getPaginatorPages(3, 10, 7, 1);

      assertBetween(pages, 3, 1, 7, 7);
    });

    test('Get Page 4 of 10 - More than Max', () => {
      const pages = getPaginatorPages(4, 10, 7, 1);

      assertBetween(pages, 4, 1, 7, 7);
      assertSmall(pages, 3);
      assertSmall(pages, 4);
      assertSmall(pages, 5);
    });

    test('Get Page 5 of 10 - More than Max', () => {
      const pages = getPaginatorPages(5, 10, 7, 1);

      assertBetween(pages, 5, 2, 8, 7);
    });

    test('Get Page 10 of 10 - More than Max', () => {
      const pages = getPaginatorPages(10, 10, 7, 1);

      assertBetween(pages, 10, 4, 10, 7);
      assertSmall(pages, 8);
      assertSmall(pages, 9);
      assertSmall(pages, 10);
    });
  });

  describe('11 items', () => {
    test('Get Page 1 of 11 - More than Max', () => {
      const pages = getPaginatorPages(1, 11, 7, 1);

      assertBetween(pages, 1, 1, 7, 7);
    });

    test('Get Page 3 of 11 - More than Max', () => {
      const pages = getPaginatorPages(3, 11, 7, 1);

      assertBetween(pages, 3, 1, 7, 7);
    });

    test('Get Page 4 of 11 - More than Max', () => {
      const pages = getPaginatorPages(4, 11, 7, 1);

      assertBetween(pages, 4, 1, 7, 7);
    });

    test('Get Page 5 of 11 - More than Max', () => {
      const pages = getPaginatorPages(5, 11, 7, 1);

      assertBetween(pages, 5, 2, 8, 7);
    });

    test('Get Page 10 of 11 - More than Max', () => {
      const pages = getPaginatorPages(11, 11, 7, 1);

      assertBetween(pages, 11, 5, 11, 7);
    });
  });

  describe('More items mobile', () => {
    test('1 - 3', () => {
      const pages = getPaginatorPages(1, 11, 7, 1);

      assertBetween(pages, 1, 1, 7, 7);
      expect(pages.find((page) => page.page === 1)?.small).toEqual(true);
      expect(pages.find((page) => page.page === 2)?.small).toEqual(true);
      expect(pages.find((page) => page.page === 3)?.small).toEqual(true);
      expect(pages.find((page) => page.page === 4)?.small).toEqual(false);
    });
  });
});

describe('Min and Max Mobile - 1', () => {
  test('1', () => {
    const [min, max] = getMinMaxMobilePage(10, 1, 1);

    expect(min).toEqual(1);
    expect(max).toEqual(3);
  });

  test('2', () => {
    const [min, max] = getMinMaxMobilePage(10, 1, 2);

    expect(min).toEqual(1);
    expect(max).toEqual(3);
  });

  test('3', () => {
    const [min, max] = getMinMaxMobilePage(10, 1, 3);

    expect(min).toEqual(2);
    expect(max).toEqual(4);
  });

  test('10', () => {
    const [min, max] = getMinMaxMobilePage(10, 1, 10);

    expect(min).toEqual(8);
    expect(max).toEqual(10);
  });
});

describe('Min and Max Mobile - 2', () => {
  test('1', () => {
    const [min, max] = getMinMaxMobilePage(10, 2, 1);

    expect(min).toEqual(1);
    expect(max).toEqual(5);
  });

  test('2', () => {
    const [min, max] = getMinMaxMobilePage(10, 2, 2);

    expect(min).toEqual(1);
    expect(max).toEqual(5);
  });

  test('3', () => {
    const [min, max] = getMinMaxMobilePage(10, 2, 3);

    expect(min).toEqual(1);
    expect(max).toEqual(5);
  });

  test('4', () => {
    const [min, max] = getMinMaxMobilePage(10, 2, 4);

    expect(min).toEqual(2);
    expect(max).toEqual(6);
  });

  test('7', () => {
    const [min, max] = getMinMaxMobilePage(10, 2, 7);

    expect(min).toEqual(5);
    expect(max).toEqual(9);
  });

  test('10', () => {
    const [min, max] = getMinMaxMobilePage(10, 2, 10);

    expect(min).toEqual(6);
    expect(max).toEqual(10);
  });
});
