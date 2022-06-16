import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #E4E8EB;
  width: 100%;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px;
`;

const CreateInputElement = ({ name, placeholder = "", onChange = () => { }, value=undefined }) => {
  return (
    <InputWrapper>
    {
      value === undefined ?
      <Input name={name} placeholder={placeholder} onChange={onChange}></Input>
      :
      <Input name={name} placeholder={placeholder} onChange={onChange} value={value}></Input>
    }
    </InputWrapper>
  );
}

export default CreateInputElement;