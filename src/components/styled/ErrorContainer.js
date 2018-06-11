import styled from 'styled-components';
import theme from './theme';

const { colors, util } = theme;

export default styled.div`
  display: inline-block;
  margin: 20px auto;
  text-align: center;
  padding: 10px;
  border: 1px solid ${colors.gray};
  box-shadow: ${util.boxShadow};

  .title {
    font-size: 22px;
  }
`;
