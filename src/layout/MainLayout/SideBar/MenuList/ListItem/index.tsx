import React, { useState } from "react";
import { TickIcon } from "evergreen-ui";
//
import { MenuDataType } from "src/mock-data/side-bar/data";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
//
type SubListItem = NonNullable<MenuDataType[0]["subList"]>[0];

interface Props {
  data: SubListItem;
}
//
function Index({ data }: Props) {
  const router = useRouter();
  const defaultSelect = data.url === router.asPath;
  const [isSelect, setIsSelect] = useState(defaultSelect);
  return (
    <BodySTY
      onClick={() => {
        setIsSelect((prev) => !prev);
        router.push(data.url);
      }}
      active={isSelect}
    >
      <p>{data.name}</p>
      {isSelect && <TickIcon color="#567190" size={14} />}
    </BodySTY>
  );
}
export default Index;
