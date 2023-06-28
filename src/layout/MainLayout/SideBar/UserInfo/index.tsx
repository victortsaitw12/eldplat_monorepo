import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "evergreen-ui";
//
import { BodySTY } from "./style";

function Index() {
  return (
    <BodySTY>
      <div className="title">雄獅通運公司</div>
      <div className="user-container">
        <div className="user-info">
          <Image
            src="/image/avatar1.jpg"
            alt="user avatar"
            width={44}
            height={44}
          />
          <div className="desp">
            <h4>王鈞樺</h4>
            <p>最高管理員</p>
          </div>
        </div>
        <ChevronDownIcon color="#fff" size={16} />
      </div>
    </BodySTY>
  );
}
export default Index;
