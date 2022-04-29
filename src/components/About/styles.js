import styled from 'styled-components';

const AboutStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4rem ;
  padding: 1rem;

  div {
    align-self: center;
    font-family: 'Harry Potter', sans-serif;
    font-size: 2rem;
    max-width: 45%;
    text-align: justify;
  }

  div:nth-child(1) {
    border: 1rem double #000000;
    padding: 4rem;
  }

  img {
    box-shadow: 0.5rem 0.5rem 0.5rem #000000;
    height: 50vh;
  }
`;

export default AboutStyle;
