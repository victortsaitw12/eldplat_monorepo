import React, { useState } from "react";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import HorizontalSelect from "@components/HookForm/Select/HorizontalSelect";
import Card from "@components/Card";
import { SubFromProps } from "./type";
import FlexWrapper from "@layout/FlexWrapper";
import ContactRender from "./ContactEdit/Render";
import ContactEdit from "./ContactEdit/Edit";
import SingleSelect from "@components/HookForm/Select/SingleSelect";
function Details({
  hide,
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) {
  return (
    <FlexWrapper>
      <FlexWrapper flexDirection="column">
        <Card title="基本資料">
          <HorizatalInput
            label="客戶編號"
            disabled={true}
            errorMessage={errors?.customer_no?.message}
            {...register("customer_no")}
          />
          <HorizatalInput
            label="名稱"
            errorMessage={errors?.customer_name?.message}
            hint="輸入暱稱以區分此車輛"
            isRequire={true}
            {...register("customer_name")}
          />
          <HorizatalInput
            label="統一編號"
            errorMessage={errors?.customer_gui_no?.message}
            isRequire={true}
            {...register("customer_gui_no")}
          />
          <HorizatalInput
            label="負責人"
            errorMessage={errors?.customer_owner?.message}
            isRequire={true}
            {...register("customer_owner")}
          />
        </Card>
        <FlexWrapper>
          <Card title="分類">
            <SingleSelect
              control={control}
              isDisabled={isDisabled}
              name="customer_typ"
              options={[
                { label: "公司", value: "01" },
                { label: "個人", value: "02" }
              ]}
            />
          </Card>
          <Card title="標籤">
            <SingleSelect
              control={control}
              isDisabled={isDisabled}
              name="labels"
              options={[{ label: "標籤1", value: "01" }]}
            />
          </Card>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <Card title="聯絡方式">
          {isDisabled ? (
            <ContactRender />
          ) : (
            <ContactEdit
              control={control}
              register={register}
              errors={errors}
            />
          )}
        </Card>
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default Details;
