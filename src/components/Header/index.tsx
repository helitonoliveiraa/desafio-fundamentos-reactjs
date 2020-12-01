import React, { useState } from 'react';

import { Container, Anchor } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [focusLeft, setFocusLeft] = useState(true);
  const [focuRight, setFocusRight] = useState(false);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Anchor
            to="/"
            onClick={() => setFocusLeft(!focusLeft)}
            isLeft={focusLeft}
          >
            Listagem
          </Anchor>
          <Anchor
            to="/import"
            onClick={() => setFocusRight(!focuRight)}
            isRight={focuRight}
          >
            Importar
          </Anchor>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
