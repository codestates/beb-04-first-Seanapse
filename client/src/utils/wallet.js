import { ethers } from 'ethers';

import seanapseNftAbi from './SeanapseNFT.json'

const SEANAPSE_NFT_CONTRACT_ADDRESS = '0xe18585AE18ea624E361f71BE760DFA1050baaA99'

async function getNftList() {
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    let contract = new ethers.Contract(SEANAPSE_NFT_CONTRACT_ADDRESS, seanapseNftAbi, provider);
    let totalSupply = await contract.totalSupply()

    if(totalSupply === 0) {
        return null
    }

    let arr = []
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i)
    }

    let nftList = []
    for(let tokenId of arr) {
        let owner = await contract.ownerOf(tokenId)
        let tokenURI =  await contract.tokenURI(tokenId)
        fetch("https://ipfs.io/ipfs/" + tokenURI.substr(7))
        .then(res=> res.json())
        .then(out => {
            let name = out.name
            let image = out.image
            nftList.push({name, image, tokenId, owner, out})
        })
        if(tokenId === arr.length) {
            return nftList
        }
    }
}

async function getNft(tokenId) {
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    let contract = new ethers.Contract(SEANAPSE_NFT_CONTRACT_ADDRESS, seanapseNftAbi, provider);
    let owner = await contract.ownerOf(tokenId)
    let tokenURI =  await contract.tokenURI(tokenId)
    let network = await provider.getNetwork(1);
    return fetch("https://ipfs.io/ipfs/" + tokenURI.substr(7))
    .then(res=> res.json())
    .then(out => {
        const imagePath = "https://ipfs.io/ipfs/" + (out.image).substr(7)
        const nftInfo = {
            "owner": owner
            , "name": out.name
            , "image": imagePath
            , "description": out.description
            , "attributes": out.attributes
            , "contract":  SEANAPSE_NFT_CONTRACT_ADDRESS
            , "standard": "ERC-721"
            , "network": network.name
            , "tokenId": tokenId
        }
        return nftInfo
    })
}

const connectWallet = async () => {
    if(window.ethereum){
        try{
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
          alert('지갑 연결 성공!');
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
        let contract = await new ethers.Contract(SEANAPSE_NFT_CONTRACT_ADDRESS, seanapseNftAbi, signer, provider);
        // let sContract = await contract.connect(signer);
        return contract.mintNFT(recipient, tokenURI);
    }
    catch(err){
        alert(err);
    }
    
}



export {getNftList, connectWallet, createNFT, getNft};
