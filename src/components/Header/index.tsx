import React from 'react';

import { Container, Anchor } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Anchor to="/">Listagem</Anchor>
          <Anchor to="/import">Importar</Anchor>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
