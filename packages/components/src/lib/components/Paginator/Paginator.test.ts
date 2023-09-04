import { fireEvent, render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Paginator from './Paginator.svelte';

describe('Paginator', () => {
  test('Render paginator', async () => {
    // setup

    const { getByTestId } = render(Paginator, {
      props: {
        page: 5,
        currentPage: 5,
        prevPage: 4,
        nextPage: 6,
        hasNextPage: true,
        hasPrevPage: true,
        start: 41,
        end: 50,
        totalNodes: 100,
        totalPages: 10
      }
    });

    expect(getByTestId('prev-all')).toBeDefined();
    expect(getByTestId('page-5')).toBeDefined();
    expect(getByTestId('next-all')).toBeDefined();

    const prevAll = getByTestId('prev-all');

    await fireEvent.click(prevAll);
  });
});
