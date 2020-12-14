import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [alert, setAlert] = useState("");
  const background = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearInterval(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${background})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
