export interface Column {
    columnDef: string;
    header: string;
    cell: Function;
    sort:boolean,
    isLink?: boolean;
    url?: string;
    template ? :any
  }