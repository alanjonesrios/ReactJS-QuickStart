import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from './styles';
// import { } from 'react-icons/md';
// import logo from '../../assets/images/logo.svg';
// <img src={logo} alt="logo" />

function Header({ about }) {
  return (
    <Container>
      <Link to="/" />
    </Container>
  );
}

export default connect(state => ({
  about: state.about,
}))(Header);
