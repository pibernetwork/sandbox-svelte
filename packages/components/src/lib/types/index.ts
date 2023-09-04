export interface Page {
  title: string;
  url: string;
  header?: boolean;
  pages?: Page[];
}

export type Pages = Page[];

export type PageMode = 'list' | 'view' | 'create' | 'edit' | 'delete' | 'filters';
