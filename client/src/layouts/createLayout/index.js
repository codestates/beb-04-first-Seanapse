import { CreateTitle, CreateWrapper, CreatSubmitButton } from '../../components/create';
import CreateInput from './createInput';
import CreateInputProperties from './createInputProperties';
import CreateUpload from './createUpload';

const CreateLayout = ({metadata, setMetadata}) => {

  const inputOnChaneHandler = (e) => {
    setMetadata({
      ...metadata,
      [e.target.name]: e.target.value
    })
  }

  return (
    <CreateWrapper>
      <CreateTitle title={"Create New Item"}></CreateTitle>
      <CreateUpload></CreateUpload>
      <CreateInput
        name='name'
        title='Name'
        placeholder='Item name'
        onChange={inputOnChaneHandler}
      />
      <CreateInput
        title='External Link'
        placeholder='Item name'
        description={"OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."}
      />
      <CreateInput
        name="description"
        title='description'
        placeholder='Item name'
        description={`The description will be included on the item's detail page underneath its image. Markdown syntax is supported.
        `}
        onChange={inputOnChaneHandler}
      /> 
      <CreateInputProperties title="Properties" metadata={metadata} setMetadata={setMetadata}></CreateInputProperties>
      <CreatSubmitButton>Create</CreatSubmitButton>
    </CreateWrapper>
  );
}

export default CreateLayout;