import React from "react";


const Vegetables = (props) => {
    let cnt = props.initC
  const [counter, setCounter] = React.useState(cnt);

  const handleIncrement = (value) => {
    setCounter(counter + value);
  };

  return (
    <div>
        <div className="vege">
            <h1>{props.name} : </h1>
            <h1>{counter} Kgs</h1>
        </div>
      
        <button onClick={() => handleIncrement(1)}>+</button>
        <button onClick={() => handleIncrement(-1)}>-</button>
    </div>
  )
}

export default Vegetables;