import React, { useContext } from "react";
import { MenuIcon } from "evergreen-ui";
//
import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function Index(props: any) {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);
  const handleBackTo = () => {
    router.push("/");
  };
  return (
    <BodySTY {...props}>
      <MenuIcon size={20} onClick={props.handleCloseMenu} />
      <span className="title">{companyData?.company_name}</span>
    </BodySTY>
  );
}
export default Index;
