import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

const Submit = styled.button`
  display: inline-flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 12px;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.01em;
  padding: 17px 24px;
  background-color: rgb(32, 129, 226);
  border: 2px solid rgb(32, 129, 226);
  color: rgb(255, 255, 255);
`

const CreatSubmitButton = ({children, onClick=()=>{}}) => {
  return (
    <Wrapper>
      <Submit onClick={onClick}>{children}</Submit>
    </Wrapper>
  );
}

export default CreatSubmitButton;