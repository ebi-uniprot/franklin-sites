import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../dist/components/dropdown.css';

const defaultLabel = 'Select';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { label } = this.props;
    if (label !== prevProps.label) {
      this.setState({ showMenu: false });
    }
  }

  toggleDropdown() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { children, label } = this.props;
    const { showMenu } = this.state;
    return (
      <div className="dropdown-container">
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

Select.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string,
};

Select.defaultProps = {
  label: defaultLabel,
};

export default Select;
