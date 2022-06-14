import styled from 'styled-components';

  const Wrapper = styled.section`
    position: relative;
    margin: 20px;
  `;




const CreateInputWrapper = ({children}) => {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
 
export default CreateInputWrapper;