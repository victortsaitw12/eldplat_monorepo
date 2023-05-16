import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ItemSTY, FormSTY } from "./style";
//@sevices
import { createVendor } from "@services/vendor/createVendor";
import FiledInput from "./FieldInput";
import { HelpIcon, PlusIcon, ErrorIcon, Text } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

export interface CreateVendorPayload {
    updid: string;
    vendor_Name: string;
    vendor_Label: string;
    vendor_Phone: string;
    vendor_Website: string;
    vendor_Address: string;
    vendor_Address2: string;
    vendor_Zip: string;
    vendor_State: string;
    vendor_City: string;
    vendor_Country: string;
    vendor_Contact_Name: string;
    vendor_Contact_Phone: string;
    vendor_Contact_Email: string;
    vendor_Code: Array<string>;
}

// default value
const defaultValues = {
    vendor_Name: "",
    vendor_Label: "",
    vendor_Phone: "",
    vendor_Website: "",
    vendor_Address: "",
    vendor_Address2: "",
    vendor_Zip: "",
    vendor_State: "",
    vendor_City: "",
    vendor_Country: "TW",
    vendor_Contact_Name: "",
    vendor_Contact_Phone: "",
    vendor_Contact_Email: "",
    vendor_Code: ["01"],
};

interface I_VendorCreateFormProps {
    data?: any
}

function VendorCreateForm({ data }: I_VendorCreateFormProps) {

    const { handleSubmit, control } = useForm<CreateVendorPayload>({
        defaultValues
    });

    const [loading, setLoading] = useState(false);

    const asyncSubmitForm = async (data: any) => {
        setLoading(true);
        try {
            const res = await createVendor(data);
        } catch (e: any) {
            console.log(e);
            alert(e.message);
        }
        setLoading(false);
    };

    return (
        <FormSTY onSubmit={handleSubmit((data) => {
            console.log("🎶🎶🎶create Vendor Data!:", data);
            // asyncSubmitForm({ ...data });
        })}>
            <FiledInput
                controlProps={{
                    name: "vendor_Name",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="名稱"
            />
            <FiledInput
                controlProps={{
                    name: "updid",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="統一編號"
            />
            <FiledInput
                controlProps={{
                    name: "vendor_Contact_Name",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="負責人"
            />
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                公司地址
            </Text>
            <FiledInput
                horizonLabel={true}
                controlProps={{
                    name: "vendor_Address",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="地址1"
            />
            <FiledInput
                horizonLabel={true}
                controlProps={{
                    name: "vendor_Address2",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="地址2"
            />
            <FiledInput
                horizonLabel={true}
                controlProps={{
                    name: "vendor_City",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="城市"
            />
            <FiledInput
                horizonLabel={true}
                controlProps={{
                    name: "vendor_State",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="州/省/區域"
            />
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                公司電話
            </Text>
            <FiledInput
                horizonLabel={true}
                controlProps={{
                    name: "vendor_Zip",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="郵遞區號"
            />
            <FiledInput
                horizonLabel={true}
                controlProps={{
                    name: "vendor_Country",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="國家"
            />
            <FiledInput
                controlProps={{
                    name: "vendor_Country",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="國家"
            />
            <FiledInput
                controlProps={{
                    name: "vendor_Country",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="國家"
            />
            <FiledInput
                controlProps={{
                    name: "vendor_Country",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="國家"
            />
            <FiledInput
                controlProps={{
                    name: "vendor_Country",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="國家"
            />
            <FiledInput
                controlProps={{
                    name: "vendor_Country",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="國家"
            />
            <Text>
                <span style={{ color: "#D14343" }}>* </span>
                公司電話
            </Text>
            <FiledInput
                controlProps={{
                    name: "vendor_Country",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label=""
            />
            <FiledInput
                controlProps={{
                    name: "vendor_Country",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label=""
            />
            <IconLeft text={"新增供應商"} type="submit">
                <PlusIcon size={14} />
            </IconLeft>
        </FormSTY>
    )
}

export default VendorCreateForm