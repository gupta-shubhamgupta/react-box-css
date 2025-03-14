import React, {useState} from "react";
import BoxComponent from "./BoxComponent";
import BoxPrint from "./BoxPrint";
import BoxInputCount from "./store/app-store";

export default function App() {
//Add useContext
  const [boxCount, setBoxCount] = useState(0);

  const handleBoxCount = (count) =>{
    setBoxCount(count);
  }

  return (
    <BoxInputCount.Provider value={{
      boxNumbereCount: boxCount
    }}>
      <h1>Hello World!</h1>
      <BoxComponent onBoxCount={handleBoxCount}/>
      <BoxPrint finalBoxCount={boxCount}/>
      </BoxInputCount.Provider> 
  );
}

