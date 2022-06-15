import { ethers } from 'ethers';
import SeanapseNFTAbi from '../dummy/SeanapseNFT.json'

const SEANAPSE_NFT_CONTRACT_ADDRESS = "0xe18585AE18ea624E361f71BE760DFA1050baaA99"

const getNftList = async() => {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    let contract = new ethers.Contract(SEANAPSE_NFT_CONTRACT_ADDRESS, SeanapseNFTAbi, provider);

    const name =  await contract.name();
    const symbol =  await contract.symbol();
    const totalSupply =  await contract.totalSupply();

    let arr = []
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i)
    }

    let nftList = []
    for(let tokenId of arr) {
        let tokenURI =  await contract.tokenURI(tokenId)
        nftList.push({name,symbol,tokenId,tokenURI})
    }
    return nftList
}

const connectWallet = async () => {
    if(window.ethereum){
        try{
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
          return accounts[0];
        }catch(err){
          alert(err.code);
        }
    }
    else{
        alert("Please install metamask!"); 
    }
}

const createNFT = async (recipient, tokenURI) => {
    try{
        const provider = await new ethers.providers.Web3Provider(window.ethereum);     
        const signer = await provider.getSigner();
        let contract = await new ethers.Contract(SEANAPSE_NFT_CONTRACT_ADDRESS, SeanapseNFTAbi, signer, provider);
        // let sContract = await contract.connect(signer);
        return contract.mintNFT(recipient, tokenURI);
    }
    catch(err){
        alert(err);
    }
    
}



export {getNftList, connectWallet, createNFT};