import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledFooter = styled.footer`
  width: 70%;
  margin: auto;
  text-align: center;
  font-size: .8em;
  color: ${theme.color.alt};
  border-top: 1px solid rgba(255,255,255, 0.3);
  @media (max-width: 768px) {
    width: 90%;
    font-size: .6em;
  }
 `;

export default StyledFooter;
