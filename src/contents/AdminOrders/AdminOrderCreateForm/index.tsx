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

//@mock-data
import { vedor_code_text } from "@mock-data/vendors/03VendorCodeList";
export interface CreatePayload {
    order_Type: string;
    family_name: string;
    name: string;
    contact_phone_code: string;
    contact_phone: string;
    contact_tel_code: string;
    contact_tel: string;
    contact_email: string;
    social_media_type: string;
    social_media: string;
}

// default value
const defaultValues = {
    order_Type: "",
    family_name: "姓",
    name: "名",
    contact_phone_code: "+886",
    contact_phone: "",
    contact_tel_code: "",
    contact_tel: "",
    contact_email: "",
    social_media_type: "",
    social_media: "",
};

interface I_Props {
    data?: any
    reloadData?: () => void;
}

function AdminOrderCreateForm({ data, reloadData }: I_Props) {
    const router = useRouter();
    const { register, handleSubmit, control } = useForm<CreatePayload>({
        defaultValues
    });
    const [loading, setLoading] = useState(false);

    const asyncSubmitForm = async (data: any) => {
        setLoading(true);
        try {
            // const res = await createVendor(data);
        } catch (e: any) {
            console.log(e);
            alert(e.message);
        }
        setLoading(false);
        reloadData && reloadData();
    };

    return (
        <FormSTY onSubmit={handleSubmit((data) => {
            // asyncSubmitForm({
            //     ...data,
            // });
        })}>
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                分類
            </Text>
            <Select
                {...register("order_Type", {
                    required: "必填",
                })}
            >
                <option value="01">接機</option>
                <option value="02">送機</option>
                <option value="03">客製包車</option>
            </Select >
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                姓
            </Text>
            <FiledInput
                label=""
                controlProps={{
                    name: "family_name",
                    control,
                    rules: { required: "此欄位必填" }
                }}
            />
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                名
            </Text>
            <FiledInput
                label=""
                controlProps={{
                    name: "name",
                    control,
                    rules: { required: "此欄位必填" }
                }}
            />
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                手機
            </Text>
            <FlexWrapper
                padding="0"
            >
                {/*公司電話國碼*/}
                <FiledInput
                    style={{ width: "60px" }}
                    label=""
                    controlProps={{
                        name: "contact_phone_code",
                        control
                    }}
                />
                <FiledInput
                    label=""
                    controlProps={{
                        name: "contact_phone",
                        control,
                        rules: { required: "此欄位必填" }
                    }}
                />
            </FlexWrapper>
            <Text>
                電話
            </Text>
            <FlexWrapper
                padding="0"
            >
                {/*公司電話國碼*/}
                <FiledInput
                    style={{ width: "60px" }}
                    label=""
                    controlProps={{
                        name: "contact_tel_code",
                        control
                    }}
                />
                <FiledInput
                    label=""
                    controlProps={{
                        name: "contact_tel",
                        control,
                        rules: { required: "此欄位必填" }
                    }}
                />
            </FlexWrapper>
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                信箱
            </Text>
            <FiledInput
                label=""
                controlProps={{
                    name: "contact_email",
                    control,
                    rules: { required: "此欄位必填" }
                }}
            />
            <IconLeft text={"新增詢價單"} type="submit">
                <PlusIcon size={14} />
            </IconLeft>
        </FormSTY >
    )
}

export default AdminOrderCreateForm