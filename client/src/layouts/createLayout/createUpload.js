import { CreateUploadWrapper, CreateUploadInputFile } from '../../components/create/upload';


const CreateUploadLayout = ({ setFile }) => {
  const uploadHandler = async (event) => {
    setFile(event.target.files[0]);
  }

  return (
    <CreateUploadWrapper>
      <CreateUploadInputFile onChange={uploadHandler}></CreateUploadInputFile>
    </CreateUploadWrapper>
  );
}

export default CreateUploadLayout;