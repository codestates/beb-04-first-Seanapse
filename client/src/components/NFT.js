import { useState, useEffect } from "react";
import styled from "styled-components";
import Gallery from '../layouts/Gallery'
import { getNftList } from '../utils/wallet'
const Div = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 1500px;
  min-height: 600px;

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
  justify-items: start;
`

const Loding = styled.img`
  width: 200px;
  height: 200px;
  align-self: center;
`

const NftDiv = styled.div`
  display: flex;
  flex-grow: 1;
  width: 200px;
  height: 200px;
  align-self: center;
`

function NFT({searchKeyword, nftList, setNftList}) {

  const [loading, setLoading] = useState(true);

  async function requestNftList() {
    let nftList = await getNftList()
    setNftList(()=>[...nftList]);
  }

    useEffect(() => {      
      setLoading(false);
      // setNftList(()=>[]);
      requestNftList()
      .then(()=>{      
        setLoading(true)
      })   
  }, [])

  return (
    <Div>
      <Title>{nftList.length === 0 ? 0 : nftList.length+1} items Searched!</Title>
      <NftDiv>
        {loading ? <Gallery address={''} nftlist={nftList} keyword={searchKeyword}/> : <Loding src="https://i.stack.imgur.com/kOnzy.gif"/>}
      </NftDiv>
    </Div>
  );
}
export default NFT;