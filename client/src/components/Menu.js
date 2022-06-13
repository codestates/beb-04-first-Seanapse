import styled from "styled-components";

function Menu() {

    const Div = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
    
    `

    const Button = styled.button`
        border: 1px solid black;
    `

    return (
      <Div>
        <input type='text'/>
        <Button>Explore</Button>
        <Button>Stats</Button>
        <Button>Resources</Button>
        <Button>Create</Button>
        <Button>Propile</Button>
        <Button>Wallet</Button>
      </Div>
    );
  }
  export default Menu;