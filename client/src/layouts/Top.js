import styled from "styled-components";
import ProfileImage from '../components/mypage/Profile'
import Username from '../components/mypage/Username'
import Search from '../components/mypage/Search'
import Address from '../components/mypage/Address'

const StyledTop = styled.div`
    margin-left:70px;
    margin-right:70px;
    margin-top: 100px;
`

function Top(props) {
    return (
        <StyledTop>
            <div className="background"></div>
            <ProfileImage/>
            <Username>Unnamed</Username>
            <Address account={props.account}/>
            <div>
                <Search value={props.keyword} changeHandler={props.changeHandler}/>
            </div>
        </StyledTop>
    )
}

export default Top;