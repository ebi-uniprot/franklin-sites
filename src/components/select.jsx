import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  toggleDropdown() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { children, selectedLabel } = this.props;
    const { showMenu } = this.state;
    // const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { setSelectedLabel: this.setSelectedLabel }));
    return (
      <div className="dropdown-container">
        <button type="button" className="button dropdown" onClick={() => this.toggleDropdown()}>
          {selectedLabel}
        </button>
        <div className={showMenu ? 'dropdown-menu dropdown-menu-open' : 'dropdown-menu'}>
          {children}
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.instanceOf(Element).isRequired,
  selectedLabel: PropTypes.string,
};

Select.defaultProps = {
  selectedLabel: 'Select',
};

export default Select;
