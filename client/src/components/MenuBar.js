import Logo from './SeaLogo';
import Menu from './Menu';
import styled from 'styled-components';

function MenuBar( {setSearchKeyword} ) {
    
    const Bar = styled.div`
        display: flex;
        flex-direction: row;

        border: 0.5px solid gray;
        margin: 0px;
        padding : 10px;

        flex-grow: 1;
    `   

    return (
      <Bar>
        <Logo setSearchKeyword={setSearchKeyword}></Logo>
        <Menu setSearchKeyword={setSearchKeyword}></Menu>
      </Bar>
    );
  }
  export default MenuBar;