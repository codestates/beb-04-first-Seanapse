import styled from 'styled-components';

const TitleWrapper = styled.div`
width: 100%;
margin-bottom: 10px;
`;

const Title = styled.span` 
  font-size: 20px;
  font-weight: 600;

  padding: 0;
  margin: 0;
`;

const CreateInputTitle = ({ title }) => {
  return (
    <TitleWrapper>
      <Title>
        {title}
      </Title>
    </TitleWrapper>
  );
}

export default CreateInputTitle;