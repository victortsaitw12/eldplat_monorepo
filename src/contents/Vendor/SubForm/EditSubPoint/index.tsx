import React from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";

//@sevices

//@layout
import FlexWrapper from "@layout/FlexWrapper";

//@components
import CheckboxField from "@components/CheckboxField";
import InfoBox from "@components/InfoBox";
import { Label } from "@components/Button/Primary";
// import 

//@mock-data
import { vedor_code_text } from "@mock-data/vendors/03VendorCodeList";
interface I_Props {
    onClickCancel?: () => void;
}
const EditSubPoint = ({ onClickCancel }: I_Props) => {
    const mock_subdata_1 = [
        {
            req: true,
            label: "名稱",
            editEle: [
                <input key="subpoint_name"></input>
            ]
        },
        {
            req: true,
            label: "統一編號",
            editEle: [
                <input key="subpoint_uni"></input>
            ]
        },
        {
            req: true,
            label: "負責人",
            editEle: [
                <input key="subpoint_owner"></input>
            ]
        },
        {
            req: true,
            label: "公司地址",
            editEle: [
                <input key="address1"></input>
            ]
        },
        {
            label: " ",
            editEle: [
                <input key="address2" value={"地址2"}></input>
            ]
        },
        {

            label: " ",
            editEle: [
                <input key="subpoint_city" value={"城市"}></input>,
                <input key="subpoint_state" value={"州省區"}></input>,
            ]
        },
        {

            label: " ",
            editEle: [
                <input key="subpoint_zipcode" value={"郵政編碼"}></input>,
                <input key="subpoint_country" value={"國家"}></input>
            ]
        },
        {
            req: true,
            label: "公司電話",
            editEle: [
                <input key="subpoint_zipcode" value={"+886"} disabled={true}></input>,
                <input key="subpoint_country" value={"02999888"}></input>
            ]
        },
        {
            req: true,
            label: "公司傳真",
            editEle: [
                <input key="subpoint_zipcode" value={"+886"} disabled={true}></input>,
                <input key="subpoint_country" value={"02999888"}></input>
            ]
        },
    ];
    const mock_subdata_2 = [
        {
            req: true,
            label: "公司信箱",
            editEle: [
                <input key="company_mail"></input>
            ]
        },
        {
            req: true,
            label: "公司網址",
            editEle: [
                <input key="company_website"></input>
            ]
        },
        {
            req: true,
            label: "主要聯絡人",
            editEle: [
                <input key="contact_name"></input>
            ]
        },
        {
            label: "主要聯絡人電話",
            editEle: [
                <input key="contact_phone"></input>
            ]
        },
        {
            label: " ",
            editEle: [
                <input key="contact_mobile"></input>
            ]
        },
        {
            label: "主要聯絡人信箱",
            editEle: [
                <input key="contact_mail"></input>
            ]
        },
        {
            label: "標籤",
            editEle: []
        },
    ];
    return (
        <FormSTY>
            <FlexWrapper>
                <InfoBox infoData={mock_subdata_1} infoTitle="富豪車隊" isEdit={true} />
                <InfoBox style={{ marginTop: "47px" }} infoData={mock_subdata_2} isEdit={true} />
            </FlexWrapper>
            <div className="form_footer">
                <button onClick={onClickCancel} className="cancel">取消</button>
                <Label text="確定" />
            </div>
        </FormSTY>
    )
}

export default EditSubPoint;