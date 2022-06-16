import styled from 'styled-components';

import Text from './Text'
const Title = styled.div`
    border-bottom: 1px solid #e2e2e2;
    font-weight: 600;
    font-size: 1.8ch;

    padding: 15px;
`
const Content = styled.div`
    padding: 15px;
    font-weight: 500;
    font-size: 1.5ch;
`
const Div = styled.div`
    border: 1px solid #e2e2e2;
    margin-left: 30px;
    margin-right: 30px;
`

const I = styled.i`    
    margin-right: 10px;
`

function Detail( ){
    return(
        <Div>
            <Title>
                <I className="fa-solid fa-file-invoice"/>
                Details
            </Title>
            <Content>
                <Text leftData={'Contract Address'} rightData={'0x100...101'}></Text>
                <Text leftData={'Token ID'} rightData={'1083'}></Text>
                <Text leftData={'Token Standard'} rightData={'ERC-721'}></Text>
                <Text leftData={'Blockchain'} rightData={'Klaytn'}></Text>
                <Text leftData={'Creator Fees'} rightData={'5%'}></Text>
            </Content>
        </Div>
    )
}

export default Detail;