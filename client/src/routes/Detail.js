import DetailLayout from '../layouts/detail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNft } from '../utils/wallet';
import styled from 'styled-components';

const Loding = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url("https://i.stack.imgur.com/kOnzy.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  align-self: center;
`

function DetailPage() {
    const { tokenId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [nftInfo, setNftInfo] = useState({
        owner: "",
        name: "",
        image: "",
        description: "",
        attributes: [],
        contract: "",
        standard: "",
        network: "",
        tokenId: ""
    });
    useEffect(() => {
        setIsLoading(true);
        if (tokenId !== undefined) {
            getNft(tokenId).then((resNftInfo) => {
                setNftInfo(() => ({ ...nftInfo, ...resNftInfo }));
                setIsLoading(false);
            });
        }
    }, []);
    return (
        <>
            {isLoading 
            ? 
            <Loding/> 
            : 
            <DetailLayout nftInfo={nftInfo} />
            }
        </> 
    )
}

export default DetailPage;