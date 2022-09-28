import React, { memo } from "react";

type TPropsCount1 = {
  value: number;
  setValueCount: any;
  color?: string;
};

function CountUseCallback1(props: TPropsCount1) {
  console.log(`CountUseCallback1 1`);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        <div>
          <button style={{ color: props.color}} onClick={props.setValueCount}>Increment - {props.value}</button>
        </div>
      </div>
    </>
  );
}

export default memo(CountUseCallback1);
