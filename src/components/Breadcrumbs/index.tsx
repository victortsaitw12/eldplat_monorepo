import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "evergreen-ui";

import { DivSTY } from "./style";

interface Route {
  label: string;
  url: string | { pathname: string; query: any };
}

const Breadcrumbs = ({ routes, style }: { routes: Route[]; style?: any }) => {
  const STY = style || {};
  return (
    <DivSTY className="breadcrumbs" style={STY}>
      {routes.map((route, index) => (
        <>
          {index !== 0 && (
            <ChevronRightIcon
              key={`sep-${index}`}
              className="breadcrumbs__separation"
            />
          )}
          <Link
            key={`route-${index}`}
            className="breadcrumbs__route"
            href={route.url}
            replace
          >
            {route.label}
          </Link>
        </>
      ))}
    </DivSTY>
  );
};

export default Breadcrumbs;
