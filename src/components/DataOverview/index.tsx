import { Group, EditIcon, DotIcon } from "evergreen-ui";
import React from "react";
import { useRouter } from "next/router";
import { DivSTY } from "./style";
import Image from "next/image";
import { Fragment } from "react";

interface I_Props {
  title?: string;
  subtitle?: any;
  infoArray?: any;
  hasImage?: boolean;
}

function DataOverview({
  title,
  subtitle,
  infoArray,
  hasImage = true
}: I_Props) {
  const router = useRouter();

  if (!infoArray) return <p>Loading</p>;

  return (
    <DivSTY>
      {hasImage && (
        <Image
          src="/image/Photo.jpg"
          alt="user"
          width={52}
          height={65}
          className="user-photo"
        />
      )}
      <div className="info-wrapper">
        <div className="row g-12">
          <span className="headline">{title}</span>
          <span>{subtitle}</span>
        </div>
        <div className="row g-4 paragraph">
          {infoArray.map((item: any, index: number) => {
            return (
              <Fragment key={index}>
                <span>{item}</span>
                {index < infoArray.length - 1 && <DotIcon />}
              </Fragment>
            );
          })}
        </div>
      </div>
    </DivSTY>
  );
}

export default DataOverview;
