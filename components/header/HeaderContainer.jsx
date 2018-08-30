import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  toggleMenu,
  isMenuVisibleSelector
} from '../../ducks/header';

import Header from './Header';

const mapStateToProps = state => ({
  isMenuVisible: isMenuVisibleSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onToggleMenu: toggleMenu
}, dispatch);

const HeaderContainer = props => (
  <Header {...props} />
);

HeaderContainer.propTypes = Header.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
