import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ItemSTY, FormSTY } from "./style";
//@sevices
import { createVendor } from "@services/vendor/createVendor";
import FiledInput from "./FieldInput";

export interface CreateVendorPayload {
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
            console.log('create Vendor Data!:', data);
            asyncSubmitForm({ ...data });
        })}>
            <FiledInput
                controlProps={{
                    name: "vendor_Name",
                    control,
                    rules: { required: "此欄位必填" }
                }}
                label="測試input"
                hint="這是hint"
            />
        </FormSTY>
    )
}

export default VendorCreateForm