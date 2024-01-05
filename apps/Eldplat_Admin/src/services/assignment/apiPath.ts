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
  UpdateSingleAssignment: createUrlPath("ANV", "Assignment_Edit"), //更新某筆派車或派工資料
  GetAssignDateDDL: createUrlPath("ANV", "ReplaceAssignment_OrderDateDDL"), //取得新增派車or派工 可選日期
  GetDayDriverNameDDL: createUrlPath("ANV", "ReplaceAssignment_DriverDDL"), //取得新增派車or派工 可選車次+駕駛
  GetDayBusNameDDL: createUrlPath("ANV", "ReplaceAssignment_BusDDL"), //取得新增派車or派工 可選車次+車輛
  createReplaceAssignment: createUrlPath("ANV", "CreateReplaceAssignment"), //新增派工 派車單
  createOtherAssignment: createUrlPath("ANV", "CreateOtherAssignment") //新增其他派工 派車單
};

export default API_Path;
