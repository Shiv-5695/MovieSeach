
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './page/home/home';
import Movie from './page/home/movieDetail/movie';
import MovieList from './components/card/movieList/movieList';
import Header from './components/card/header/Header';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App
