import styled from 'styled-components';

const Wrapper = styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateUploadWrapper = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
 
export default CreateUploadWrapper;