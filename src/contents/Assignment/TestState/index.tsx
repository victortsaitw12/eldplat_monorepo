import React from "react";

function TestState() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    const update = count + 1;
    setCount(update);
  };
  return (
    <div>
      <button style={{ width: "5ch" }} onClick={handleClick}>
        {count}
      </button>
    </div>
  );
}

export default TestState;

{
  /* 插進去component測試的code
import TestState from "@contents/assignment/TestState";

<div>
<div style={{ color: firstDrawerOpen !== "" ? "red" : "inherit" }}>
  OPEN
</div>
<TestState />
</div> 

*/
}
