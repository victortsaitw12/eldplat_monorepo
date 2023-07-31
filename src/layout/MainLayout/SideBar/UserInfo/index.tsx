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
      <div className="title">{companyData?.company_name}</div>
      <div className="user-container">
        <div className="user-info">
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={44}
          />
          {/* <Image
            src="/image/avatar1.jpg"
            alt="user avatar"
            width={44}
            height={44}
          /> */}
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
