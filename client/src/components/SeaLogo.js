import { Link } from "react-router-dom";
import styled from 'styled-components';
    

function Logo() {

    const Button = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;
        border: 0px;
    `

    return (
      <div>
        <Button>          
            <Link to='/'><img src={"https://static.opensea.io/Logos/opensea-pride.svg"}/>OpenSea</Link>
        </Button>    
      </div>
    );
  }

  export default Logo;