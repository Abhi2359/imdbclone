import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element ={<h1>Hellow World</h1>}></Route>
          <Route path ="movies/:id" element ={<h1></h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
