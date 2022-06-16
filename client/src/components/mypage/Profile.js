import styled from 'styled-components'

const StyledImg = styled.img`
    width: 170px;
    height: 170px;
    margin-bottom:30px;
`

function Profile() {

    return (
        <StyledImg src={'userprofile.png'} alt=''/>
    )
}

export default Profile;
