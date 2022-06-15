import CreateLayout from '../layouts/createLayout';
import { useState } from 'react';

const Create = () => {
  const [metadata, setMetadata] = useState({
    name: '',
    description: "",
    image: "",
    attributes: []
  });

  return (
    <>
      <CreateLayout metadata={metadata} setMetadata={setMetadata}></CreateLayout>
    </>
  );
}

export default Create;