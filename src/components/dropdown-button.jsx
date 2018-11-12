import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../dist/components/dropdown.css';

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({ showMenu: false });
  }

  componentDidUnMount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  toggleDropdown() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  close() {
    this.setState({ showMenu: false });
  }

  render() {
    const { children, label } = this.props;
    const { showMenu } = this.state;
    return (
      <div
        className="dropdown-container"
        ref={(el) => {
          this.node = el;
        }}
      >
        <button type="button" className="button dropdown" onClick={() => this.toggleDropdown()}>
          {label}
        </button>
        <div className={showMenu ? 'dropdown-menu dropdown-menu-open' : 'dropdown-menu'}>
          {children}
        </div>
      </div>
    );
  }
}

DropdownButton.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
};

export default DropdownButton;
