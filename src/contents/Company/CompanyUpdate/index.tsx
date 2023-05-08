import React, { useContext, useEffect, useState } from "react";
import { BodySTY } from "./style";
import {
  Pane,
  Text,
  Button,
  FloppyDiskIcon,
  IconButton,
  FullscreenIcon,
  majorScale,
  SmallCrossIcon,
  Heading
} from "evergreen-ui";
import { useRouter } from "next/router";

import Basic from "./Basic";
import CountrySet from "./CountrySet";
import CompanyRule from "./CompanyRule";
import Admin from "./Admin";
import Contact from "./Contact";
import LeaveSet from "./LeaveSet";
import {
  CompanyContext,
  I_Company_Context
} from "@contexts/companyContext/companyProvider";
import { numberValidation, phoneValidation } from "@utils/inputValidation";

interface I_UpdateCompany_Props {
  submitForm: (data: any) => void;
  onCancel: () => void;
}

function CompanyUpdate({ submitForm, onCancel }: I_UpdateCompany_Props) {
  const C_data = useContext<I_Company_Context>(CompanyContext);
  const [errMsg, setErrMsg] = useState<string | boolean>("");

  const contactTelValid = numberValidation(
    C_data.companyData.company_Dt.contact_Tel
  );

  const handleSaveAll = () => {
    if (contactTelValid !== true) {
      return setErrMsg(contactTelValid);
    } else {
      submitForm(C_data.companyData);
    }
  };

  return (
    <BodySTY>
      <Pane display="flex" justifyContent="space-between" className="title-bar">
        <Text className="title-label">公司設定</Text>
        {errMsg && <Heading color="red">{errMsg}</Heading>}
        <Pane className="right-function">
          <Button
            iconBefore={FloppyDiskIcon}
            className="save"
            onClick={handleSaveAll}
          >
            全部儲存
          </Button>
          <IconButton icon={FullscreenIcon} />
          <IconButton
            icon={SmallCrossIcon}
            marginRight={majorScale(1)}
            onClick={onCancel}
          />
        </Pane>
      </Pane>

      {/* 新增表格區塊們 */}
      <Pane className="add-blocks">
        <Pane className="left-blocks">
          <Basic />
          <CountrySet />
          <CompanyRule />
        </Pane>
        <Pane className="right-blocks">
          <Admin />
          <Contact />
          <LeaveSet />
        </Pane>
      </Pane>
    </BodySTY>
  );
}

export default CompanyUpdate;
