import Text from './Text'

function Detail({ nftInfo }) {
    const contractAddress = nftInfo.contract.slice(0, 6)+'…'+nftInfo.contract.slice(nftInfo.contract.length-3, nftInfo.contract.length-1);
    return (
        <>
            <Text leftData={'Contract Address'} rightData={contractAddress}></Text>
            <Text leftData={'Token ID'} rightData={nftInfo.tokenId}></Text>
            <Text leftData={'Token Standard'} rightData={nftInfo.standard}></Text>
            <Text leftData={'Blockchain'} rightData={nftInfo.network}></Text>
            <Text leftData={'Creator Fees'} rightData={`${Math.floor(Math.random() * 100)}%`}></Text>
        </>
    )
}

export default Detail;