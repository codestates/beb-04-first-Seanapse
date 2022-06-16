import styled from 'styled-components';
import { Description, Detail, DetailTemplate, NftImg, Properties, DetailHead, DetailWrapper } from '../../components/detail';

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: repeat(3, 300px);
    grid-template-columns: repeat(5, 300px);

    /* Image */
    > :nth-child(1) {
        grid-row: 1/3;
        grid-column: 1/3;
    }

    /* Detail */
    > :nth-child(2) {
        grid-row: 3/4;
        grid-column: 1/3;
    }

    /* Header */
    > :nth-child(3) {
        grid-row: 1/2;
        grid-column: 3/6;
    }

    /* Description */
    > :nth-child(4) {
        grid-row: 2/3;
        grid-column: 3/6;
    }

    /* Properties */ 
    > :nth-child(5) {
        grid-row: 3/4;
        grid-column: 3/6;
    }
`;

const I = styled.i`    
    margin-right: 10px;
`

function DetailLayout({ nftInfo }) {
    return (
        <Wrapper>
            <NftImg imageUrl={nftInfo.image} />
            <DetailTemplate>
                <DetailWrapper
                    icon={<I className="fa-solid fa-file-invoice" />}
                    title={"Details"}
                >
                    <Detail nftInfo={nftInfo} />
                </DetailWrapper>
            </DetailTemplate>
            <DetailHead name={nftInfo.name} owner={nftInfo.owner} />
            <DetailTemplate>
                <DetailWrapper title="Description">
                    <Description description={nftInfo.description} />
                </DetailWrapper>
            </DetailTemplate>
            <DetailTemplate>
                <DetailWrapper
                    icon={<I className="fa-solid fa-tag"></I>}
                    title={"Properties"}
                >
                    <Properties properties={nftInfo.attributes} />
                </DetailWrapper>
            </DetailTemplate>
        </Wrapper>
    )
}

export default DetailLayout;