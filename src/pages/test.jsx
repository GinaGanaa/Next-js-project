import { useState } from "react";
export default function Test() {
  //   function changeNum() {
  //     num = 10;
  //     console.log("num is running", num);
  //   }
  const [num, setNum] = useState(0);

  function changeNum() {
    setNum(10);
  }

  return (
    <div style={{ color: "white ", padding: "20px" }}>
      <p>{num}</p>
      <button onClick={changeNum}>Change Num</button>
    </div>
  );
}
