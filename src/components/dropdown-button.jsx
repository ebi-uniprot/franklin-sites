import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/dropdown.scss';

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      buttonHeight: 0,
    };
    this.buttonRef = createRef();
    this.handleClick = this.handleClick.bind(this);
    this.setContainerRef = this.setContainerRef.bind(this);
    this.documentMousedownEventListening = false;
  }

  componentDidMount() {
    if (this.buttonRef.current) {
      const { height } = this.buttonRef.current.getBoundingClientRect();
      this.setState({ buttonHeight: height });
    }
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
    const { children, label, className } = this.props;
    const { showMenu, buttonHeight } = this.state;
    return (
      <div className="dropdown-container" ref={this.setContainerRef}>
        <button
          type="button"
          className={`button dropdown ${className}`}
          onClick={() => this.toggleDropdown()}
          ref={this.buttonRef}
        >
          {label}
        </button>
        <div
          className={
            showMenu ? 'dropdown-menu dropdown-menu-open' : 'dropdown-menu'
          }
          style={{ top: buttonHeight }}
        >
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
  /**
   * Additional CSS classnames to apply to button (eg secondary, tertiary)
   */
  className: PropTypes.string,
};

DropdownButton.defaultProps = {
  className: '',
};

export default DropdownButton;
