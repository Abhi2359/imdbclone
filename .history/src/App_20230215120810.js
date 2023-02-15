
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/movie';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  exact path ="/" component ={<Home/>}></
          <Route path ="movie/:id" element ={<Movie/>}></
          <Route path ="movies/:type" element ={<MovieList/>}></
          {/* <Route path ="/*" element ={<h1>Error Page</h1>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
