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

function NftImg() {

    return (
        <Wrapper>
            <Nftimg src={'/ethericon.png'} alt='' />
        </Wrapper>
    )
}

export default NftImg;