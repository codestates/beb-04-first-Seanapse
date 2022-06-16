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
const Nomal = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 1px;

  border-radius: 50px;
  border: 1px solid #e2e2e2;
  background-color: purple;
`

function Propile({address}) {
  return (
    <div>
      {address !== '' ? <Img src="/userprofile.png"></Img> : <Nomal/> }
    </div>    
  );
}
export default Propile;