import styled from 'styled-components';
import { CreatSubmitButton } from '../create';
import { Link } from 'react-router-dom';

const Section = styled.section`
  position: relative;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr) ;
  grid-template-columns: repeat(3, 1fr);

  margin: 50px 0;

  /* link */
  > a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Agency = styled.span`
  font-size: 16px;
`;

const Title = styled.h3`
  grid-row: 2/4;
  grid-column: 1/3;

  font-size: 30px;
  margin: 1em 0;
`

const Owner = styled.div`
  grid-row: 4/5;
  grid-column: 1/3;

  font-size: 15px;
  margin: 10px;
`;

const SellButtonWrapper = styled.div`
  grid-row: 1/5;
  grid-column: 3/4;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DetailHead = ({ name = '', owner = '', isOwner = false, buyHandler = () => { }, sellHandler= () => {} }) => {
  return (
    <Section>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: "#77AFEC", gridRow: "1/2", gridColumn: "1/3" }}><Agency>Seanapse</Agency></Link>
        <Title>{name}</Title>
        <Owner>
          Owned by {<strong>{owner}</strong>}
        </Owner>
        <SellButtonWrapper>
          {isOwner
            ? 
            <CreatSubmitButton onClick={buyHandler}>Buy</CreatSubmitButton>
            :
            <CreatSubmitButton onClick={sellHandler}>Sell</CreatSubmitButton>
          }
        </SellButtonWrapper>
      </Wrapper>
    </Section>
  );
}

export default DetailHead;