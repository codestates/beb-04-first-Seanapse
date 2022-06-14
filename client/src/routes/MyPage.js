import {useState, useEffect} from 'react'

import Top from '../layouts/Top'
import Gallery from '../layouts/Gallery'
import nftlist from '../dummy/mypagelist'

// import Web3 from 'web3' 

function MyPage() {

    const [keyword, setKeyword] = useState('')
    const [account, setAccount] = useState('')
    // const [web3, setWeb3] = useState()

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
    };

    useEffect(()=> {
        if(typeof window.ethereum !== 'undefined') {
            try {
                // const web = new Web3(window.ethereum)
                // setWeb3(web)
                connectWallet()
            } catch (err) {
              console.log(err)
            }
          }
    }, [])

    return (
        <div className="MyPage">
            <Top account={account} keyword={keyword} changeHandler={setKeyword}/>
            <Gallery nftlist={nftlist} keyword={keyword}/>
        </div>   
    )
}

export default MyPage;

