import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let textUpper = text.toUpperCase();
    setText(textUpper);
    props.showAlert("Your text has been converted to Uppercase.", "success");
  };

  const handleLoClick = () => {
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
    let clipText = text.split(" ").filter((word) => word !== "");
    setText(clipText.join(" "));
    props.showAlert("Extra spaces are removed from the text.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className=" mt-5 shadow p-3 mb-5 bg-body-tertiary rounded ">
      <div
        className="container"
        style={{ color: props.bgMode === "dark" ? "white" : "#45536c" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.bgMode === "dark" ? "#45536c" : "white",
              color: props.textMode,
            }}
          ></textarea>
        </div>

        <div className="container d-flex justify-content-evenly btn-group my-3">
          <button
            className="btn btn-primary "
            onClick={handleUpClick}
            disabled={text.trim().length === 0}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.trim().length === 0}
            className="btn btn-primary "
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary  "
            onClick={handleClrClick}
          >
            Clear
          </button>
          <button
            disabled={text.trim().length === 0}
            className="btn btn-primary  "
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            disabled={text.trim().length === 0}
            className="btn btn-primary "
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <hr className="hr hr-blurry" />
      <div
        className="container my-3 d-flex flex-column"
        style={{ color: props.textMode }}
      >
        <h2>
          <u>Text Summary </u>
        </h2>
        <div
          className="card my-4 w-50"
          style={{
            backgroundColor: props.bgMode === "dark" ? "#45536c" : "white",
            borderColor: props.bgMode === "dark" ? "#F5F5F5" : "",
            color: props.textMode,
          }}
        >
          <div className="card-body">
            <p>
              <b>{text.split(/\s+/).filter((word) => word !== "").length} </b>{" "}
              words and <b>{text.trim().length} </b> Character
            </p>
            <p style={{ marginBottom: "0" }}>
              <b>
                {0.008 * text.split(" ").filter((word) => word !== "").length}
              </b>{" "}
              minutes will take to read the whole paragraph.
            </p>
          </div>
        </div>
        <h4>Preview</h4>
        <textarea
          className="form-control my-3 "
          rows="6"
          style={{
            resize: "none",
            backgroundColor: props.bgMode === "dark" ? "#45536c" : "white",
            color: props.textMode,
          }}
          readOnly
          value={text.trim().length > 0 ? text : "Nothing to preview"}
        />
      </div>
    </div>
  );
}
