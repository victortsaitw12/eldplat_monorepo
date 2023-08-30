import React, { useContext, useEffect, useState } from "react";
import {
  Heading,
  Pane,
  Paragraph,
  Text,
  TextInput,
  Button,
  PlusIcon,
  IconButton,
  TrashIcon
} from "evergreen-ui";
import { BodySTY } from "./style";

import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import { I_Company_Contact_Type } from "@typings/company_type";
import { getAllRegions } from "@services/region/getRegion";
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";
import LoadingSpinner from "@components/LoadingSpinner";
import Address from "@components/Address";

function Contact() {
  const { companyData, setCompanyData, handleCompanyContactChange, errMsg } =
    useContext<I_Company_Context>(CompanyContext);
  const { cities, states, countries, handleCountryChange, handleCityChange } =
    useContext<I_Region_Context>(RegionContext);

  const [contactArr, setContactArr] = useState<I_Company_Contact_Type[] | any>([
    {
      contact_name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: "",
      contact_sort: "1"
    }
  ]);

  // 一進畫面的時候還沒有companyData，所以抓不到contact的資料，先用useEffect抓
  useEffect(() => {
    setContactArr([...companyData["company_contact"]]);
  }, [companyData["company_contact"]]);

  // const [allStates, setAllStates] = useState<I_AllRegions_Type[]>([
  //   { regionName: "請選擇", areaNo: "0" }
  // ]);
  // const [allCities, setAllCities] = useState<I_AllRegions_Type[]>([
  //   { regionName: "請選擇", areaNo: "0" }
  // ]);

  // TODO: 一進畫面先抓到州、省和城市的文字顯示
  // useEffect(() => {
  //   if (!companyData.company_area) return;
  //   console.log("💟companyData from beginning", companyData);
  //   const area_no = companyData?.company_area.substring(0, 4);
  //   const level_num = "3";
  //   getAllRegions(area_no, level_num).then((data) => {
  //     setAllStates([]);
  //     data.options.map((v: { area_Name_Tw: string; area_No: string }) => {
  //       if (v.area_Name_Tw !== "")
  //         return setAllStates((prev: I_AllRegions_Type[]) => [
  //           ...prev,
  //           { regionName: v.area_Name_Tw, areaNo: v.area_No }
  //         ]);
  //     });
  //   });
  //   // setAllStates([
  //   //   {
  //   //     regionName: handleStateSwitch(companyData.company_area),
  //   //     areaNo: companyData?.company_area
  //   //   }
  //   // ]);
  // }, [companyData]);

  // 新增聯絡人按鈕
  const handleAddContact = (e: any) => {
    e.preventDefault();
    setContactArr((prev: any) => [
      ...prev,
      {
        contact_name: "",
        contact_phone_code: "",
        contact_phone: "",
        contact_tel_code: "",
        contact_tel: "",
        contact_email: "",
        contact_sort: "2"
      }
    ]);
  };

  // 移除一個聯絡人
  const handleRemoveContact = (val: I_Company_Contact_Type, idx: number) => {
    const copyData = { ...companyData };
    // 找到聯絡人姓名一樣的把他篩掉
    const filterContact = contactArr.filter(
      (v: { contact_name: string }, i: any) => {
        // return val.contact_name !== v.contact_name;
        return idx !== i;
      }
    );
    copyData["company_contact"] = filterContact;
    setContactArr(filterContact);
    setCompanyData(copyData);
  };

  // 存取多個聯絡人欄位裡的資料
  const handleContactsChange = (
    e: any,
    val: I_Company_Contact_Type,
    idx: number
  ) => {
    const copyData = { ...companyData };
    // 把原始陣列展開後找到要輸入的那格去更改value
    const updatedContact = contactArr.map((v: any, i: number) => {
      const newData = { ...v };
      if (idx === i) {
        newData[e.target.name] = e.target.value;
      }
      return newData;
    });
    copyData["company_contact"] = updatedContact;
    setContactArr(updatedContact);
    setCompanyData(copyData);
  };

  return (
    <BodySTY>
      <Heading is="h4">公司聯絡資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">公司電話</Text>
          <Pane className="phone-input">
            <TextInput
              className="prefix"
              name=""
              // value={handleCountryCode(companyData?.company_country)}
              value={""}
              required
              disabled
            />
            <TextInput
              className="tel"
              name="company_tel"
              value={companyData.company_tel}
              onChange={handleCompanyContactChange}
              required
            />
            {errMsg["errField"] === "tel" && (
              <Text color="red !important">{errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司傳真</Text>
          <Pane className="phone-input">
            <TextInput
              className="prefix"
              name=""
              // value={handleCountryCode(companyData?.company_country)}
              value={""}
              required
              disabled
            />
            <TextInput
              className="tel"
              name="company_fax"
              value={companyData.company_fax}
              onChange={handleCompanyContactChange}
              required
            />
            {errMsg["errField"] === "company_fax" && (
              <Text color="red !important">{errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司地址</Text>
          <Address
            data={companyData}
            options={{ countries, cities }}
            onChange={handleCompanyContactChange}
            isEdit={true}
          />
        </Pane>
        <Pane className="input-line">
          <Text className="">公司E-Mail</Text>
          <Pane>
            <TextInput
              name="company_email"
              value={companyData.company_email}
              onChange={handleCompanyContactChange}
            />
            {errMsg["errField"] === "company_email" && (
              <Text color="red !important">{errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>

        {contactArr?.map((value: I_Company_Contact_Type, idx: number) => {
          return (
            <>
              <Pane className="input-line">
                <Text className="">
                  {idx === 0 ? "主要聯絡人" : `聯絡人${idx + 1}`}
                </Text>
                <Pane className="contact-first">
                  <TextInput
                    name="contact_name"
                    value={value.contact_name}
                    onChange={(e: any) => {
                      handleContactsChange(e, value, idx);
                    }}
                  />
                  {idx !== 0 && (
                    <IconButton
                      icon={TrashIcon}
                      onClick={() => {
                        handleRemoveContact(value, idx);
                      }}
                    />
                  )}
                </Pane>
              </Pane>
              <Pane className="input-line">
                <Text className="">
                  {idx === 0 ? "主要聯絡人電話" : `聯絡人${idx + 1}電話`}
                </Text>
                <Pane>
                  <Pane className="phone-input">
                    <Paragraph size={200}>市話</Paragraph>
                    <TextInput
                      type="tel"
                      className="prefix"
                      name="contact_tel_code"
                      placeholder="ex:+886"
                      // value={countryNumInput.contactTel}
                      // onChange={handleCountryNum}
                      value={value.contact_tel_code}
                      onChange={(e: any) => {
                        handleContactsChange(e, value, idx);
                      }}
                      required
                    />
                    <TextInput
                      className="contact-tel"
                      name="contact_tel"
                      value={value.contact_tel}
                      onChange={(e: any) => {
                        handleContactsChange(e, value, idx);
                        handleCompanyContactChange(e);
                      }}
                      required
                    />

                    {/* 錯誤訊息 */}
                    {/* {errMsg["errField"] === "contact_tel" && (
                      <Text color="red !important">{errMsg["errText"]}</Text>
                    )} */}
                  </Pane>
                  <Pane className="phone-input">
                    <Paragraph size={200}>手機</Paragraph>
                    <TextInput
                      className="prefix"
                      name="contact_phone_code"
                      placeholder="ex:+886"
                      // value={countryNumInput.contactPhone}
                      // onChange={handleCountryNum}
                      value={value.contact_phone_code}
                      onChange={(e: any) => {
                        handleContactsChange(e, value, idx);
                      }}
                      required
                    />
                    <TextInput
                      className="contact-phone"
                      name="contact_phone"
                      // value={companyData.company_Dt.contact_Phone}
                      // onChange={handleCompanyContactChange}
                      value={value.contact_phone}
                      onChange={(e: any) => {
                        handleContactsChange(e, value, idx);
                        handleCompanyContactChange(e);
                      }}
                      required
                    />
                    {/* {errMsg["errField"] === "contact_phone" && (
                      <Text color="red !important">{errMsg["errText"]}</Text>
                    )} */}
                  </Pane>
                </Pane>
              </Pane>
              <Pane className="input-line">
                <Text className="">
                  {idx === 0 ? "主要聯絡人信箱" : `聯絡人${idx + 1}信箱`}
                </Text>
                <TextInput
                  name="contact_email"
                  value={value.contact_email}
                  onChange={(e: any) => {
                    handleContactsChange(e, value, idx);
                  }}
                />
              </Pane>
            </>
          );
        })}
        <Button
          marginY={8}
          marginRight={12}
          iconBefore={PlusIcon}
          onClick={handleAddContact}
        >
          新增聯絡人
        </Button>
      </form>
    </BodySTY>
  );
}

export default Contact;

// 如果州省或城市的欄位是空的，就顯示請選擇
// useEffect(() => {
//   if (allStates.length === 0) {
//     setAllStates([{ regionName: "請選擇", areaNo: "0" }]);
//   } else if (allCities.length === 0) {
//     setAllCities([{ regionName: "請選擇", areaNo: "0" }]);
//   }
// }, [allCities.length, allStates.length]);

// 偵測選取國家後要改顯示對應的州
// const handleStateChange = (e: any) => {
//   const area_no = e.target.value.substring(0, 4);
//   const level_num = "3";
//   if (!filterStates(area_no)) {
//     getAllRegions(area_no, level_num).then((data) => {
//       setAllStates([]);
//       setAllCities([]);
//       console.log("data for states", data);
//       data.options.map((v: { area_Name_Tw: string; area_No: string }) => {
//         if (v.area_Name_Tw !== "")
//           return setAllStates((prev: I_AllRegions_Type[]) => [
//             ...prev,
//             { regionName: v.area_Name_Tw, areaNo: v.area_No }
//           ]);
//       });
//     });
//   } else {
//     setAllStates([]);
//     setAllCities([]);
//     getAllRegions(area_no, level_num).then((data) => {
//       data.options.map((v: { area_Name_Tw: string; area_No: string }) => {
//         if (v.area_Name_Tw !== "")
//           return setAllCities((prev: I_AllRegions_Type[]) => [
//             ...prev,
//             { regionName: v.area_Name_Tw, areaNo: v.area_No }
//           ]);
//       });
//     });
//   }
// };

// 州、省變動後設城市
// const handleCityChange = (e: any) => {
//   const area_no = e.target.value.substring(0, 7);
//   const level_num = "4";
//   getAllRegions(area_no, level_num).then((data) => {
//     setAllCities([]);
//     console.log("data for cities", data);
//     data.options.map((v: { area_Name_Tw: string; area_No: string }) => {
//       if (v.area_Name_Tw !== "")
//         return setAllCities((prev: any) => [
//           ...prev,
//           { regionName: v.area_Name_Tw, areaNo: v.area_No }
//         ]);
//     });
//   });
// };
