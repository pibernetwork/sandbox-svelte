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

  const numericPages = Array.from(Array(iterator), (_, index) => index + 1).map((newPage) => {
    const pageNumber = minPage + newPage - 1;

    const small = currentPage + pageNumber < mobileOnly || pageNumber + currentPage < mobileOnly;

    return { page: pageNumber, small, active: pageNumber === currentPage };
  });

  if (iteratorHalf === 0) {
    return numericPages;
  }
  console.log(numericPages);

  return numericPages;
}
