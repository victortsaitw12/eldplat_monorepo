export interface PageInfoType {
  page_Index: number; //1
  page_Size: number; //10
  arrangement?: "desc" | "asc"; //"desc"
  orderby?: string | null;
  last_Page?: number; //10
  total?: number; //5
}
