import React from "react";
import { MenuIcon } from "evergreen-ui";
//
import { DivSTY } from "./style";

function Index(props: any) {
  return (
    <DivSTY {...props}>
      <div className="header" onClick={props.handleCloseMenu}>
        <MenuIcon className="header__icon" size={20} />
        <span className="header__title text">車輛管理</span>
      </div>
    </DivSTY>
  );
}
export default Index;
