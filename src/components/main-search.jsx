import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownButton from './dropdown-button';
import '../../dist/components/main-search.css';

class MainSearch extends Component {
  constructor(props) {
    super(props);
    const { searchTerm } = props;
    this.state = {
      searchTerm: searchTerm || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    const { handleSearchSubmit } = this.props;
    const { searchTerm } = this.state;
    handleSearchSubmit(searchTerm);
    e.preventDefault();
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="main-search">
        <DropdownButton label="UniProtKB">
          <ul>
            <li>
              <button type="button">UniProtKB - the UniProt knowledgebase</button>
            </li>
            <li>
              <button type="button">UniRef</button>
            </li>
            <li>
              <button type="button">UniParc</button>
            </li>
            <li>
              <button type="button">Proteomes</button>
            </li>
            <li>
              <button type="button">Publications</button>
            </li>
            <li>
              <button type="button">Keywords</button>
            </li>
          </ul>
        </DropdownButton>
        <input
          type="text"
          className="main-search__input"
          onChange={this.handleChange}
          value={searchTerm}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    );
  }
}

MainSearch.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

MainSearch.defaultProps = {
  searchTerm: '',
};

export default MainSearch;
