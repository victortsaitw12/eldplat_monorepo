import React, { useContext } from "react";
import { MenuIcon } from "evergreen-ui";
//
import { DivSTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function Index(props: any) {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);

  return (
    <DivSTY {...props}>
      <div className="header" onClick={props.handleCloseMenu}>
        <MenuIcon className="header__icon" size={20} />
        <span className="header__title text">{companyData?.company_name}</span>
      </div>
    </DivSTY>
  );
}
export default Index;
