import {
  PeopleIcon,
  AnnotationIcon,
  DownloadIcon,
  InfoSignIcon,
  LayersIcon,
  MultiSelectIcon,
  PrintIcon,
  TrashIcon,
  LockIcon,
  PersonIcon
} from "evergreen-ui";

export const tabsData = [
  {
    bookmarkTitle: {
      name: "全部",
      idx: 0
    }
  },
  { bookmarkTitle: { name: "已分配", idx: 1 } },
  { bookmarkTitle: { name: "未分配", idx: 2 } },
  { bookmarkTitle: { name: "封存", idx: 3 } },
  { bookmarkTitle: { name: "新增項目", idx: 4, value: "add" } }
];

export const AllSubBookmarkData = [
  {
    subName: "表格",
    options: [
      {
        label: "開放協作",
        value: "開放協作",
        description: "管理者及其他人可編輯配置",
        icon: PeopleIcon,
        hasDetail: true
      },
      { label: "重新命名", value: "重新命名", icon: AnnotationIcon },
      { label: "編輯說明文", value: "編輯說明文", icon: InfoSignIcon },
      { label: "複製", value: "複製", icon: LayersIcon },
      { label: "複製配置", value: "複製配置", icon: MultiSelectIcon },
      { label: "下載CSV", value: "下載CSV", icon: DownloadIcon },
      { label: "列印", value: "列印", icon: PrintIcon },
      { label: "刪除", value: "刪除", icon: TrashIcon }
    ],
    value: "form"
  },
  {
    subName: "車輛類型",
    options: [
      { label: "車隊3", value: "車隊3" },
      { label: "車隊4", value: "車隊4" },
      { label: "車隊5", value: "車隊5" }
    ],
    value: "vehicle_type"
  },
  {
    subName: "車輛團隊",
    options: [
      { label: "車隊3", value: "車隊3" },
      { label: "車隊4", value: "車隊4" },
      { label: "車隊5", value: "車隊5" }
    ],
    value: "vehicle_team"
  },
  {
    subName: "車輛狀態",
    options: [
      { label: "非值勤中", value: "非值勤中" },
      { label: "在車廠", value: "在車廠" },
      { label: "終止服務", value: "終止服務" },
      { label: "已售出", value: "已售出" }
    ],
    value: "vehicle_status"
  },
  {
    subName: "可視者",
    options: [
      { label: "非值勤中", value: "非值勤中" },
      { label: "在車廠", value: "在車廠" },
      { label: "終止服務", value: "終止服務" },
      { label: "已售出", value: "已售出" }
    ],
    value: "vehicle_status"
  }
];

export const distributedSubBookmarkData = [
  {
    subName: "副標-1",
    options: [
      "開放協作",
      "重新命名",
      "編輯說明文",
      "複製",
      "複製配置",
      "下載CSV",
      "列印",
      "刪除"
    ],
    value: "sub1"
  },
  {
    subName: "副標-2",
    options: ["車隊3", "車隊4", "車隊5"],
    value: "sub2"
  },
  {
    subName: "副標-3",
    options: ["車隊3", "車隊4", "車隊5"],
    value: "sub3"
  }
];

export const RightBookData = [
  {
    bookmarkTitle: {
      name: "項目1",
      idx: 0
    }
  },
  { bookmarkTitle: { name: "新增項目", idx: 1, value: "add" } }
];

export const SecondLevelData = [
  { title: "Label", description: "管理者及其他人可編輯配置", icon: PeopleIcon },
  { title: "關閉協作", description: "只有管理者可編輯配置", icon: PersonIcon },
  { title: "鎖定", description: "沒有人可編輯配置", icon: LockIcon }
];
