import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleLoClick = () => {
    const upperText = text.toLowerCase();
    setText(upperText);
  };
  const handleDelClick = () => {
    setText("");
  };

  const handleCpyClick = (e) => {
    navigator.clipboard.writeText(text);
    props.showAlert();
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Enter your text here"
            onChange={handleOnChange}
            value={text}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <button className="btn btn-success mx-1 my-1" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-success mx-1 my-2" onClick={handleLoClick}>
          convert to lowercase
        </button>
        <button className="btn btn-danger mx-1 my-2" onClick={handleDelClick}>
          Clear text
        </button>
        <h3>Text Summary</h3>
        {console.log(typeof text)}

        <p className="my-2">
          {text.split(/[,.\s]/g).filter((e)=> {return e.length!==0;}).length} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p
          className="preview"
          style={{ color: props.mode === "dark" ? "Tomato" : "red" }}
        >
          {text}
        </p>
        <button
          className="btn btn-primary btn-sm my-2 "
          data-toggle="tooltip"
          title="Copy to clipboard"
          onClick={handleCpyClick}
        >
          Copy
        </button>
      </div>
    </>
  );
}
