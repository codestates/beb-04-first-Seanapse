import Logo from './SeaLogo';
import Menu from './Menu';
import styled from 'styled-components';

const Bar = styled.div`
display: flex;
flex-direction: row;

width: 100%;

border: 0.5px solid gray;
margin: 0px;
padding : 10px;

flex-grow: 1;
`   

function MenuBar( {setSearchKeyword ,address, setAddress} ) {

  return (
    <Bar>
      <Logo setSearchKeyword={setSearchKeyword}></Logo>
      <Menu setSearchKeyword={setSearchKeyword} address={address} setAddress={setAddress}></Menu>
    </Bar>
  );
}
export default MenuBar;