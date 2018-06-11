import styled from 'styled-components';
import { darken } from 'polished';
import theme from './theme';

const { colors } = theme;

export const Table = styled.div`
  margin: 10px 0;
`;

export const Head = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.gray};
  padding: 0 15px;
  
  .f1 {
    flex: 1
  }

  .f2 {
    flex: 2
  }

  p {
    font-weight: 500;
  }
`;

export const Body = styled.div`
  p {
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${colors.gray};
  background-color: ${props => props.currentDriver ? colors.lightGray : ''};

  &:hover {
    background-color: ${darken(0.02, colors.white)};
  }

  &:last-child {
    border-bottom: none;
  }

  .f1 {
    flex: 1
  }

  .f2 {
    flex: 2
  }

  .right {
    text-align: right;
  }
`;
