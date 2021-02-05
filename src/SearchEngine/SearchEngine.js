import React, { Component } from 'react';
import './SearchEngine.css';

class SearchEngine extends Component {
  state = {
    newSearchParam: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updatePlace(this.state.newSearchParam);
    this.setState({ newSearchParam: "" });
  };

  handleChange = (event) => {
    this.setState({ newSearchParam: event.target.value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="label">
          Location:
          <input
            className="input"
            placeholder="Search weather"
            onChange={this.handleChange}
            value={this.state.newSearchParam}
          ></input>
        </label>
        <button
          className="submit"
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
