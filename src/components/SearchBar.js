import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    search: "",
  };
  onInputChange = (e) => {
    this.setState({ search: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.search);
  };
  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <div className="form__control">
          <input
            type="text"
            className="form__search"
            placeholder="Search"
            onChange={this.onInputChange}
            value={this.state.search}
          />
          <button type="submit" className="form__button">
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
