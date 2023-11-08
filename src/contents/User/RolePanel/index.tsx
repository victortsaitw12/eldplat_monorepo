import { Select, TextInput, Textarea } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_RoleItem } from "@services/role/getRoleList";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";
import Accordion, { getDataFitAccordion } from "@components/Accordion";

const RolePanel = ({ data, isEdit }: I_Props) => {
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );
  //------ functions ------//
  const getAccordion = (data: any[]) => {
    return data.map((item: any, i: number) => {
      return <Accordion key={`org-${i}`} data={item} isTop={false} />;
    });
  };

  // ------- render ------- //
  const dataFitAccordion = getDataFitAccordion(
    data,
    "org_no",
    "org_name",
    "sublayer"
  );
  const roleAccordion = getAccordion(dataFitAccordion);

  const dataFitInfoBox = [
    {
      readonly: false,
      req: false,
      label: "",
      editEle: <div>{roleAccordion}</div>,
      value: data.module_name || "--"
    }
  ];

  return (
    <BodySTY className="role">
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="平台角色" />
    </BodySTY>
  );
};

export default RolePanel;

interface I_Props {
  data: I_RoleItem;
  isEdit: boolean;
}
