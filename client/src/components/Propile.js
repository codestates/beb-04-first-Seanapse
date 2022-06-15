import styled from "styled-components";

const Div = styled.div`
background-color: transparent;

border: 1.5px solid #E2E2E2;
border-radius: 50px;

width: 25px;
height: 25px;
margin-left: 15px;
margin-right: 15px;
`
const Img = styled.img`
width: 25px;
height: 25px;
margin-left: 15px;
margin-right: 15px;
margin-top: 5px;
`

function Propile() {
  return (
    <Img src="userprofile.png"></Img>
  );
}
export default Propile;