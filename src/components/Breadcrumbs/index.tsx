import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "evergreen-ui";

import { DivSTY } from "./style";

interface Route {
  label: string;
  url?: string | { pathname: string; query: any };
}

const Breadcrumbs = ({
  routes,
  style,
  linkStyle,
  splitEle = <ChevronRightIcon className="breadcrumbs__separation" />
}: {
  routes: Route[];
  style?: any;
  linkStyle?: any;
  splitEle: React.ReactNode;
}) => {
  const STY = style || {};
  return (
    <DivSTY className="breadcrumbs" style={STY}>
      {routes.map((route, index) => (
        <div className="breadcrumbs-item" key={`route-${index}`}>
          {index !== 0 && splitEle}
          {route.url ? (
            <Link
              style={linkStyle}
              className="breadcrumbs__route"
              href={route.url}
              replace
            >
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
