import React, { memo } from "react";

type TPropsCount2 = {
  value: number;
};

function Count2(props: TPropsCount2) {
  console.log(`Count 2`);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        <div>{props.value}</div>        
      </div>
    </>
  );
}

export default memo(Count2);
