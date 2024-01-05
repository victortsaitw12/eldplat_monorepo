import React from "react"
import { Pane, Ul } from "evergreen-ui"
import { BodySTY } from "./style"
import Collapse from "@components/Collapse";
import DetailGrid from "@components/DetailGrid";

interface I_Props {
  modificationRecord: any
}

const OrderModifyInfo = ({ 
  modificationRecord
}: I_Props) => {

  const mappingModificationRecord = (adjustments: any[]) => {
    const mappingTitle = (details:any[]) => {
      if(details.length === 0) return <div></div>
      if(details.length === 1) return (<div>{details[0]}</div>)

      return (
        <ul>
          {details.map((item:any, index:number) => {
            return <li key={index}>
              {item}
            </li>
          })}
        </ul>
      )
    }

    return adjustments.map((item) => {
      return {
        title: <div className="title-item">
          <div>業務已調整訂單：</div>
          {mappingTitle(item.details)}
        </div>,
        value: item.timestamp,
      }
    })
  }

  return (
    <BodySTY>
      <Collapse title="修改紀錄" opened={true}>
        <DetailGrid 
          listArray={mappingModificationRecord(modificationRecord.adjustments)}
          isCollapse={true}
          title={(<div className="title-wrap">
            <span>您提出修改需求：{modificationRecord.requestContent}</span>
            <span>{modificationRecord.requestTimestamp}</span>
          </div>)}
        />
      </Collapse>
    </BodySTY>
  )
}

export default OrderModifyInfo