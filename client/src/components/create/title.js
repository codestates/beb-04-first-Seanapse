import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  padding: 0;
  margin: 0;
`;

const CreateTitle = ({title}) => {

  return (
    <Title>
      {title}
    </Title>
  );
}
 
export default CreateTitle;