import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
import { useRouter } from "next/router";
//@sevices
import { createVendor } from "@services/vendor/createVendor";
import FiledInput from "./FieldInput";
import { PlusIcon, Text, SelectField, Select } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import FlexWrapper from "@layout/FlexWrapper";

//@components
import CheckboxField from "@components/CheckboxField";
import { I_contactData } from "../vendor.type";

//@mock-data
import { vedor_code_text } from "@mock-data/vendors/03VendorCodeList";
export interface CreateVendorPayload {
    vendor_Name: string;
    vendor_City: string;
    vendor_Country: string;
    vendor_Owner: string;
    vendor_Gui_No: string;
    address1: string;
    address2: string;
    vendor_Area: string;
    vendor_District_Code: string;
    vendor_Tel_Code: string;
    vendor_Tel: string;
    vendor_Contact_List: Array<I_contactData>;
}

// default value
const defaultValues = {
    vendor_Name: "",
    vendor_City: "",
    vendor_Country: "TW",
    vendor_Owner: "",
    vendor_Gui_No: "",
    address1: "",
    address2: "",
    vendor_Area: "",
    vendor_District_Code: "",
    vendor_Tel_Code: "",
    vendor_Tel: "",
    vendor_Contact_List: [
        {
            contact_name: "",
            contact_phone_code: "",
            contact_phone: "",
            contact_tel_code: "",
            contact_tel: "",
            contact_email: "",
            contact_sort: "",
        }
    ],
};

interface I_VendorCreateFormProps {
    data?: any
    reloadData?: () => void;
}

function VendorCreateForm({ data, reloadData }: I_VendorCreateFormProps) {
    const router = useRouter();
    //供應商的分類
    const { codeType = "99" } = router.query;
    console.log("💫💫💫codeType", codeType);
    console.log("vedor_code_text.codeType", vedor_code_text[codeType as string]);
    const { register, handleSubmit, control } = useForm<CreateVendorPayload>({
        defaultValues
    });
    const [loading, setLoading] = useState(false);
    const [fuelValue, setFuelValue] = useState(codeType);

    const asyncSubmitForm = async (data: any) => {
        setLoading(true);
        try {
            const res = await createVendor(data);
        } catch (e: any) {
            console.log(e);
            alert(e.message);
        }
        setLoading(false);
        reloadData && reloadData();
    };

    return (
        <FormSTY onSubmit={handleSubmit((data) => {
            console.log("🎶🎶🎶create Vendor Data!:", data);
            asyncSubmitForm({
                ...data,
                vendor_Code_List: fuelValue ? [
                    {
                        "vendor_Code": fuelValue,
                        "vendor_Code_Name": vedor_code_text[fuelValue as string]
                    }
                ] : []
            });
        })}>
            <FiledInput
                label="名稱"
                controlProps={{
                    name: "vendor_Name",
                    control,
                    rules: { required: "此欄位必填" }
                }}
            />
            <FiledInput
                label="統一編號"
                controlProps={{
                    name: "vendor_Gui_No",
                    control,
                    rules: { required: "此欄位必填" }
                }}
            />
            <SelectField
                label="負責人"
                {...register("vendor_Owner")}
            >
                <option value="負責人1">負責人1</option>
                <option value="負責人2">負責人2</option>
                <option value="負責人3">負責人3</option>
                <option value="負責人4">負責人4</option>
            </SelectField >
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                公司地址
            </Text>
            <FiledInput
                label="地址1"
                horizonLabel={true}
                controlProps={{
                    name: "address1",
                    control,
                    rules: { required: "此欄位必填" }
                }}
            />
            <FiledInput
                label="地址2"
                horizonLabel={true}
                controlProps={{
                    name: "address2",
                    control,
                    rules: { required: "此欄位必填" }
                }}
            />
            <FlexWrapper
                padding="0"
                style={{
                    alignItems: "center"
                }}
            >
                <label htmlFor="">
                    <span style={{ color: "#D14343" }}>*</span>
                    城市
                </label>
                <Select
                    {...register("vendor_City", {
                        required: "必填",
                    })}
                >
                    <option value="01">基隆市</option>
                    <option value="02">台北市</option>
                    <option value="03">新北市</option>
                    <option value="04">桃園市</option>
                </Select >
            </FlexWrapper>
            <FlexWrapper
                padding="0"
                style={{
                    alignItems: "center"
                }}
            >
                <label htmlFor="">
                    <span style={{ color: "#D14343" }}>*</span>
                    州/省/區域
                </label>
                <Select
                    {...register("vendor_Area", {
                        required: "必填",
                    })}
                >
                    <option value="01">基隆市</option>
                    <option value="02">台北市</option>
                    <option value="03">新北市</option>
                    <option value="04">桃園市</option>
                </Select >
            </FlexWrapper>
            <FiledInput
                label="郵遞區號"
                horizonLabel={true}
                controlProps={{
                    name: "vendor_District_Code",
                    control,
                    rules: { required: "此欄位必填", maxLength: 5 }
                }}
            />
            <FlexWrapper
                padding="0"
                style={{
                    alignItems: "center"
                }}
            >
                <label htmlFor="">
                    <span style={{ color: "#D14343" }}>*</span>
                    國家
                </label>
                <Select
                    {...register("vendor_Country", {
                        required: "必填",
                    })}
                >
                    <option value="TW">台灣</option>
                </Select >
            </FlexWrapper>
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                公司電話
            </Text>
            <FlexWrapper
                padding="0"
            >
                {/*公司電話國碼*/}
                <FiledInput
                    label=""
                    controlProps={{
                        name: "vendor_Tel_Code",
                        control
                    }}
                />
                <FiledInput
                    label=""
                    controlProps={{
                        name: "vendor_Tel",
                        control,
                        rules: { required: "此欄位必填" }
                    }}
                />
            </FlexWrapper>
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                主要聯絡人
            </Text>
            <FiledInput
                controlProps={{
                    name: "vendor_Contact_List.0.contact_name",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label=""
            />
            <Text>
                主要聯絡人電話
            </Text>
            <FlexWrapper
                padding="0"
                style={{
                    alignItems: "center"
                }}
            >
                <span
                    style={{ flex: "unset" }}
                >
                    市話
                </span>
                <FiledInput
                    controlProps={{
                        name: "vendor_Contact_List.0.contact_tel_code",
                        control,
                    }}
                    label=""
                />
                <FiledInput
                    controlProps={{
                        name: "vendor_Contact_List.0.contact_tel",
                        control,
                        rules: { required: "此欄位必填" }
                    }}
                    label=""
                />
            </FlexWrapper>
            <FlexWrapper
                padding="0"
                style={{
                    alignItems: "center"
                }}
            >
                <span>手機</span>
                <FiledInput
                    controlProps={{
                        name: "vendor_Contact_List.0.contact_phone_code",
                        control
                    }}
                    label=""
                />
                <FiledInput
                    controlProps={{
                        name: "vendor_Contact_List.0.contact_phone",
                        control
                    }}
                    label=""
                />
            </FlexWrapper>
            {/* 從外部車隊進來的時候要先預選外部車隊,如果要加入其他分類則到細節頁裡面新增 */}
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                分類
            </Text>
            <CheckboxField
                label={vedor_code_text[codeType as string]}
                item={{ value: codeType }}
                checked={fuelValue == codeType}
                toggleFuelValue={() => {
                    console.log("toggleFuelValue");
                }}
            />
            <IconLeft text={"新增供應商"} type="submit">
                <PlusIcon size={14} />
            </IconLeft>
        </FormSTY>
    )
}

export default VendorCreateForm