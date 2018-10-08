import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../../dist/components/treeSelect.css';
import '../../dist/components/dropdown.css';
import '../../dist/components/auto-complete.css';


function findLastSubstringIgnoreCase(string, substring) {
  return string.toLowerCase().lastIndexOf(substring.toLowerCase());
}

function highlightSubstring(string, substring) {
  const i = findLastSubstringIgnoreCase(string, substring);
  if (i < 0) return;
  let prestring = string.slice(0, i);
  let highlight = string.slice(i, i+substring.length);
  let poststring = string.slice(i+substring.length);
  return <Fragment>{prestring}<b>{highlight}</b>{poststring}</Fragment>;
}

class Item extends Component {

  componentDidMount() {
    this.ensureVisible();
  }

  componentDidUpdate() {
    this.ensureVisible();
  }

  ensureVisible() {
    const { active } = this.props;
    if (active) {
      const node = ReactDOM.findDOMNode(this);  
      node.scrollIntoView();
    }
  }

  render() {
    const { node, active, substringToHighlight } = this.props
    return (
      <li>
        <span
          onClick={e => this._handleNodeClick(node, e)}
          className={active ? 'hover' : ''}
        >
          {!!substringToHighlight ? highlightSubstring(node.label, substringToHighlight) : node.label}
        </span>
      </li>
    )
  }
}

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props
    this.state = {
      textInputValue: '',
      showDropdown: false,
      hoverIndex: -1,
      data,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ref = React.createRef();
  }

  filterOptions(items, query) {
    return items.filter(item => findLastSubstringIgnoreCase(item.label, query) >= 0);
  }

  handleChange(event) {
    const value = event.target.value;
    let { hoverIndex } = this.state;
    // hoverIndex = !!value.trim() ? hoverIndex : -1;
    this.setState({
      showDropdown: !!value.trim(),
      textInputValue: value,
      hoverIndex: -1,
    });
  }

  isValidChoice(string) {
    const { data } = this.state;
    return data.some(x => x.label.toLowerCase() === string.toLowerCase().trim());
  }

  buildOptions(data, substringToHighlight, hoverIndex) {

    return (
      <ul className={open ? 'open' : ''}>
        {data.map((node, index) => (
          <Item
            node={node}
            active={hoverIndex===index}
            substringToHighlight={substringToHighlight}
            key={node.label}
          />
        ))}
      </ul>
    );
  }

  // handleShow(ref) {
  //   this.refs[ref].scrollIntoView();
  // }

  _handleNodeClick(node) {
    this.setState({
      hoverIndex: -1,
      showDropdown: false,
      textInputValue: node.label,
    });
  }

  handleOnKeyDown(event) {
    if (event.key === 'ArrowUp') {
      let { hoverIndex } = this.state;
      if (hoverIndex <= 0) {
        hoverIndex = -1;
      } else {
        hoverIndex -= 1;
        // this.handleShow(hoverIndex);
      }
      this.setState({ hoverIndex });
    } else if (event.key === 'ArrowDown') {
      let { hoverIndex } = this.state;
      const { data, textInputValue } = this.state;
      const options = this.filterOptions(data, textInputValue);
      hoverIndex = Math.min(options.length - 1, hoverIndex + 1);
      this.setState({ hoverIndex });
      // this.handleShow(hoverIndex);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      hoverIndex,
      data,
      textInputValue,
      showDropdown,
    } = this.state;
    if (showDropdown && hoverIndex >= 0) {
      const options = this.filterOptions(data, textInputValue);
      const chosen = options[hoverIndex];
      console.log(this.isValidChoice(chosen.label));
      console.log(chosen);
      this.setState({
        hoverIndex: -1,
        showDropdown: false,
        textInputValue: chosen.label,
      });
    } else {
      // const chosen = hoverIndex === -1 ? textInputValue : options[hoverIndex];
      console.log(textInputValue);
      console.log(this.isValidChoice(textInputValue));
    }
  }

  render() {
    // console.log(this.state.data);
    const { textInputValue, showDropdown, data, hoverIndex } = this.state;
    return (
      <div className="dropdown">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={textInputValue} onChange={this.handleChange} onKeyDown={this.handleOnKeyDown} />
        </form>
        <div className={showDropdown ? 'autcomplete-menu dropdown-menu-open' : 'autcomplete-menu'}>
          {this.buildOptions(this.filterOptions(data, textInputValue), textInputValue, hoverIndex)}
        </div>
      </div>
    );
  }
}

AutoComplete.defaultProps = {
  data: [],
};

export default AutoComplete;
