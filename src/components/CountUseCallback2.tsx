import React, { memo } from "react";

type TPropsCount1 = {
  value: number;
  setValueCount: any;
};

function CountUseCallback2(props: TPropsCount1) {
  console.log(`CountUseCallback 2`);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        <button onClick={props.setValueCount}>Increment - {props.value}</button>     
      </div>
    </>
  );
}

export default memo(CountUseCallback2);
