import React, { Component, Fragment } from 'react';
import findLastSubstringIgnoreCase from '../utils';

class AutoCompleteItem extends Component {
  static highlightSubstring(string, substring) {
    const i = findLastSubstringIgnoreCase(string, substring);
    if (i < 0) return string;
    const prestring = string.slice(0, i);
    const highlight = string.slice(i, i + substring.length);
    const poststring = string.slice(i + substring.length);
    return (
      <Fragment>
        {prestring}
        <b>
          {highlight}
        </b>
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
    const { item, active, substringToHighlight, handleOnClick } = this.props;
    return (
      <li ref={(node) => { this.node = node; }}>
        <button
          type="button"
          onClick={e => handleOnClick(item, e)}
          className={active ? 'hover' : ''}
        >
          {
            substringToHighlight
              ? AutoCompleteItem.highlightSubstring(item.label, substringToHighlight)
              : item.label
          }
        </button>
      </li>
    )
  }
}

export default AutoCompleteItem;
