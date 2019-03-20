import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/dropdown.scss';

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.setContainerRef = this.setContainerRef.bind(this);
    this.documentMousedownEventListening = false;
  }

  componentWillUnmount() {
    if (this.documentMousedownEventListening) {
      document.removeEventListener('mousedown', this.handleClick);
    }
  }

  setContainerRef(ref) {
    this.containerRef = ref;
  }

  handleClick(e) {
    if (this.containerRef.contains(e.target)) {
      return;
    }
    this.setState({ showMenu: false });
  }

  toggleDropdown() {
    if (!this.documentMousedownEventListening) {
      document.addEventListener('mousedown', this.handleClick, false);
      this.documentMousedownEventListening = true;
    }
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
      <div className="dropdown-container" ref={this.setContainerRef}>
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
  /**
   * Content revealed on click
   */
  children: PropTypes.instanceOf(Object).isRequired,
  /**
   * Label to be display by the button
   */
  label: PropTypes.string.isRequired,
};

export default DropdownButton;
