import {
  TimelineEventsIcon,
  WarningSignIcon,
  TickCircleIcon,
  ClipboardIcon,
  TagIcon
} from "evergreen-ui";

export const SCHD_TYPE = new Map([
  ["01", { label: "排班", color: "ChartGreen", icon: <ClipboardIcon /> }],
  ["02", { label: "例假", color: "R300", icon: <TimelineEventsIcon /> }],
  ["03", { label: "排休", color: "R200", icon: <TimelineEventsIcon /> }],
  ["04", { label: "臨時請假", color: "ChartYellow", icon: <WarningSignIcon /> }]
]);
export const LEAVE_CODE = new Map([
  ["01", { label: "年假", value: "01", icon: <TagIcon />, color: "R300" }],
  ["02", { label: "病假", value: "02", icon: <TagIcon />, color: "R300" }],
  ["03", { label: "事假", value: "03", icon: <TagIcon />, color: "R300" }],
  ["04", { label: "生理假", value: "04", icon: <TagIcon />, color: "R300" }],
  ["05", { label: "喪假", value: "05", icon: <TagIcon />, color: "R300" }]
]);
export const CHECK_STATUS = new Map([
  ["0", { label: "待審核", value: "0", icon: <TagIcon /> }],
  ["1", { label: "核准", value: "1", icon: <TagIcon /> }],
  ["2", { label: "退回", value: "2", icon: <TagIcon /> }]
]);

// data for EVENT_TYPE  = SCHD_TYPE (+ CHECK_CODE)
export const EVENT_TYPE = new Map([
  ["01", { label: "排班", color: "ChartAqua", icon: <ClipboardIcon /> }], //"01"排班 應該不會出現的
  ["02", { label: "例假", color: "R300", icon: <TimelineEventsIcon /> }], //"02"
  ["03", { label: "排休", color: "R200", icon: <TimelineEventsIcon /> }], //"03"
  ["040", { label: "需簽核", color: "ChartYellow", icon: <WarningSignIcon /> }], //"04+0"
  ["041", { label: "已簽核", color: "ChartYellow", icon: <TickCircleIcon /> }], //"04+1"
  ["042", { label: "退回", color: "N300", icon: <WarningSignIcon /> }], //"04+2???"
  ["05", { label: "派訂單", color: "ChartGreen", icon: <ClipboardIcon /> }], //01?
  ["06", { label: "派工單(車)", color: "T300", icon: <ClipboardIcon /> }], //01?
  ["07", { label: "派工單(駕)", color: "ChartAqua", icon: <ClipboardIcon /> }], //01?
  ["08", { label: "派單完成", color: "N300", icon: <ClipboardIcon /> }] //01?
]);

// index to 周幾
export const WKDAY_LABEL = new Map([
  [1, { label: "週一", weekend: false }],
  [2, { label: "週二", weekend: false }],
  [3, { label: "週三", weekend: false }],
  [4, { label: "週四", weekend: false }],
  [5, { label: "週五", weekend: false }],
  [6, { label: "週六", weekend: true }],
  [0, { label: "週日", weekend: true }]
]);
