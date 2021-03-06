import React, { useState } from "react";
import { globalTransport } from "fronts-react";

const style = {
  padding: 12,
  backgroundColor: "#cccccc",
};

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={style}>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
          globalTransport.emit("increase");
        }}
      >
        App2 Button click {count} time
      </button>
    </div>
  );
};

export default Button;
