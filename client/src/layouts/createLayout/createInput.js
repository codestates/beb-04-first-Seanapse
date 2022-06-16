
import { CreateInputWrapper, CreateInputTitle, CreateInputDescription, CreateInputElement } from '../../components/create/input';

const CreateInput = ({ name, title = "", description = "", placeholder = "", onChange = () => { } }) => {
  return (
    <CreateInputWrapper>
      <CreateInputTitle title={title} />
      {description === "" ? undefined : <CreateInputDescription text={description} />}
      <CreateInputElement name={name} onChange={onChange} placeholder={placeholder} />
    </CreateInputWrapper>
  );
}

export default CreateInput;