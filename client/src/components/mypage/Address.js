import styled from "styled-components";

const Icon = styled.img`
    width:15px;
    height:15px;
`

function Profile({account}) {

    return (
        <div>
            <Icon src={'ethericon.png'}/><span className="account">{account}</span>
        </div>

    )
}

export default Profile;
