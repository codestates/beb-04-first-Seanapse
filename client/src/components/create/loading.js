import styled from 'styled-components';

const Loading = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  color: white;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;

  transition-duration: 0.3s;

  background-color: rgba(0,0,0, 0.8);
`;

const CreateLoading = () => {
  return (
    <Loading>
      로딩중...
    </Loading>
  );
}
 
export default CreateLoading;