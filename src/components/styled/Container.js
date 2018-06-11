import styled from 'styled-components';
import theme from './theme';

const { grid, media } = theme;

export default styled.div`
  width: 100%;
  padding: 0 ${grid.paddingPhone};

 @media (min-width: ${media.tablet}) {
    padding: 0 ${grid.paddingTablet};
  }

 @media (min-width: ${media.desktop}) {
    max-width: ${media.desktop};
    margin: 0 auto;
  }

 @media (min-width: ${media.desktopLg}) {
    max-width: ${media.desktopLg};
  }
`;
