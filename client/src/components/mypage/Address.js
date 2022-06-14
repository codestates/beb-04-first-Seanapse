import styled from "styled-components";

const Icon = styled.img`
    width:15px;
    height:15px;
`

function Profile(props) {

    return (
        <div>
            <Icon src={'ethericon.png'}/><span className="account">{props.account}</span>
        </div>

    )
}

export default Profile;
