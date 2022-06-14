import styled from 'styled-components'

const StyledInput = styled.input`
    height:35px;
    width:60%;
    border-radius:8px;
    border: solid 2px #EAECEF;
    font-size: 20px;
    margin-top: 10px;
    padding:5px;
    padding-left:10px;
`

function Search(props) {
    return (
        <StyledInput placeholder=' 🔍 Search by name' value={props.keyword} onChange={(e)=>props.changeHandler(e.target.value)}/>
    )
}

export default Search;