import FlowList from "@components/Flow";
import ServerEntry from "@components/ServiceEntry";
import NavigationList from "@components/NavigationList";
import ProgressList from "@components/ProgressList";
import HookFormMultiSelect from "@components/HookForm/Select/MultiSelect";
import ExpenseDetail from "@components/ExpenseDetail";
import { useForm, useWatch } from "react-hook-form";
import StepArragement from "@components/StepArragement";
import CounterInput from "@components/CounterInput";
import { useRef } from "react";
const DummyFlowListData = [
  {
    imageUrl: "/image/svg-icons/document.svg",
    label: "填寫詢價單"
  },
  {
    imageUrl: "/image/svg-icons/reply.svg",
    label: "回復報價"
  },
  {
    imageUrl: "/image/svg-icons/car.svg",
    label: "確認訂單"
  },
  {
    imageUrl: "/image/svg-icons/wallet.svg",
    label: "繳款確認"
  },
  {
    imageUrl: "/image/svg-icons/reminder.svg",
    label: "行前提醒"
  }
];

const DummyNavigationListData = [
  {
    label: "選擇日期"
  },
  {
    label: "行程資訊"
  },
  {
    label: "乘車資訊"
  },
  {
    label: "特殊需求"
  },
  {
    label: "聯絡人資料"
  },
  {
    label: "詢價完成"
  }
];

const DummyProgressListData: Array<{
  label: string;
  status: "ok" | "pending" | "error";
  date?: string;
}> = [
  {
    label: "送出詢價",
    status: "ok",
    date: "05/04 10:00"
  },
  {
    label: "收到報價",
    status: "ok",
    date: "05/04 10:00"
  },
  {
    label: "接受報價",
    status: "ok",
    date: "05/04 10:00"
  },
  {
    label: "尾款逾期",
    status: "error",
    date: "05/04 10:00"
  },
  {
    label: "訂單成立",
    status: "pending"
  },
  {
    label: "完成",
    status: "pending"
  }
];

const DummyMultiSelectOptions = [
  { label: "label 1", value: "01" },
  { label: "label 2", value: "02" },
  { label: "label 3", value: "03" },
  { label: "label 4", value: "04" }
];

const DummyExpenseDetailData = [
  {
    label: "基本車資",
    hint: "基本車資說明",
    name: "basic",
    value: 1200
  },
  {
    label: "小費",
    hint: "小費說明",
    name: "tip",
    value: 200
  },
  {
    label: "旺季加價",
    hint: "旺季加價說明",
    name: "peak",
    value: 300
  },
  {
    label: "司機費用",
    hint: "司機費用說明",
    name: "driver",
    value: 300
  }
];

type FormValues = {
  muti: string[];
  startPoint: string;
  destinationPoint: string;
  middlePoints: Array<string>;
  counter: number;
};

const ComponentsRender = () => {
  const {
    control,
    register,
    setValue,
    getValues,
    formState: { errors },
    handleSubmit
  } = useForm<FormValues>({
    defaultValues: {
      muti: ["01"],
      middlePoints: [],
      startPoint: "松山",
      destinationPoint: "台南",
      counter: 0
    }
  });
  const formButtonRef = useRef<HTMLButtonElement>(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100vw",
        border: "1px solid",
        background: "#D5E2F1"
      }}
    >
      <div
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <FlowList dataLists={DummyFlowListData} />
      </div>
      <div
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <NavigationList dataLists={DummyNavigationListData} currentStep={2} />
      </div>
      <div
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ProgressList dataLists={DummyProgressListData} color={"#897AE3"} />
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("current form data: ", data);
        })}
      >
        <HookFormMultiSelect
          name="muti"
          control={control}
          options={DummyMultiSelectOptions}
          isDisabled={false}
        />
        <CounterInput
          register={register}
          inputName="counter"
          label="Counter"
          setValue={setValue}
          getValues={getValues}
        />
        <StepArragement
          startPointName="startPoint"
          destinationPointName="destinationPoint"
          middlePointName="middlePoints"
          control={control}
          errors={errors}
          register={register}
        />
        <button type="submit">Check value</button>
      </form>

      <ServerEntry
        imageUrl="/image/svg-icons/custom-bus-pickup.svg"
        label="客製包車"
        onClick={() => {
          alert("客製包車");
        }}
      />
      <ServerEntry
        imageUrl="/image/svg-icons/airport-pickup.svg"
        label="客製包車"
        onClick={() => {
          alert("客製包車");
        }}
      />

      <div style={{ width: "600px", padding: "20px", backgroundColor: "#fff" }}>
        <ExpenseDetail
          data={DummyExpenseDetailData}
          prefix="NT$"
          isEdit
          ref={formButtonRef}
        />
        <button
          onClick={() => {
            formButtonRef.current?.click();
          }}
        >
          sumbit data!
        </button>
      </div>
    </div>
  );
};

export default ComponentsRender;
