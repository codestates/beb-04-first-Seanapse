import { ethers } from 'ethers';
import seanpaseNtfAbi from './SeanapseNFT.json'

const SEANAPSE_NFT_CONTRACT_ADDRESS = '0xe18585AE18ea624E361f71BE760DFA1050baaA99'

async function getNftList() {
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    let contract = new ethers.Contract(SEANAPSE_NFT_CONTRACT_ADDRESS, seanpaseNtfAbi, provider);
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
        // fetch(tokenURI)
        // .then(res=> res.json())
        // .then(out => {
        //     let name = out.name
        //     let image = out.image
        //     nftList.push({name, image, tokenId, owner})
        // })

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

export {getNftList, connectWallet};