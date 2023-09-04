export interface Page {
  page: number;
  small: boolean;
  active: boolean;
}

export type Pages = Page[];

const SHOW_PAGES_EDGE = 3;

const SHOW_MOBILE_PAGES_EDGE = 1;

export function getPaginatorPages(
  currentPage: number,
  totalPages: number,
  showPages = SHOW_PAGES_EDGE,
  showMobilePages = SHOW_MOBILE_PAGES_EDGE
): Pages {
  if (showPages % 2 !== 1) {
    throw new Error('showPages expected odd number');
  }

  if (showMobilePages % 2 !== 1) {
    throw new Error('showMobilePages expected odd number');
  }
  const showPagesIterator = totalPages > showPages ? showPages : totalPages;
  const showMobilePagesIterator = totalPages > showMobilePages ? showMobilePages : totalPages;

  const minPage = getMinPage(totalPages, showPagesIterator, currentPage);

  const [minMobileOnly, maxMobileOnly] = getMinMaxMobilePage(
    totalPages,
    showMobilePagesIterator,
    currentPage
  );

  const numericPages = Array.from(Array(showPagesIterator), (_, index) => index + 1).map(
    (newPage) => {
      const pageNumber = minPage + newPage - 1;
      const active = pageNumber === currentPage;

      const small = active || (pageNumber >= minMobileOnly && pageNumber <= maxMobileOnly);

      return { page: pageNumber, small, active };
    }
  );

  return numericPages;
}

function getMinPage(totalPages: number, iterator: number, currentPage: number) {
  const iteratorHalf = (iterator - (iterator % 2)) / 2;

  let minPage = currentPage - iteratorHalf;
  const maxPage = currentPage + iteratorHalf;

  if (minPage <= 0) {
    minPage = 1;
  }

  if (maxPage > totalPages) {
    minPage = minPage + (totalPages - maxPage);
  }
  return minPage;
}

export function getMinMaxMobilePage(
  totalPages: number,
  showMobilePages: number,
  currentPage: number
) {
  const iteratorMobilePagesHalf = (showMobilePages - (showMobilePages % 2)) / 2 || 1;

  let minMobileOnly = currentPage - iteratorMobilePagesHalf;

  let maxMobileOnly = currentPage + iteratorMobilePagesHalf;

  if (minMobileOnly < 0) {
    const diff = minMobileOnly * -1;
    minMobileOnly = 1;
    maxMobileOnly = maxMobileOnly + minMobileOnly + diff;
  }

  if (minMobileOnly === 0) {
    minMobileOnly = 1;
    maxMobileOnly = maxMobileOnly + minMobileOnly;
  }

  if (maxMobileOnly > totalPages) {
    minMobileOnly = (maxMobileOnly - totalPages - minMobileOnly) * -1;
    maxMobileOnly = totalPages;
  }

  return [minMobileOnly, maxMobileOnly];
}
