import React from "react";
import Home from "./home";
import Register from "./register";
import Login from "./login";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Dashboard from "./dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
