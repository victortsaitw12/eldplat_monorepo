import { CrossIcon, SmallPlusIcon, TrashIcon, PlusIcon } from "evergreen-ui";
import { useEffect, useId, useState } from "react";
import { BodySTY } from "./style";
import CustomTextInputField from "@components/CustomTextInputField";
import InfoItem from "@components/InfoCard/InfoItem";

interface I_Tag {
  label?: string;
  value?: string;
}

interface Props {
  data?: I_Tag[];
}

const DUMMY_DATA = [
  { label: "01", value: "第一車隊" },
  { label: "02", value: "第二車隊" }
];

const FormGenerator: React.FC<Props> = ({ data }) => {
  const [renderedItems, setRenderedItems] = useState<I_Tag[]>([]);

  useEffect(() => {
    // data && setRenderedInputs(DUMMY_DATA);
    setRenderedItems(DUMMY_DATA);
  }, [data]);

  function generateRandomNumberId(length = 8) {
    const chars = "0123456789";
    return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  }

  const handleDelete = (label?: string) => {
    if (renderedItems.length > 1) {
      const newRenderedInputs = renderedItems.filter(
        (item) => item.label !== label
      );
      setRenderedItems(newRenderedInputs);
    }
  };

  const handleCreate = (index: number) => {
    const randomNumberId = generateRandomNumberId();
    const newRenderedInputs = [...renderedItems];
    newRenderedInputs.splice(index + 1, 0, {
      label: randomNumberId,
      value: ""
    });
    setRenderedItems(newRenderedInputs);
  };

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   const newRenderedItems = [...renderedItems];
  //   const index = newRenderedItems.findIndex((item) => item.label === name);
  //   newRenderedItems[index].value = value;
  //   setRenderedItems(newRenderedItems);
  // };

  const NameItem = {
    label: "名稱",
    value: "",
    req: true,
    bold: true,
    listClassName: "",
    editEle: <CustomTextInputField  />
  };

  const PostalCodeItem = {
    label: "名稱",
    value: "",
    req: false,
    bold: true,
    listClassName: "",
    editEle: <CustomTextInputField  />
  };

  const NationItem = {
    label: "郵遞區號",
    value: "",
    req: true,
    bold: true,
    listClassName: "",
    editEle: <CustomTextInputField  />
  };

  const CityItem = {
    label: "國家",
    value: "",
    req: true,
    bold: true,
    listClassName: "",
    editEle: <CustomTextInputField  />
  };

  const AddressItem = {
    label: "城市",
    value: "",
    req: true,
    bold: true,
    listClassName: "",
    editEle: <CustomTextInputField  />
  };

  return (
    <BodySTY>
      {renderedItems.length > 0 &&
        renderedItems.map((tag: I_Tag, index) => {
          return (
            <li className="item-wrapper" key={tag.label}>
              <form className="form">
                <InfoItem isEdit={true} item={NameItem} />
                <div className="row">
                  <InfoItem isEdit={true} item={PostalCodeItem} />
                  <InfoItem isEdit={true} item={NationItem} />
                  <InfoItem isEdit={true} item={CityItem} />
                </div>
                <InfoItem isEdit={true} item={AddressItem} />
              </form>
              <div className="button-wrapper">
                <button className="button">
                  <TrashIcon
                    size={16}
                    onClick={() => handleDelete(tag.label)}
                  />
                </button>
                <button className="button">
                  <PlusIcon size={16} onClick={() => handleCreate(index)} />
                </button>
              </div>
            </li>
          );
        })}
    </BodySTY>
  );
};

export default FormGenerator;
