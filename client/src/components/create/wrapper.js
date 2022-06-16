import styled from 'styled-components';

const Wapper = styled.div`
  max-width: 1100px;
  padding: 25px;
  box-sizing: border-box;
`;
const CreateWrapper = ({ children }) => {
  return (
    <Wapper>
      {children}
    </Wapper>
  );
}

export default CreateWrapper;