import styled from 'styled-components';
import { darken } from 'polished';
import theme from './theme';

const { colors, util } = theme;

export default styled.div`
  background-color: ${colors.white};
  box-shadow: ${util.boxShadow};
  margin-bottom: 20px;
  margin-top: ${props => props.pullUp ? '-50px' : 0};
  animation: ${props => props.animate ? 'slideUp 500ms' : ''};

  .panel-header {
    padding: 10px;
    border-bottom: 1px solid ${colors.gray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.black};
    color: white;
    margin-bottom: 20px;
  }

  .panel-body {}

  .button-link {
    color: ${colors.white};
    background-color: ${colors.primary};
    border: none;
    padding: 6px 14px;
    text-decoration: none;

    &:hover {
      background-color: ${darken(0.05, colors.primary)};
    }
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
