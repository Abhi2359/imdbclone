import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";

function App() {

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))
}, [])
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element ={<Home/>}></Route>
          <Route path ="movie/:id" element ={<h1>Movie Detail Page</h1>}></Route>
          <Route path ="movies/:type" element ={<h1>Movie List Page</h1>}></Route>
          <Route path ="/*" element ={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
