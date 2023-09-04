export interface Page {
  page: number;
  small: boolean;
  active: boolean;
}

export type Pages = Page[];

const SHOW_PAGES = 7;
const MOBILE_EDGE = 2;

export function getPaginatorPages(
  currentPage: number,
  totalPages: number,
  displayPages = SHOW_PAGES,
  displayMobilePages = MOBILE_EDGE
): Pages {
  const iterator = totalPages > displayPages ? displayPages : totalPages;

  const minPage = getMinPage(totalPages, iterator, currentPage);

  const [minMobileOnly, maxMobileOnly] = getMinMaxMobilePage(
    totalPages,
    displayMobilePages,
    currentPage
  );

  const numericPages = Array.from(Array(iterator), (_, index) => index + 1).map((newPage) => {
    const pageNumber = minPage + newPage - 1;
    const active = pageNumber === currentPage;

    const small = active || (pageNumber >= minMobileOnly && pageNumber <= maxMobileOnly);

    return { page: pageNumber, small, active };
  });

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
  displayMobilePages: number,
  currentPage: number
) {
  let minMobileOnly = currentPage - displayMobilePages;

  let maxMobileOnly = currentPage + displayMobilePages;

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
