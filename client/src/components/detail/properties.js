import styled from 'styled-components';

const dummyData = [
    {
        trait_type: "background",
        value: "white"
    },
    {
        trait_type: "background",
        value: "white"
    },
    {
        trait_type: "background",
        value: "white"
    }, {
        trait_type: "background",
        value: "white"
    }, {
        trait_type: "background",
        value: "white"
    }
]

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 5px;
    overflow-x: hidden;
    overflow-y: scroll;
    /* width: 600px; */
`;

const TraitWrapper = styled.div`
    display: block;
    background-color: rgba(21, 178, 229, 0.06);
    border-radius: 6px;
    border: 1px solid rgb(21, 178, 229);
    padding: 10px;
    text-align: center;
    margin: 5px;
    width: 150px;
    height: 50px;
`;

const TraitType = styled.p`
    color: rgb(21, 178, 229);
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    margin: 5px;
`;

const TraitValue = styled.p`
margin: 5px;
  
`;

function Properties({properties=[]}) {
    return (
        <Wrapper>
            {properties.map((property, index) => (
                <TraitWrapper key={index}>
                    <TraitType>{property.trait_type}</TraitType>
                    <TraitValue>{property.value}</TraitValue>
                </TraitWrapper>
            ))}
        </Wrapper>
    )
}

export default Properties;