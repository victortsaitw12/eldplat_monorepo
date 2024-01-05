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
  // console.log("🕯️router", router);
  // console.log("data.url", data.url);
  const defaultSelect =
    data.name !== "入門" &&
    router.asPath !== "/" &&
    (data.url === router.asPath ||
      data.url[0] === router.asPath ||
      (Array.isArray(data.url) &&
        data.url.some((item) => item.includes(router.pathname))));
  const targetUrl = Array.isArray(data.url) ? data.url[0] : data.url;
  const [isSelect, setIsSelect] = useState(defaultSelect);
  const isDisabled = data.url === null && !data.subList;
  return (
    <BodySTY
      onClick={() => {
        if (!data.url) return;
        setIsSelect((prev) => !prev);
        router.push(targetUrl);
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
