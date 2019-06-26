import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import "./test.css";

class DropdownMenu extends Component {
  static propTypes = {
    config: PropTypes.array.isRequired
  };

  getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.title;
  };

  getMenuItem = (menuItem, depthLevel, index) => {
    let title = this.getMenuItemTitle(menuItem, index, depthLevel);

    if (menuItem.submenu && menuItem.submenu.length > 0) {
      return (
        <li>
          {title}
          <DropdownMenu config={menuItem.submenu} submenu={true} />
        </li>
      );
    } else {
      return <li>{title}</li>;
    }
  };

  render = () => {
    let { config } = this.props;

    let options = [];
    config.map((item, index) => {
      options.push(this.getMenuItem(item, 0, index));
    });

    if (this.props.submenu && this.props.submenu === true)
      return <ul>{options}</ul>;

    return <ul className="dropdown-menu">{options}</ul>;
  };
}

export default DropdownMenu;
