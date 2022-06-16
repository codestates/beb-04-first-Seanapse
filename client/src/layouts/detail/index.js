import styled from 'styled-components';
import { Description, Detail, DetailTemplate, NftImg, Properties, DetailHead } from '../../components/detail';

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

function DetailLayout() {
    const owner = "0x0E7149cAB20d016291E8bc6F72580FE04CAE629e"

    return (
        <Wrapper>
            <NftImg />
            <DetailTemplate>
                <Detail />
            </DetailTemplate>
            <DetailHead name={'test'} owner={owner} />
            <Description />
            <Properties />
        </Wrapper>
    )
}

export default DetailLayout;