import styled from "styled-components";

const Txt = styled.div`
    display: flex;    
    flex-grow: 1;
    margin-top: 8px;
    margin-bottom: 8px;
`
const LeftTxt = styled.div`
    flex-grow: 1;
`
const RightTxt = styled.div`
    flex-grow: 1;
    justify-content: flex-end;
    text-align: end;
`

function Wrap( {leftData, rightData} ){
    return(
        <Txt>
            <LeftTxt>
                {leftData}
            </LeftTxt>
            <RightTxt>
                {rightData}
            </RightTxt>
        </Txt>
    )
}

export default Wrap;