import styled from 'styled-components'

const Nftimg = styled.img`
    width: 300px;
    height: 300px;
    margin-bottom:20px;
`

function NftImg() {

    return (
        <Nftimg src={'nft.png'} alt=''/>
    )
}

export default NftImg;