export interface Page {
  title: string;
  url: string;
  header?: boolean;
  pages?: Page[];
}

export type Pages = Page[];
