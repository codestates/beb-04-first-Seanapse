import styled from "styled-components";

function InputBox() {

    const Div = styled.div`
        border: 2px solid #E2E2E2;
        border-radius: 10px;

        padding: 10px;
        margin: 0px;    
    `
    const Input = styled.input`    
        font-weight: 500;
        font-size: 1.5ch;

        border: 0px;
        margin-left: 8px;

        min-width: 400px;
    `    

    return (
      <Div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <Input type='text' placeholder="Search items, sollections, and accounts"/>
      </Div>
    );
  }
  export default InputBox;