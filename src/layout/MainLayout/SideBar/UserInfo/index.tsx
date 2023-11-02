import React, { useContext } from "react";
import Image from "next/image";
import { Avatar, ChevronDownIcon } from "evergreen-ui";
//
import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function Index(props: any) {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);

  return (
    <BodySTY {...props}>
      <div className="user-container">
        <div className="user-info">
          <Avatar src="/image/avatar1.jpg" name="portrait" size={44} />
          <div className="desp">
            <h4>{companyData?.administrator_name}</h4>
            <p>最高管理員</p>
          </div>
        </div>
        {/* <ChevronDownIcon color="#fff" size={16} /> */}
      </div>
    </BodySTY>
  );
}
export default Index;
