import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    margin: 50px;
    box-sizing: border-box;
`;

const Nftimg = styled.img`
    width: 100%;
    height: 100%;
`

function NftImg({imageUrl}) {

    return (
        <Wrapper>
            <Nftimg src={imageUrl === "" ? '/ethericon.png' : imageUrl} alt='' />
        </Wrapper>
    )
}

export default NftImg;