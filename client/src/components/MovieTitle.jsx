import React from 'react';
import App from './App';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import reactDOM from 'react-dom';

// var movieTitleStyle = {
//   margin: '15px'
// }

class MovieTitle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      watched: false
    }
    this.hasWatched = this.hasWatched.bind(this);
  }

  hasWatched() {
    this.setState({
      watched: !this.state.watched
    })
  }

  render() {
    return (
      <div>
        <li style={movieTitleStyle} header={this.props.movie}>
          <button>
            {/* bsStyle={this.state.watched ? "success" : "warning"} */}
            onClick={this.hasWatched.bind(this)}> {this.state.watched ? 'WATCHED' : 'NOT WATCHED'}
            </button>
          </li>
      </div>
    )
  }
}

export default MovieTitle;