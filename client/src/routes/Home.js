import { NFT } from "../components/export";

function Home({searchKeyword, setNftList, nftList} ) {

  return (
    <NFT searchKeyword={searchKeyword} nftList={nftList} setNftList={setNftList} />    
  );
}

export default Home;
