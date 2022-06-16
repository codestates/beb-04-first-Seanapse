import styled from 'styled-components';

const Wrapper = styled.div`

`;

function Detail() {
    return (
        <Wrapper className="text-align-left">
            <h3>Details</h3>
            <div>Contract Address</div>
            <div>Token ID</div>
            <div>Token Standard</div>
            <div>Blockchain</div>
            <div>Creator Fees</div>
        </Wrapper>

    )
}

export default Detail;