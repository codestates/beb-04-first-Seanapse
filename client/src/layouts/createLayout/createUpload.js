
import {CreateUploadWrapper, CreateUploadInputFile} from '../../components/create/upload';
const CreateUploadLayout = () => {
  const uploadHandler = () => {

  }

  return (
    <CreateUploadWrapper>
      <CreateUploadInputFile onChange={uploadHandler}></CreateUploadInputFile>
    </CreateUploadWrapper>
  );
}

export default CreateUploadLayout;