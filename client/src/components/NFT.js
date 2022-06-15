import styled from "styled-components";
// import nftlist from '../utils/mypagelist'
import Gallery from '../layouts/Gallery'

const Div = styled.div`
display: flex;
flex-direction: column;

margin-right: 70px;
margin-left: 70px;
margin-top: 30px;
padding: 20px;

border: 3px solid #e2e2e2;
border-radius: 12px;
`

const Title = styled.div`
display:flex;
padding-left: 70px;
`

function NFT({searchKeyword, nftList}) {
  return (
    <Div>
      <Title>{nftList.length} items Searched!</Title>
      <Gallery nftlist={nftList} keyword={searchKeyword}/>
    </Div>
  );
}
export default NFT;
