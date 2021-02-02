import React, { Component } from 'react';

class SearchEngine extends Component {
  state = {
    newSearchParam: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updatePlace(this.state.newSearchParam);
  };

  handleChange = (event) => {
    this.setState({ newSearchParam: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="search weather"
          onChange={this.handleChange}
        ></input>
        <button
          type="submit"
          disabled={this.state.newSearchParam.length < 4 ? true : false}
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchEngine;
