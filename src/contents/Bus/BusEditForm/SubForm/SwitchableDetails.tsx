import React, { useState } from "react";
import Image from "next/image";
import { FilePicker } from "evergreen-ui";
import { FilePickBtnSTY } from "@components/FormCard/style";
import HorizatalInput from "@components/HookForm/Input/HorizatalInput";
import Select from "@components/HookForm/Select";
import Card from "@components/Card";
import FlexWrapper from "@layout/FlexWrapper";
import { SubFromProps } from "./type";
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
      <Card title="身分識別">
        <HorizatalInput
          label="車輛編號"
          errorMessage={errors?.bus?.bus_no?.message as string}
          hint="This is a text hint!"
          {...register("bus.bus_no")}
        />
        <HorizatalInput
          label="車輛名稱"
          errorMessage={errors?.bus?.bus_name?.message as string}
          {...register("bus.bus_name")}
        />
        <HorizatalInput
          label="車輛識別碼VIN"
          errorMessage={errors?.bus?.vin?.message as string}
          {...register("bus.vin")}
        />
        <HorizatalInput
          label="車種"
          errorMessage={errors?.bus?.bus_type?.message as string}
          {...register("bus.bus_type")}
        />
        <HorizatalInput
          label="座位數"
          errorMessage={errors?.bus?.bus_seat?.message as string}
          {...register("bus.bus_seat")}
        />
        <HorizatalInput
          label="品牌"
          errorMessage={errors?.bus?.make?.message as string}
          {...register("bus.make")}
        />
        <HorizatalInput
          label="車型"
          errorMessage={errors?.bus?.model?.message as string}
          {...register("bus.model")}
        />
        <HorizatalInput
          label="車牌"
          errorMessage={errors?.bus?.license_plate?.message as string}
          {...register("bus.license_plate")}
        />
        <HorizatalInput
          label="出廠年份"
          errorMessage={errors?.bus?.year?.message as string}
          {...register("bus.year")}
        />
        <HorizatalInput
          label="車齡"
          errorMessage={errors?.bus?.age?.message as string}
          {...register("bus.age")}
        />
        <HorizatalInput
          label="配置"
          errorMessage={errors?.bus?.trim?.message as string}
          {...register("bus.trim")}
        />
        <HorizatalInput
          label="註冊省/州"
          errorMessage={errors?.bus?.registration_province?.message as string}
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
      <Card title="分類">
        <div>
          <div>車輛群組</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus.bus_group"
            options={[
              { label: "北部", value: "01" },
              { label: "中部", value: "02" },
              { label: "南部", value: "03" }
            ]}
          />
        </div>
        <div>
          <div>主要駕駛</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus.operator"
            options={[
              { label: "郭金發", value: "郭金發" },
              { label: "林添財", value: "林添財" }
            ]}
          />
        </div>
        <div>
          <div>狀態</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus.status"
            options={[
              { label: "活躍中", value: "01" },
              { label: "閒置中", value: "02" },
              { label: "在維修廠", value: "03" },
              { label: "已販售", value: "04" },
              { label: "終止服務", value: "05" }
            ]}
          />
        </div>
        <div>
          <div>所有者</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus.ownership"
            options={[
              { label: "擁有的", value: "01" },
              { label: "租來的", value: "02" },
              { label: "出租中", value: "03" },
              { label: "客戶的", value: "04" }
            ]}
          />
        </div>
      </Card>
      <Card title="其他細項">
        <HorizatalInput
          label="顏色"
          errorMessage={errors?.bus?.color?.message as string}
          {...register("bus.color")}
        />
        <div>
          <div>車身類型</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus.body_type"
            options={[{ label: "加長型", value: "01" }]}
          />
        </div>
        <div>
          <div>車身子類型</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus.body_subtype"
            options={[{ label: "高底盤", value: "01" }]}
          />
        </div>
        <HorizatalInput
          label="建議零售價"
          errorMessage={errors?.bus?.mspr?.message as string}
          {...register("bus.mspr")}
        />
      </Card>
      <Card title="標籤">
        <div>
          <div>標籤</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus.label"
            options={[{ label: "高底盤", value: "01" }]}
          />
        </div>
      </Card>
    </div>
  );
}

export default Details;
