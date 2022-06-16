import styled from "styled-components";
import {connectWallet, createNFT} from "../utils/wallet";

const Button = styled.button`
display: flex;
justify-content: center;

min-width: 25px;
min-height: 25px;

border: 0px;
background-color: transparent;

margin-right: 25px;
`

function Wallet({address, setAddress}) {
   
  const walletconnect = async() =>{
    connectWallet()
    .then((res)=>{
      console.log('addrss:', res);
      setAddress(res);
    })
  }

  // const create = async() =>{
  //   const a = await createNFT(address, "ipfs://QmXu8xCjS1rd3qEpxZnNFwmc1QZfsRjdqCMMneaExM9CZW");
  //   console.log(a);
  // }

  
  return (
    <Button onClick={walletconnect}>
        <img src={'/wallet.png'}></img>
    </Button>         
  );
}
export default Wallet;