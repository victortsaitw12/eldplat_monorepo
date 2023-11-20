import { BodySTY } from "./style";

import { I_AuthFuncItem } from "@services/role/getOneRole";
import InfoBox from "@components/InfoBox";
import Accordion, { I_AccordionItem } from "@components/Accordion";
import { Switch } from "evergreen-ui";

const AuthPanel = ({ data, isEdit }: I_Props) => {
  //------ functions ------//
  const getDataFitAccordion = (data: any) => {
    return data.map((item: any) => {
      const prepItem: I_AccordionItem = {
        label: (
          <div className="accordion">
            {isEdit && !item.elements ? (
              <div className="accordion__item">
                <div className="accordion__title">{item["func_name"]}</div>
                <div className="accordion__radio">
                  <input type="radio" id="1" name={item["func_no"]} />
                  <label>顯示並可用</label>
                  <input type="radio" id="2" name={item["func_no"]} />
                  <label>僅供檢視</label>
                  <input type="radio" id="3" name={item["func_no"]} />
                  <label> 不顯示</label>
                </div>
              </div>
            ) : (
              <div className="accordion__item">
                <div className="accordion__label">{item["func_name"]}</div>
                <Switch checked={item["func_enb"]} />
              </div>
            )}
          </div>
        )
      };

      if (item["elements"] && item["elements"].length > 0) {
        prepItem.children = getDataFitAccordion(item["elements"]);
      }

      return prepItem;
    });
  };

  // ------- render ------- //

  const dataFitInfoBox = data?.map((item) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: <Accordion data={getDataFitAccordion([item])} />,
      value: <Accordion data={getDataFitAccordion([item])} />
    };
  });
  return (
    <BodySTY>
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="權限" />
    </BodySTY>
  );
};

export default AuthPanel;

interface I_Props {
  data: I_AuthFuncItem[];
  isEdit: boolean;
}
