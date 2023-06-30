import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  GetAllAssignments: createUrlPath("ANV", "GetAssignmentList"), //查詢派單列表（多筆資料）
  CreateAssignmentByManual: createUrlPath("ANV", "CreateAssignmentByManual"), //新增手動派單
  CreateAssignmentByAuto: createUrlPath(
    "ANV",
    "AutoDispatchAssignmentByQuoteNo"
  ), //新增自動派單
  GetAssignBusDDL: createUrlPath("ANV", "AssignmentByManual_GetBusDDL"), //查詢派車下拉選項
  GetAssignDriverDDL: createUrlPath("ANV", "AssignmentByManual_GetDriverDDL"), //查詢派工下拉選項
  GetBusAssignInfo: createUrlPath("ANV", "Assignment_GetBusInfo"), //編輯單筆時查詢派車資料
  GetDriverAssignInfo: createUrlPath("ANV", "Assignment_GetDriverInfo"), //編輯單筆時查詢派工資料
  GetOrderDates: createUrlPath("ANV", "ReplaceAssignment_OrderDateDDL"), //查詢出發到回程日期中間每一天的日期和週幾
  GetOrderInfo: createUrlPath("ANV", "AssignmentByManual_GetOrderInfo"), //查詢訂單的資料
  UpdateSingleAssignment: createUrlPath("ANV", "Assignment_Edit") //更新某筆派車或派工資料
};

export default API_Path;
