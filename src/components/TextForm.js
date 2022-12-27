import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked:" + text);
    let textUpper = text.toUpperCase();
    setText(textUpper);
    props.showAlert("Your text has been converted to Uppercase.", "success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked:" + text);
    let textLower = text.toLowerCase();
    setText(textLower);
    props.showAlert("Your text has been converted to Lowercase.", "success");
  };

  const handleClrClick = () => {
    setText("");
    props.showAlert("Text has been successfully removed.", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    // console.log(text.split(" ").filter((word) => word !== ""));
    // An array is made by spliting the words with spaces. Later, that array is filtered by removing all spaces.
    let clipText = text.split(" ").filter((word) => word !== "");
    setText(clipText.join(" "));
    props.showAlert("Extra spaces are removed from the text.", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change textarea");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.textMode }}>
        <h1>{props.heading}</h1>
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.bgColor,
              color: props.textMode,
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 "
          onClick={handleUpClick}
          /* onClick={
            text.trim() === ""
              ? handleUpClick
              : props.showAlert("There is no text in the box.", "warning")
          } */
        >
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleClrClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.textMode }}>
        <h2>Text Summary</h2>
        <p>
          <b>{text.split(" ").filter((word) => word !== "").length} </b> words
          and <b>{text.trim().length} </b> Character
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter((word) => word !== "").length}</b>{" "}
          minutes will take to read the whole paragraph.
        </p>
        <h2>Preview</h2>
        <p>{text.trim().length > 0 ? text : "Enter a text to preview here."}</p>
      </div>
    </>
  );
}
