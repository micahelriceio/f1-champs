import styled from 'styled-components';
import theme from './theme';
import HeaderBGImage from '../../imgs/fancy-car.jpg';

const { colors, util } = theme;

export const HeaderBase = styled.header`
  color: ${colors.white};
  background-image: url(${HeaderBGImage});
  background-position-y: bottom;
  background-size: cover;
  padding: 15px 0;

  nav {
    display: inline-block;
    background-color: ${colors.primary};
    box-shadow: ${util.boxShadow};
    margin-bottom: 55px;

    .logo {
      width: 138px;
      margin: 20px;
    }

    &:hover {
      animation: wiggle 500ms;
    }
  }

  @keyframes wiggle {
      0% {transform: rotate(5deg);}
      25% {transform: rotate(-5deg);}
      50% {transform: rotate(5deg);}
      75% {transform: rotate(-5deg);}
      100% {transform: rotate(0deg);}
  }
`;
