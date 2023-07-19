export interface PageInfoType {
  arrangement: "desc" | "asc"; //"desc"
  orderby: string | null;
  page_Index: number; //1
  page_Size: number; //10
  last_Page?: number; //10
  total?: number; //5
}
