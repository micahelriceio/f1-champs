import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBase } from './styled/header';
import Container from './styled/Container';
import f1Logo from '../imgs/f1_logo_white.svg';

const Header = () => (
  <HeaderBase>
    <Container>
      <nav>
        <Link to="/">
          <img className="logo" src={f1Logo} alt="logo" />
        </Link>
      </nav>
    </Container>
  </HeaderBase>
);

export default Header;
