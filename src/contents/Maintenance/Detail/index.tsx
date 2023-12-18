import { DivSTY } from "./style";
import InfoCard from "@components/InfoCard";
import CustomTextInputField from "@components/CustomTextInputField";
import CustomTextArea from "@components/CustomTextArea";
import NewUploader from "@components/NewUploader";
import CustomDatePicker from "@components/CustomDatePicker";
import FileCard from "@components/FileCard";
import { Select, Group, Pane } from "evergreen-ui";

interface Props {
  isEdit: boolean;
  maitenanceData: any;
}

function MaintenanceDetail(props: Props) {
  const {
    isEdit,
    maitenanceData
  } = props;

  const BasicInFoEdit = [
    {
        listClassName: "fb-100",
        readonly: false,
        req: isEdit,
        label: "車牌",
        bold: true,
        value: "KKA-7885",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              請選擇
            </option>
          </Select>
        )
      },
  ]
  const BasicInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: isEdit,
      label: "車牌",
      bold: true,
      value: "KKA-7885",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
        listClassName: "fb-100",
        readonly: false,
        label: "名稱",
        bold: true,
        value: "奶油獅號",
    },
    {
        listClassName: "fb-100",
        readonly: false,
        label: "主要駕駛",
        bold: true,
        value: "林大明",
    },
    {
        listClassName: "fb-100",
        readonly: false,
        label: "保養截止日期",
        bold: true,
        value: "2024-01-05(一)",
    },
    {
        listClassName: "fb-100",
        readonly: false,
        label: "當前里程數",
        bold: true,
        value: "10,743公里",
    },
    {
        listClassName: "fb-100",
        readonly: false,
        label: "保養里程數",
        bold: true,
        value: "12,786公里",
    }
  ];

  const MissionInFo = [
    {
      listClassName: "fb-50",
      readonly: false,
      req: isEdit,
      label: "分類",
      bold: false,
      value: "定期保養",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "出發地",
      bold: false,
      value: "114 台灣 台北市 內湖區 石潭路151號",
      editEle: (
        <Pane className="flex gap-1 flex-col">
          <Group className="flex gap-1">
            <CustomTextInputField
              className="required input"
              placeholder="郵遞區號"
            />
            <CustomTextInputField
              className="required"
              placeholder="國家"
            />
            <CustomTextInputField
              className="required"
              placeholder="城市"
            />
          </Group>
          <CustomTextInputField
              className="required w-full max-w-full"
              placeholder="地址"
          />
        </Pane>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: isEdit,
      bold: false,
      label: "維修廠",
      value: "台北保養廠",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      bold: true,
      label: "項目",
      value: "A-25定期保養組合",
      editEle: (<CustomTextArea placeholder="請輸入項目" />)
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      bold: true,
      label: "派工駕駛",
      value: "林大明",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-50 m-0",
      readonly: false,
      req: false,
      bold: true,
      label: "維保日期",
      value: "2024-01-02(二)18:00~22:00",
      editEle: (<CustomDatePicker placeholder="請輸入訓練期間" isRange />)
    },
    {
      listClassName: "fb-50 m-0",
      readonly: false,
      req: false,
      bold: true,
      label: "維保里程",
      value: "14,785公里",
      editEle: (
        <CustomTextInputField
          className="input"
          placeholder="里程"
        />
      )
    }
  ];

  const CheckItemInFo = [[
    {
      listClassName: "fb-100",
      readonly: false,
      req: isEdit,
      label: "發票號碼",
      bold: true,
      value: "BR-93847643",
      editEle: (
        <CustomTextInputField
          className="input"
          placeholder="Placeholder"
        />
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: isEdit,
      label: "金額",
      bold: true,
      value: "NT 10,023",
      editEle: (
        <CustomTextInputField
          className="input"
          placeholder="Placeholder"
        />
      )
    },],[
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: isEdit,
      label: "單據資料",
      bold: true,
      value: <FileCard />,
      editEle: <NewUploader isEditable={true} />
    },],
    [{
      listClassName: "fb-100",
      readonly: false,
      req: isEdit,
      label: "備註",
      bold: true,
      value: "我是備註",
      editEle: (
        <CustomTextArea
          placeholder="請輸入備註"
        />
      )
    },
  ]];



  return (
    <DivSTY>
      <Pane className={"main-column "}>
        {isEdit ? 
          <InfoCard
            isEdit={isEdit}
            infoData={BasicInFoEdit}
            infoTitle="車輛資料"
          />
          :
          <InfoCard
            isEdit={isEdit}
            infoData={BasicInFo}
            infoTitle="車輛資料"
          />
        }
      </Pane>
      <Pane className={"main-column"}>
          <InfoCard
            isEdit={isEdit}
            infoData={MissionInFo}
            infoTitle="職員資料"
          />
      </Pane>
      <Pane className={"main-column w-full"}>
          <InfoCard isEdit={isEdit} 
                    infoData={CheckItemInFo} 
                    infoTitle="駕照" />
      </Pane>
    </DivSTY>
  )
}

export default MaintenanceDetail;
