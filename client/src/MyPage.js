import styled from 'styled-components'
import profileimage from './userprofile.png'
import ethericon from './ethericon.png'
import {useState, useEffect} from 'react'

const Top = styled.div`
    margin-left:70px;
    margin-right:70px;
`

const Profile = styled.img`
    width: 170px;
    height: 170px;
    margin-bottom:30px;
`

const Username = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-bottom:10px;
`

const Icon = styled.img`
    width:15px;
    height:15px;
`

const Search = styled.input`
    height:35px;
    width:60%;
    border-radius:8px;
    border: solid 2px #EAECEF;
    font-size: 20px;
    margin-top: 10px;
    padding:5px;
`

const NftImage = styled.img`
    max-width: 100%;
`

const Gallery = styled.div`
    margin-right: 50px;
    margin-left: 50px;
    margin-top: 10px;
`

const Nft = styled.div`
    border-radius:10px;
    border: solid 1.5px #EAECEF;  
    max-width: 280px;
    padding: 10px;
    margin-top: 10px;
    margin-left: 20px;
    float: left;
`

const NftCollectionName = styled.p`
    color: rgb(112, 122, 131);
    font-weight: 500;
    font-size: 13px;
`

const NftName = styled.p`
    color: rgb(53, 56, 64);
    font-size: 15px;
    letter-spacing: 0.1px;
    font-weight: 600;
    margin-top: -12px;
    text-align: left;
`

function MyPage() {

    const [keyword, setKeyword] = useState('')
    const [account, setAccount] = useState('')
    const [web3, setWeb3] = useState()

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
    
        setAccount(accounts[0]);
    };

    useEffect(()=> {
        if(typeof window.ethereum !== 'undefined') {
            try {
            //   const web = new Web3(window.ethereum)
            //   setWeb3(web)
            } catch (err) {
              console.log(err)
            }
          }
        connectWallet()
    }, [])

    const ntflist = [
        {
            "collection":"bugs in the end"
            , "name":"bee bee bee"
            , "image":"https://lh3.googleusercontent.com/BOpw6SY96s7mtNVxSGQjthv5P8uNyqoiRXja6z80oavOs0lTfek_b9j-UG3m90NMJYWe6tuB0EY9UwL_4oRJnEdUr9kV9DTJB1Eux5Y=w600"
        }, {
            "collection":"untitled collection"
            , "name":"cheese cat"
            , "image":"https://lh3.googleusercontent.com/RYxx8sOJkWOYQcduv2Xxhl1dArCBMckdIt-G7a0jubsuWIpINsHxapEl0m1pK9Z2Lzzpf5rRvm9CR6378qYP2wrewe1dJjflgWSC8A=w600"
        }
    ]


    return (
        <div className="MyPage">
            <header>헤더</header>
            <Top>
                <div className="background"></div>
                <Profile src={profileimage}></Profile>
                <Username>Unnamed</Username>
                <Icon src={ethericon}/><span className="account">{account}</span>
                <div>
                    <Search placeholder=' 🔍 Search by name' value={keyword} onChange={(e) => {setKeyword(e.target.value)}}/>
                </div>
            </Top>
            <Gallery>
                {ntflist.map((el,index) => {
                    if(keyword !== '' && !el.name.includes(keyword)) {
                        return null;
                    }
                    return (
                        <Nft key={index}>
                            <NftImage src={el.image} alt=""/>
                            <NftCollectionName>{el.collection}</NftCollectionName>
                            <NftName>{el.name}</NftName>
                        </Nft>
                    )
                })}
            </Gallery>
        </div>   
    )
}

export default MyPage;

