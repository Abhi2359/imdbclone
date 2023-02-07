import {useEffect ,useState} from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element ={<Home/>}></Route>
          <Route path ="movie/:id" element ={<h1>ihhojkhnuihnio</h1>}></Route>
          <Route path ="movies/:type" element ={<Movie}></Route>
          <Route path ="/*" element ={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
