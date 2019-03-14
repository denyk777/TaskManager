import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
        <nav className='nav-menu'>
            <ul className='nav-menu__list'>
              <li >
                <NavLink to={'/'} exact className='nav-menu__link unactive_todo'
                         activeClassName={'nav-menu__link_active active_todo'}>
                  <h1 className='side-bar__title'>To Do</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/done'} className='nav-menu__link unactive_done'
                         activeClassName={'nav-menu__link_active active_done'}>
                  <h1 className='side-bar__title'>Done</h1>
                </NavLink>
              </li>
            </ul>
        </nav>
      </aside>
    );
  };
};

SideBar.propTypes = {
  className: PropTypes.string
};

SideBar.defaultProps = {
  className: ''
};
