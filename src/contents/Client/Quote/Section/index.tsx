import React from "react"
import { BodySTY } from "./style"

interface I_Props {
  title?: string;
  children: React.ReactNode;
}

const Section = ({ 
  title = "", 
  children 
}: I_Props) => {
  return (
    <BodySTY className="section">
      {title && <div className="section-title"> { title } </div>}
      <div className="section-content">
        { children }
      </div>
    </BodySTY>
  )
}

export default Section