import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "evergreen-ui";

import { DivSTY } from "./style";

interface Route {
  label: string;
  url?: string | { pathname: string; query: any };
}

const Breadcrumbs = ({
  className,
  routes,
  style,
  splitEle = <ChevronRightIcon className="breadcrumbs__separation" />
}: {
  className?: string;
  routes: Route[];
  style?: any;
  splitEle?: React.ReactNode;
}) => {
  const STY = style || {};
  return (
    <DivSTY className={"breadcrumbs " + className} style={STY}>
      {routes.map((route, index) => (
        <div className="breadcrumbs-item" key={`route-${index}`}>
          {index !== 0 && splitEle}
          {route.url ? (
            <Link className="breadcrumbs__route" href={route.url} replace>
              {route.label}
            </Link>
          ) : (
            <div>{route.label}</div>
          )}
        </div>
      ))}
    </DivSTY>
  );
};

export default Breadcrumbs;
