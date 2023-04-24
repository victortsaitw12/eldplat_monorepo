import React from "react";
import { StarSTY } from "./style";

interface I_Star {
  status?: "empty" | "half" | "full";
}

function Star({ status = "empty" }: I_Star) {
  return <StarSTY status={status} />;
}

export default Star;
