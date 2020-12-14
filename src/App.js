import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [isError, setIsError] = useState(false);
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#4747a4").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#4747a4"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${isError ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              hexColor={color.hex}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
