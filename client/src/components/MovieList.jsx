import React from 'react';
import App from './App.jsx';
import SearchBar from './SearchBar.jsx';
import MovieTitle from './MovieTitle.jsx';
import reactDom from 'react-dom';

const MovieList = (props) => {

  return (
    <ul className="movies">
      {props.movies.map((movie, index) => (

        <li key={movie.title}>
          <span className='title'>
            Movie: {movie.title}
            {/* <input defaultValue="Done" type="checkbox"/> */}
          </span>
        </li>)
      )}
    </ul>
  );
}

export default MovieList;