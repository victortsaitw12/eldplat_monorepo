import React from "react"
import { BodySTY } from "./style"

export interface I_listItem {
  title: React.ReactNode | string;
  value: React.ReactNode | string;
}

interface I_Props {
  listArray: I_listItem[];
}

const ServiceList = ({ listArray }: I_Props) => {
  return (
    <BodySTY>
      { listArray.length !== 0 && listArray.map((item, index) => {
        return (
          <div key={index}>
            <div className="title">{item.title}</div>
            <div className="value">{item.value}</div>
          </div>
        )
      })}
    </BodySTY>
  )
}

export default ServiceList