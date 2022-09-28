import React, { memo } from "react";

type TPropsCount1 = {
  value: number;
};

function Count1(props: TPropsCount1) {
  console.log(`Count 1`);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        <div>{props.value}</div>        
      </div>
    </>
  );
}

export default memo(Count1);
