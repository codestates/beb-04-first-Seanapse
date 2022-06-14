import styled from 'styled-components';

  const Wapper = styled.div`
    max-width: 1100px;

  `;
const CreateWrapper = ({ children }) => {
  return (
    <Wapper>
      {children}
    </Wapper>
  );
}

export default CreateWrapper;