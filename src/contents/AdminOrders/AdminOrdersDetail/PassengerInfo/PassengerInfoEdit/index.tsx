import React from "react";
import { Pane, TextInput, Select } from "evergreen-ui";
import { useFormContext } from "react-hook-form";

import DetailList from "@components/DetailList";
import CustomSelect from "@components/CustomSelect";

const PassengerInfoEdit = () => {
    const { register, control } = useFormContext();
    const contact_1 = [
        {
            title: "姓",
            value: <TextInput />
        },
        {
            title: "手機",
            value:
                <Pane style={{ display: "flex", gap: "8px" }}>
                    <CustomSelect
                        selectName="contact_mobile_code"
                        register={register}
                        options={[
                            {
                                value: "886",
                                text: "+886",
                            }
                        ]} />
                    <TextInput style={{ maxWidth: "198px" }} />
                </Pane>
        },
        {
            title: "信箱",
            value: <TextInput />
        },
    ]
    const contact_2 = [
        {
            title: "名",
            value: <TextInput />
        },
        {
            title: "電話",
            value:
                <Pane style={{ display: "flex", gap: "8px" }}>
                    <CustomSelect
                        selectName="contact_phone_code"
                        register={register}
                        options={[
                            {
                                value: "886",
                                text: "+886",
                            }
                        ]} />
                    <TextInput style={{ maxWidth: "198px" }} />
                </Pane>
        },
        {
            title: "電話",
            value:
                <Pane style={{ display: "flex", gap: "8px" }}>
                    <CustomSelect
                        selectName="contact_social_media"
                        register={register}
                        options={[
                            {
                                value: "Line",
                                text: "Line",
                            }
                        ]} />
                    <TextInput style={{ maxWidth: "198px" }} />
                </Pane>
        }
    ]
    return (
        <Pane style={{ padding: "20px", display: "flex" }}>
            <Pane style={{ flex: "1" }}>
                <DetailList listArray={contact_1} />
            </Pane>
            <Pane style={{ flex: "1" }}>
                <DetailList listArray={contact_2} />
            </Pane>
        </Pane>
    );
};
export default PassengerInfoEdit;