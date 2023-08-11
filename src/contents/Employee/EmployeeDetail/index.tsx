import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import dayjs from "dayjs";
import {
  TextInputField,
  TextInput,
  SelectField,
  Avatar,
  Pane,
  Text
} from "evergreen-ui";
import { BodySTY } from "./style";
//@components
import InfoBox, { I_infoData } from "@components/InfoBox";

//@layout
import FlexWrapper from "@layout/FlexWrapper";

//@service

//@content
import { CharactorCard } from "@contents/Employee/Charactor/";
import LanguageAbility from "@contents/Employee/LanguageAbility";
interface I_Props {
  submitRef: React.RefObject<HTMLButtonElement>;
  isEdit: boolean;
  data: any;
  goToCreatePage?: () => void;
  goToDetailPage?: (id: string) => void;
  goToEditPageHandler?: (id: string) => void;
  deleteItemHandler?: (id: string) => void;
  submitForm: (data: any) => void;
}

const EmployeeDetail = ({ submitRef, isEdit, data, submitForm }: I_Props) => {
  console.log("data?.invts", data, data?.invts);
  const methods = useForm({ defaultValues: data });

  const sex: { [key: string]: string } = {
    "1": "男性",
    "2": "女性",
    "3": "非二次元性別"
  };
  //基本資料
  const basic_info = [
    {
      req: true,
      label: "姓",
      value: data.user_first_name || "--"
    },
    {
      req: true,
      label: "名",
      value: data.user_name || "--"
    },
    {
      req: false,
      label: "英文名",
      value: data.user_english_name || "--"
    },
    {
      req: false,
      label: "身份證字號",
      value: data.user_identity || "--"
    },
    {
      req: false,
      label: "國籍",
      value: data.user_country_name || "--"
    },
    {
      req: false,
      label: "生日",
      value:
        (data.user_birthday &&
          dayjs(data.user_birthday).format("YYYY/MM/DD")) ||
        "--"
    },
    {
      req: false,
      label: "性別",
      value: (data.user_sex && sex[data.user_sex]) || "--"
    },
    {
      //頭像
      req: false,
      label: "",
      value: (
        <Pane
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={44}
          />
        </Pane>
      )
    }
  ];
  //指定群組
  const group_info: I_infoData[] | undefined =
    data?.groups.length > 0
      ? [
          {
            value: (
              <>
                <Pane>
                  {data?.groups.map((child: any, i: number) => {
                    return <CharactorCard key={i} item={child} />;
                  })}
                </Pane>
              </>
            )
          }
        ]
      : [
          {
            value: "--"
          }
        ];
  //排班設定
  const shift_info: I_infoData[] | undefined = [
    {
      req: true,
      value: [data.working_hours_name || "--"]
    }
  ];
  //聯絡資訊
  const contact_info: I_infoData[] | undefined = [
    {
      req: true,
      label: "E-Mail",
      value: data.user_email || "--"
    },
    {
      req: true,
      label: "手機",
      value: (data.user_phone_code || "--") + " " + (data.user_phone || "--")
    },
    {
      req: false,
      label: "聯絡地址",
      value: data.user_address1 || "--"
    },
    {
      req: false,
      label: " ",
      value: data.user_address2 || "--"
    },
    {
      req: false,
      label: " ",
      value: `${data.city_name || "--"} ${data.district_name || "--"}`
    },
    {
      req: false,
      label: " ",
      value: `${data.zip_code || "--"} ${data.dt_country_name || "--"}`
    },
    {
      req: false,
      label: "緊急聯絡人",
      value: data.emgc_contact || "--"
    },
    {
      req: false,
      label: "緊急聯絡人手機",
      value: (data.emgc_phone_code || "--") + " " + (data.emgc_phone || "--")
    }
  ];
  //員工資訊
  const employee_info: I_infoData[] | undefined = [
    {
      req: false,
      label: "員工編號",
      value: data.staff_no || "--"
    },
    {
      req: false,
      label: "職務名稱",
      value: data.job_title || "--"
    },
    {
      req: false,
      label: "公司名稱",
      value: data.company_name || "--"
    },
    {
      req: false,
      label: "部門別",
      value: data.department || "--"
    },
    {
      req: false,
      label: "組別",
      value: data.group || "--"
    },
    {
      req: false,
      label: "到職日期",
      value:
        (data.arrive_date && dayjs(data.arrive_date).format("YYYY/MM/DD")) ||
        "--"
    },
    {
      req: false,
      label: "離職日期",
      value:
        (data.leave_date && dayjs(data.leave_date).format("YYYY/MM/DD")) || "--"
    },

    {
      req: false,
      label: "員工狀態",
      value: <Text color="#52BD94 !important">• 已加入</Text>
    },
    {
      req: false,
      label: "證照",
      value: data.license_name[0] || "--"
    }
  ];
  //員工資訊-邀請次數
  const invts_info =
    data?.invts.length > 0
      ? data?.invts.map((child: any, i: number) => {
          if (i == 0) {
            return {
              req: false,
              label: "邀請時間與次數",
              value: child.invt_date + " 邀請第" + (i + 1) + "次"
            };
          } else {
            return {
              req: false,
              label: " ",
              value: child.invt_date + " 邀請第" + (i + 1) + "次"
            };
          }
        })
      : [
          {
            req: false,
            label: "邀請時間與次數",
            value: "--"
          }
        ];
  //把邀請次數塞回員工資訊
  invts_info.forEach((element: any, idx: number) => {
    employee_info.splice(7 + idx, 0, element);
  });

  //語言能力
  const language_info: I_infoData[] | undefined = [
    {
      req: false,
      label: "",
      value: <LanguageAbility insertData={data} viewOnly={true} />
    }
  ];
  return (
    <BodySTY>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log("");
          })}
          name="employee"
        >
          <button ref={submitRef} type="submit" style={{ display: "none" }}>
            儲存
          </button>
          <FlexWrapper padding="0">
            <div
              style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <InfoBox
                infoTitle="基本資料"
                isEdit={isEdit}
                infoData={basic_info}
              />

              <InfoBox
                infoTitle="指定群組"
                isEdit={isEdit}
                infoData={group_info}
              />
              <InfoBox
                infoTitle="排班設定"
                isEdit={isEdit}
                infoData={shift_info}
                infoType="label"
              />
            </div>
            <div
              style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <InfoBox
                infoTitle="聯絡資訊"
                style={{ flex: "1" }}
                isEdit={isEdit}
                infoData={contact_info}
              />
              <InfoBox
                infoTitle="員工資訊"
                style={{ flex: "1" }}
                isEdit={isEdit}
                infoData={employee_info}
              />
              <InfoBox
                style={{ flex: "1" }}
                isEdit={isEdit}
                infoData={language_info}
              />
            </div>
          </FlexWrapper>
        </form>
      </FormProvider>
    </BodySTY>
  );
};

export default EmployeeDetail;
