import React from 'react';
import App from './App.jsx';
import MovieList from './MovieList.jsx';
import MovieTitle from './MovieTitle.jsx';
import reactDom from 'react-dom';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

    handleChange(e) {
      this.setState({
        searchInput: e.target.value
      })
    }

    search() {
      console.log(this.state.searchInput)
      this.props.onSearch(this.state.searchInput);
    }

  render() {
    return (
      <form>
        <p>
          <input type="text" value={this.state.searchInput} placeholder="Search" onChange={this.handleChange}/>
          {' '}
          Only show movie in list
        </p>
        <button type="button" onClick={this.search}>Submit</button>
      </form>
    );
  }
}

export default SearchBar;