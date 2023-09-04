const SHOW_PAGES = 7;
const MOBILE_EDGE = 1;

export interface Page {
  page: number;
  small: boolean;
  active: boolean;
}

export type Pages = Page[];

export function getPaginatorPages(
  currentPage: number,
  totalPages: number,
  showPages = SHOW_PAGES,
  mobileOnly = MOBILE_EDGE
): Pages {
  const iterator = totalPages > showPages ? showPages : totalPages;

  const iteratorHalf = (iterator - (iterator % 2)) / 2;

  let minPage = currentPage - iteratorHalf;
  let maxPage = currentPage + iteratorHalf;

  if (minPage <= 0) {
    minPage = 1;
  }

  if (maxPage > totalPages) {
    minPage = minPage + (totalPages - maxPage);
  }

  if (minPage <= 0) {
    maxPage = maxPage + minPage * -1;
  }

  let minMobileOnly = currentPage - MOBILE_EDGE;

  let maxMobileOnly = currentPage + MOBILE_EDGE;

  if (minMobileOnly <= 0) {
    minMobileOnly = 1;
    maxMobileOnly = maxMobileOnly + minMobileOnly;
  }

  if (maxMobileOnly > totalPages) {
    minMobileOnly = (maxMobileOnly - totalPages - minMobileOnly) * -1;
    maxMobileOnly = totalPages;
  }
  console.log(minMobileOnly, maxMobileOnly, totalPages);

  const numericPages = Array.from(Array(iterator), (_, index) => index + 1).map((newPage) => {
    const pageNumber = minPage + newPage - 1;
    const active = pageNumber === currentPage;

    const small = active || (pageNumber >= minMobileOnly && pageNumber <= maxMobileOnly);

    return { page: pageNumber, small, active };
  });

  if (iteratorHalf === 0) {
    return numericPages;
  }

  console.log(numericPages);
  return numericPages;
}
