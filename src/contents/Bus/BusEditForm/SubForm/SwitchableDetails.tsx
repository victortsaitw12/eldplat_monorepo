import React, { useState } from "react";
import Image from "next/image";
import { FilePicker } from "evergreen-ui";
import { FilePickBtnSTY } from "@components/FormCard/style";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import HorizontalSelect from "@components/HookForm/Select/HorizontalSelect";
import Card from "@components/Card";
import { SubFromProps } from "./type";
import DottedSelect from "@components/HookForm/Select/DottedSelect";
import FlexWrapper from "@layout/FlexWrapper";
function Details({
  hide,
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  return (
    <div style={{ display: hide ? "none" : "block" }}>
      <FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Card title="身分識別">
            <HorizatalInput
              label="車輛編號"
              errorMessage={errors?.bus?.bus_no?.message}
              {...register("bus.bus_no")}
            />
            <HorizatalInput
              label="車輛名稱"
              errorMessage={errors?.bus?.bus_name?.message}
              hint="輸入暱稱以區分此車輛"
              isRequire={true}
              {...register("bus.bus_name")}
            />
            <HorizatalInput
              label="車輛識別碼VIN"
              errorMessage={errors?.bus?.vin?.message}
              isRequire={true}
              {...register("bus.vin")}
            />
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              isRequire={true}
              label="車種"
              name="bus.bus_type"
              options={[{ label: "小客車", value: "01" }]}
            />
            <HorizatalInput
              label="座位數"
              errorMessage={errors?.bus?.bus_seat?.message}
              isRequire={true}
              {...register("bus.bus_seat")}
            />
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              isRequire={true}
              label="品牌"
              name="bus.make"
              options={[{ label: "Volvo", value: "01" }]}
            />
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              label="品牌"
              name="bus.model"
              options={[{ label: "BOSS", value: "01" }]}
            />
            <HorizatalInput
              label="車牌"
              errorMessage={errors?.bus?.license_plate?.message}
              isRequire={true}
              {...register("bus.license_plate")}
            />
            <HorizatalInput
              label="出廠年份"
              errorMessage={errors?.bus?.year?.message}
              isRequire={true}
              hint="例如：1999 年、2012 年等"
              {...register("bus.year")}
            />
            <HorizatalInput
              label="車齡"
              errorMessage={errors?.bus?.age?.message}
              {...register("bus.age")}
            />
            <HorizatalInput
              label="配置"
              hint="例如：SE 特別版、LE 豪華版、XLE 極致豪華版等"
              errorMessage={errors?.bus?.trim?.message}
              {...register("bus.trim")}
            />
            <HorizatalInput
              label="註冊省/州"
              errorMessage={errors?.bus?.registration_province?.message}
              {...register("bus.registration_province")}
            />
            <FilePickBtnSTY>
              <label className="inputFileTitle">圖片</label>
              <FilePicker
                // name="photo_url"
                multiple={false}
                onChange={(file) => setImageFile(file[0])}
              />
              {imageFile ? (
                <Image
                  src={URL.createObjectURL(imageFile)}
                  width={250}
                  height={250}
                  alt="bus_image"
                />
              ) : (
                <p className="hintText">無檔案...</p>
              )}
            </FilePickBtnSTY>
          </Card>
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Card title="分類">
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              isRequire={true}
              name="bus.bus_group"
              label="車輛群組"
              options={[
                { label: "北部", value: "01" },
                { label: "中部", value: "02" },
                { label: "南部", value: "03" }
              ]}
            />

            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              isRequire={true}
              label="主要駕駛"
              name="bus.operator"
              options={[
                { label: "郭金發", value: "郭金發" },
                { label: "林添財", value: "林添財" }
              ]}
            />

            <DottedSelect
              control={control}
              isDisabled={isDisabled}
              name="bus.status"
              label="狀態"
              isRequire={true}
              options={[
                { label: "活躍中", value: "01", color: "#52BD94" },
                { label: "已售出", value: "02", color: "#8EA8C7" },
                { label: "終止服務", value: "03", color: "#D14343" },
                { label: "在維修廠", value: "04", color: "#FFB020" },
                { label: "閒置中", value: "05", color: "#3670C9" }
              ]}
            />
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              label="所有者"
              isRequire={true}
              name="bus.ownership"
              options={[
                { label: "擁有的", value: "01" },
                { label: "租來的", value: "02" },
                { label: "出租中", value: "03" },
                { label: "客戶的", value: "04" }
              ]}
            />
          </Card>
          <Card title="其他細項">
            <HorizatalInput
              label="顏色"
              errorMessage={errors?.bus?.color?.message}
              {...register("bus.color")}
            />

            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              label="車身類型"
              hint="例如：敞篷車、轎跑車、皮卡、轎車等"
              name="bus.body_type"
              options={[{ label: "加長型", value: "01" }]}
            />
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              label="車身子類型"
              hint="例如：加長駕駛室、雙排座駕駛室等"
              name="bus.body_subtype"
              options={[{ label: "高底盤", value: "01" }]}
            />
            <HorizatalInput
              label="建議零售價"
              errorMessage={errors?.bus?.mspr?.message}
              {...register("bus.mspr")}
            />
          </Card>
          <Card title="標籤">
            <HorizontalSelect
              control={control}
              label="標籤"
              isDisabled={isDisabled}
              name="bus.label"
              options={[{ label: "高底盤", value: "01" }]}
            />
          </Card>
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
}

export default Details;
