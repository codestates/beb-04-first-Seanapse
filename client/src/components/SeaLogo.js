import { Link } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
display: flex;
flex-grow: 1;

background-color: transparent;
border: 0px;
margin-left: 25px;
`
const StyledLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;

font-weight: 900;
font-size: 3ch;
text-decoration: none;
color: inherit;
`

const Img = styled.img`
margin-right: 10px;
width: 40px;
`

function Logo({setSearchKeyword, setNftList}) {

  const keywordInitialization = () =>{
    setNftList([]);
    setSearchKeyword('');
  }

  return (
    <div>
      <Button onClick={keywordInitialization}>          
        <StyledLink to='/'><Img src={"https://static.opensea.io/Logos/opensea-pride.svg"}/>OpenSea</StyledLink>
      </Button>    
    </div>
  );
}
export default Logo;