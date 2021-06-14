import React, { useState} from "react"
import './App.css';
import { Nav, Navbar } from "react-bootstrap";
import {Switch, Route, Link} from "react-router-dom";
import MovieData from './Components/MovieData'
import MovieList from './Components/MovieList'
import AddList from "./Components/AddList";
import MovieFilter from './Components/MovieFilter'
import MovieTrailer from './Components/MovieTrailer'

const App = () => {
  //useState()
  const [movies, setMovieData] = useState(MovieData);
  const [SearchByName, setSearchByName] = useState("");
  const [SearchByRating, setSearchByRating] = useState(0)
  const filteredMovieName = (e) => {
  setSearchByName(e.target.value);
  };
  const filteredMovieRating = (e) => {
  setSearchByRating(e);
  };
  const Add = (NewMovie) => {
  setMovieData([...movies, NewMovie]);
  };
  return(
  <div className="App">
  <div className="Navbar">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="responsive-navbar-nav"> 
      <Link to="/">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="responsive-navbar-nav">
        
      <Nav>
          <MovieFilter
          SearchByName={filteredMovieName}
          SearchByRating={filteredMovieRating}
          />
      </Nav>
      </Navbar.Collapse>
  </Navbar>
  </div>
  <Switch>
  <Route exact path="/">
  <MovieList movie={movies} name={SearchByName} rating ={SearchByRating} />
  </Route>
  {movies.map(el=><Route path={`/description/${el.id}`}><MovieTrailer
            title={el.title}
            trailer={el.trailer}
            description={el.description}
            rating={el.rating}
          />
          </Route>)}
  </Switch>
  <Nav.Link className="Ajouter">
          <AddList Add={Add} />
  </Nav.Link>
  <footer>
  <hr/>
  <h5>Watch Movie @2021</h5>
  </footer>
</div>
  )
}

export default App;
