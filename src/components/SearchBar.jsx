import React from "react";
import "./SearchBar.css";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      showWarning: false,
    };
  }

  onInputChange = (e) => {
    let { value } = e.target;
    this.setState({
      term: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.term) {
      this.setState({ showWarning: true });
    } else {
      this.props.onSearchSubmit(this.state.term);
      this.setState({ showWarning: false, term: "" });
    }
  };

  renderWarning = () => {
    if (this.state.showWarning) {
      return (
        <div className="ui negative message warning-message">
          <div className="header" data-test="warning-message">
            Please enter a search term!
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="ui segment" data-test="component-search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              data-test="input-field"
            />
          </div>
          <div className="submit-wrapper">
            <button
              className="ui button"
              onClick={this.onFormSubmit}
              data-test="submit-button"
            >
              Search
            </button>
            {this.renderWarning()}
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
