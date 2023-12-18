import React, { useState } from "react";
import { TickIcon } from "evergreen-ui";
import cx from "classnames";
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
  console.log(router.asPath);
  console.log("🕯️router", router);
  // console.log("data.url", data.url);
  const defaultSelect =
    data.name !== "入門" &&
    data.url !== "/" &&
    (data.url === router.asPath || router.asPath.indexOf(data.url) >= 0);
  const targetUrl = data.url[0];
  const [isSelect, setIsSelect] = useState(defaultSelect);
  const isDisabled = data.url === null && !data.subList;
  return (
    <BodySTY
      onClick={() => {
        if (!data.url) return;
        setIsSelect((prev) => !prev);
        router.push(data.url);
      }}
      className={cx({
        active: isSelect,
        disable: isDisabled
      })}
    >
      <p>{data.name}</p>
      {/* {isSelect && <TickIcon color="#567190" size={14} />} */}
    </BodySTY>
  );
}
export default Index;
