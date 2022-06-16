import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 50px;
  padding: 0;
  margin: 20px 0;
`;

const CreateTitle = ({ title }) => {

  return (
    <Wrapper>
      <Title>
        {title}
      </Title>
    </Wrapper>
  );
}

export default CreateTitle;