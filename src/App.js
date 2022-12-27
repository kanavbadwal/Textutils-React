import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  /* const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "dimgray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }; */

  // Website Dark Mode ------------------
  const [bgMode, setBgMode] = useState("light");
  const [bgColor, setBgColor] = useState("white");
  const [textMode, setTextMode] = useState("black");

  const toggleMode = () => {
    if (bgMode === "light") {
      setBgMode("dark");
      setTextMode("white");
      setBgColor("#30536c");
      // setBgColor("#45536c");
      document.body.style.backgroundColor = "#30536c";
      showAlert("Dark Mode has been enabled.", "success");
    } else {
      setBgMode("light");
      setTextMode("black");
      setBgColor("white");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled.", "success");
    }
  };
  //--------------------------------------------

  // Alert -------------------------------------

  // !Use showAlert to assign values to alert.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      // types can be primary, secondary, success, warning, info, light, dark and danger.
      // https://getbootstrap.com/docs/5.2/components/alerts/
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // --------------------------------------------

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
        <Navbar
          title="TextUtils"
          bgMode={bgMode}
          textMode={textMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* 
            exact is used to avoid using of component of one page on another like,
            /users --> component 1
            /users/home --> component 2
            React will use component 1 even if you go one /home page because it partially matches the link.
            */}

            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  bgMode={bgMode}
                  textMode={textMode}
                  bgColor={bgColor}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
                />
              }
            ></Route>

            <Route
              exact
              path="/about"
              element={
                <About
                  bgMode={bgMode}
                  textMode={textMode}
                  bgColor={bgColor}
                  toggleMode={toggleMode}
                />
              }
            ></Route>
          </Routes>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
