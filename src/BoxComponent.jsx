import React, { useRef } from "react";

export default function BoxComponent({ onBoxCount }) {

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onBoxCount(inputRef.current.value);

    }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>Enter Number of Box to be print</label>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
}
