import styled from "styled-components";
import walletImg from '../wallet.png';
import { ethers } from "ethers";
import {useState} from 'react';

function Wallet() {

    const [myProvider, setMyProvider] = useState('');
    const [mySigner, setMySigner] = useState('');
    const [myContract, setMyContract] = useState('');
    const [myAddress, setMyAddress] = useState('');

    const Button = styled.button`
        display: flex;
        justify-content: center;

        min-width: 25px;
        min-height: 25px;

        border: 0px;
        background-color: transparent;

    `
    const ConnetWallet = () =>{
      if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const provider = new ethers.providers.JsonRpcProvider(); //infura
        setMyProvider(provider);

        const signer = provider.getSigner();
        setMySigner(signer);        
        // const daiAddress = "0x6A0be12d4d8a8EacE5AB38767aE20dd00d9dE60B" //컨트랙주소
        // const daiAbi = [
        //   {
        //     "inputs": [],
        //     "stateMutability": "nonpayable",
        //     "type": "constructor"
        //   },
        //   {
        //     "anonymous": false,
        //     "inputs": [
        //       {
        //         "indexed": true,
        //         "internalType": "address",
        //         "name": "owner",
        //         "type": "address"
        //       },
        //       {
        //         "indexed": true,
        //         "internalType": "address",
        //         "name": "approved",
        //         "type": "address"
        //       },
        //       {
        //         "indexed": true,
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "Approval",
        //     "type": "event"
        //   },
        //   {
        //     "anonymous": false,
        //     "inputs": [
        //       {
        //         "indexed": true,
        //         "internalType": "address",
        //         "name": "owner",
        //         "type": "address"
        //       },
        //       {
        //         "indexed": true,
        //         "internalType": "address",
        //         "name": "operator",
        //         "type": "address"
        //       },
        //       {
        //         "indexed": false,
        //         "internalType": "bool",
        //         "name": "approved",
        //         "type": "bool"
        //       }
        //     ],
        //     "name": "ApprovalForAll",
        //     "type": "event"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "to",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "approve",
        //     "outputs": [],
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "recipient",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "string",
        //         "name": "tokenURI",
        //         "type": "string"
        //       }
        //     ],
        //     "name": "mintNFT",
        //     "outputs": [
        //       {
        //         "internalType": "uint256",
        //         "name": "",
        //         "type": "uint256"
        //       }
        //     ],
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "anonymous": false,
        //     "inputs": [
        //       {
        //         "indexed": true,
        //         "internalType": "address",
        //         "name": "previousOwner",
        //         "type": "address"
        //       },
        //       {
        //         "indexed": true,
        //         "internalType": "address",
        //         "name": "newOwner",
        //         "type": "address"
        //       }
        //     ],
        //     "name": "OwnershipTransferred",
        //     "type": "event"
        //   },
        //   {
        //     "inputs": [],
        //     "name": "renounceOwnership",
        //     "outputs": [],
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "from",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "address",
        //         "name": "to",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "safeTransferFrom",
        //     "outputs": [],
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "from",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "address",
        //         "name": "to",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       },
        //       {
        //         "internalType": "bytes",
        //         "name": "_data",
        //         "type": "bytes"
        //       }
        //     ],
        //     "name": "safeTransferFrom",
        //     "outputs": [],
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "operator",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "bool",
        //         "name": "approved",
        //         "type": "bool"
        //       }
        //     ],
        //     "name": "setApprovalForAll",
        //     "outputs": [],
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "anonymous": false,
        //     "inputs": [
        //       {
        //         "indexed": true,
        //         "internalType": "address",
        //         "name": "from",
        //         "type": "address"
        //       },
        //       {
        //         "indexed": true,
        //         "internalType": "address",
        //         "name": "to",
        //         "type": "address"
        //       },
        //       {
        //         "indexed": true,
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "Transfer",
        //     "type": "event"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "from",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "address",
        //         "name": "to",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "transferFrom",
        //     "outputs": [],
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "newOwner",
        //         "type": "address"
        //       }
        //     ],
        //     "name": "transferOwnership",
        //     "outputs": [],
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "owner",
        //         "type": "address"
        //       }
        //     ],
        //     "name": "balanceOf",
        //     "outputs": [
        //       {
        //         "internalType": "uint256",
        //         "name": "",
        //         "type": "uint256"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "getApproved",
        //     "outputs": [
        //       {
        //         "internalType": "address",
        //         "name": "",
        //         "type": "address"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "address",
        //         "name": "owner",
        //         "type": "address"
        //       },
        //       {
        //         "internalType": "address",
        //         "name": "operator",
        //         "type": "address"
        //       }
        //     ],
        //     "name": "isApprovedForAll",
        //     "outputs": [
        //       {
        //         "internalType": "bool",
        //         "name": "",
        //         "type": "bool"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [],
        //     "name": "name",
        //     "outputs": [
        //       {
        //         "internalType": "string",
        //         "name": "",
        //         "type": "string"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [],
        //     "name": "owner",
        //     "outputs": [
        //       {
        //         "internalType": "address",
        //         "name": "",
        //         "type": "address"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "ownerOf",
        //     "outputs": [
        //       {
        //         "internalType": "address",
        //         "name": "",
        //         "type": "address"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "bytes4",
        //         "name": "interfaceId",
        //         "type": "bytes4"
        //       }
        //     ],
        //     "name": "supportsInterface",
        //     "outputs": [
        //       {
        //         "internalType": "bool",
        //         "name": "",
        //         "type": "bool"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [],
        //     "name": "symbol",
        //     "outputs": [
        //       {
        //         "internalType": "string",
        //         "name": "",
        //         "type": "string"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "inputs": [
        //       {
        //         "internalType": "uint256",
        //         "name": "tokenId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "tokenURI",
        //     "outputs": [
        //       {
        //         "internalType": "string",
        //         "name": "",
        //         "type": "string"
        //       }
        //     ],
        //     "stateMutability": "view",
        //     "type": "function"
        //   }
        // ]
        // const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
        // setMyContract(daiContract);
      }else{
        alert('Please, install MetaMask!');
      }
      console.log('provider:', myProvider)
      console.log('signer:', mySigner)
      console.log('network:', myProvider.getNetwork)
      // console.log('daicontract:', myContract);
      // await myContract.normalize()

      // myContract.name().then((res)=>{
      //   console.log('dainame:', res)        
      // })
      // myContract.symbol().then((res)=>{
      //   console.log('daisymbol:', res)        
      // })
      // console.log(mySigner.getAddress())
      mySigner.getAddress().then((res)=>{
        console.log(res);
      })
      // 이거 안됨
      // console.log('chainId:', myProvider.getNetwork.chainId) 
      // console.log('ChainName:', myProvider.getNetwork.name)

      //============provider==========
      // 현재 블록 번호 조회
      // await provider.getBlockNumber()

      // 계정 잔액 조회
      // balance = await provider.getBalance("ethers.eth")
      // 잔액 이더 형식으로 출력
      // ethers.utils.formatEther(balance)
      // wei로 변환
      // ethers.utils.parseEther("1.0")

      // 1 이더 전송
      /* const tx = signer. sendTransaction({ 
        to: "receiver", 
        value: ethers.utils.parseEther("1.0")
      });
        */
      //============provider==========

      //============dai===============
      // @ 컨트랙트 연결 @
      // 컨트랙 주소 입력
      // const daiAddress = "0x6A0be12d4d8a8EacE5AB38767aE20dd00d9dE60B"
      // ABI 입력
      // const daiAbi = [];
      // 컨트랙 객체 생성 / 현재 provider에 연결
      // const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
      
      // @ 컨트랙트 사용 @
      // 토큰 이름 출력
      // daiContract.name().then((res)=>{
      //   console.log('dainame:', res)        
      // })
      // 토큰 심볼 출력
      // daiContract.symbol().then((res)=>{
      //   console.log('daisymbol:', res)        
      // })
      // 이건 뭘까요? 무슨 금액 출력 / 컨트랙 주소에 금액이 있나? 그냥 일반 주소?
      // balance = daiContract.balanceOf("ricmoo.firefly.eth").then((res)=>{
      //   console.log('dainame:', res)        
      // })
      // 뭔지 모를 결과 사용 / 금액 소수 표현 자리수
      // ethers.utils.formatUnits(balance, 18)

      // @ 상태 변경 @
      // 컨트랙트에 서명 / provider는 컨트랙트에 포함됨
      // const daiWithSigner = daiContract.connect(signer);

      // { BigNumber: "1000000000000000000"} 이렇게 저장된다함....
      // const dai = ethers.utils.parseUnits("1.0", 18);
      // tx = daiWithSigner.transfer("ricmoo.firefly.eth", dai);

      // @ 이벤트 생성 @
      // Transfer가 발생할때 이벤트 수신
      // daiContract.on("Transfer", (from, to, amount, event) =>{
      //   console.log(from, to, formatEther(amount) )
      // })

      //============dai===============

      // console.log(myProvider);
      // console.log(myProvider.provider)
    }

    return (
      <Button onClick={ConnetWallet}>
          {/* <i class="fa-regular fa-wallet"></i> */}
          <img src={walletImg}></img>
      </Button>
    );
  }
  export default Wallet;