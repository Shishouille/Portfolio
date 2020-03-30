import styled from 'styled-components';
import background from 'src/assets/images/bg-portfolio.jpg';

const StyledApp = styled.div`
  margin: auto;
  background-image: url(${background});
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
  background-position: unset;
  }
 `;

export default StyledApp;
