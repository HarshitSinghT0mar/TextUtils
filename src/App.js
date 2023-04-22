import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import React, { useState } from "react";
import { BrowserRouter, Route , Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const[alert, setAlert]=useState(null);

  const showAlert=()=>{

    setAlert('Sucess: Text copied to clipboard');
    setTimeout(()=>{
      setAlert(null);
    },1800)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
    <BrowserRouter>
    
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      {/* <TextForm showAlert={showAlert} mode={mode} /> */}
     
    <Routes>
    {/* <Route exact path="/"></Route> */}

    <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} /> }></Route>
    <Route  path="Home" element={<TextForm showAlert={showAlert} mode={mode} /> } ></Route>
    <Route path="About" element={<About mode={mode}/>}></Route>
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
