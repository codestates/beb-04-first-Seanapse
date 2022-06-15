import { NFT } from "../components/export";
//import styled from 'styled-components';

function Home({searchKeyword, setNftList, nftList} ) {
  return (
    <NFT searchKeyword={searchKeyword} nftList={nftList} setNftList={setNftList} />
  );
}

export default Home;
