import React, {useState} from "react";
import BoxComponent from "./BoxComponent";
import BoxPrint from "./BoxPrint";

export default function App() {

  const [boxCount, setBoxCount] = useState(0);

  const handleBoxCount = (count) =>{
    setBoxCount(count);
  }

  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <BoxComponent onBoxCount={handleBoxCount}/>
      <BoxPrint finalBoxCount={boxCount}/>
      </React.Fragment> 
  );
}

