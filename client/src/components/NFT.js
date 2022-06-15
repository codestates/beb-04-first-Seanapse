import styled from "styled-components";
import nftlist from '../dummy/mypagelist'
import Gallery from '../layouts/Gallery'

function NFT({searchKeyword}) {

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

  return (
    <Div>
      <Title>{nftlist.length} items Searched!</Title>
      <Gallery nftlist={nftlist} keyword={searchKeyword}/>
    </Div>
  );
}
export default NFT;