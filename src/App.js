// import logo from "./logo.svg";

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

import { useState } from "react";
import AddingText from "./AddingText";
import Alert from "./Alert";
// import About from "./About";
import "./App.css";
// import Home from "./Home";
import Navbar from "./Navbar";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  let [mode, setMode] = useState("primary");

  let [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {

    setAlert({

      message: message,

      type: type

    });

    setTimeout(() => {

      setAlert(null);

    }, 1500);

  };

  let toggleMode = () => {

    if (mode === "light") {

      setMode("dark");

      document.title = "Text --Customizer Application : Dark Mode";

      showAlert("Dark Mode Has Been Enabled", "success");

      // setInterval(() => {

      //   document.title = "This Application Is Just Amazing";

      // }, 2000);

      // setInterval(() => {

      //   document.title = "Install It Now";

      // }, 1500);

    } else {

      setMode("light");

      document.title = "Text --Customizer : Light Mode";

      showAlert("Light Mode Has Been Enabled", "success");

    }

  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Demo Website" mode={mode} toggleMode={toggleMode}></Navbar>
        {/* aboutText="About Us"  */}
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About></About>}> */}
              {/* <About></About> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<AddingText showAlert={showAlert} heading="Enter Your Text Here" mode={mode}></AddingText>}> */}
              <AddingText showAlert={showAlert} heading="Enter Your Text Here" mode={mode}></AddingText>
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

{/* <About></About> */ }
{/* <Home></Home> */ }