import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getLastIndexOfSubstringIgnoreCase } from '../utils';

class AutocompleteItem extends Component {
  static highlightSubstring(string, substring) {
    const i = getLastIndexOfSubstringIgnoreCase(string, substring);
    if (i < 0) return string;
    const prestring = string.slice(0, i);
    const highlight = string.slice(i, i + substring.length);
    const poststring = string.slice(i + substring.length);
    return (
      <Fragment>
        {prestring}
        <b>{highlight}</b>
        {poststring}
      </Fragment>
    );
  }

  componentDidMount() {
    this.ensureVisible();
  }

  componentDidUpdate() {
    this.ensureVisible();
  }

  ensureVisible() {
    const { active } = this.props;
    if (active) {
      this.node.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }

  render() {
    const {
      item, active, substringToHighlight, handleOnClick,
    } = this.props;
    return (
      <li
        ref={(node) => {
          this.node = node;
        }}
      >
        <button
          type="button"
          onClick={e => handleOnClick(item, e)}
          className={active ? 'hover' : ''}
        >
          {substringToHighlight
            ? AutocompleteItem.highlightSubstring(item.pathLabel, substringToHighlight)
            : item.label}
        </button>
      </li>
    );
  }
}

AutocompleteItem.propTypes = {
  item: PropTypes.shape({
    pathLabel: PropTypes.string.isRequired,
    itemLabel: PropTypes.string.isRequired,
    items: PropTypes.array,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  substringToHighlight: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default AutocompleteItem;
