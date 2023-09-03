export interface Page {
  title: string,
  url: string,
  pages?: Page[]
}


export type Pages = Page[];
