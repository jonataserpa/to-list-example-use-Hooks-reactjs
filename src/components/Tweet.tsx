import React, { memo } from "react";

type TPropsTweets = {
  id: number;
  name: string;
  handleRemoveTweets: (id: number) => void;
};

function Tweet(props: TPropsTweets) {
  console.log(`Tweet 1:`);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        <div>{props.name}</div>
        <button
          onClick={() => props.handleRemoveTweets(props.id)}
          style={{ marginLeft: 50 }}
        >
          X
        </button>
      </div>
    </>
  );
}

export default memo(Tweet);
