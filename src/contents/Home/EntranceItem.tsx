import React from "react";
import { useRouter } from "next/router";
import { ItemSTY } from "./style";

interface ItemProps {
  iconImage: React.ReactNode;
  label: string;
  pathUrl: string;
}

const EntranceItem = ({ iconImage, label, pathUrl }: ItemProps) => {
  const router = useRouter();
  return (
    <ItemSTY
      onClick={() => {
        router.push(pathUrl);
      }}
    >
      <div className="icon">{iconImage}</div>
      <div className="entrance-label">{label}</div>
    </ItemSTY>
  );
};
export default EntranceItem;
