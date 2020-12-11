import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import MovieTitle from './MovieTitle.jsx';
import reactDom from 'react-dom';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      movie: [],
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    var movieArray = [];
    this.state.movies.forEach(function(movie) {

      if (movie.title.toLowerCase().includes(e.toLowerCase())) {
        movieArray.push(movie);
      }
    })
    this.setState({
      movies: movieArray
    })
  }

  render() {
    return(
      <div>
        <SearchBar onSearch={this.onSearch}/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }

};


export default App;