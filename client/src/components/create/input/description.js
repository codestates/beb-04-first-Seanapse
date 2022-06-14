import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  width: 100%;
`;

const Text = styled.p`
  margin: 0;
`;

const CreateInpuDescription = ({ text }) => {
  return (
    <DescriptionWrapper>
      <Text>{text}</Text>
    </DescriptionWrapper>
  );
}

export default CreateInpuDescription;