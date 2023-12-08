import { Group, EditIcon, DotIcon } from "evergreen-ui";
import React from "react";
import { useRouter } from "next/router";
import { DivSTY } from "./style";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";
import Image from "next/image";

interface I_Props {
  isEdit?: boolean;
  data?: any;
  children?: any;
}

function DataOverview({ isEdit = false, data, children }: I_Props) {
  const router = useRouter();

  if (!data) return <p>Loading</p>;

  return (
    <DivSTY>
      <div className={"profile-wrapper"}>
        <Image
          src="/image/Photo.jpg"
          alt="user"
          width={52}
          height={65}
          className="user-photo"
        />
        <div className="info-wrapper">
          <div className="row g-12">
            <span className="headline">{data.info.user_name}</span>
            <span className="headline">JUN-YI ZHONG</span>
            <span>🏳️‍🌈 {data.info.driver_country_name}</span>
          </div>
          <div className="row g-4 paragraph">
            <span>{data.info.dsph_group_name}</span>
            <DotIcon />
            <span>{data.info.dsph_area_name}</span>
            <DotIcon />
            <span>{data.info.license_lvl}</span>
            <DotIcon />
            <span>中文/英文</span>
          </div>
        </div>
      </div>
      <div className={"insert-node"}>{children}</div>
    </DivSTY>
  );
}

export default DataOverview;
