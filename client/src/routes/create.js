import CreateLayout from '../layouts/createLayout';
import { useState } from 'react';

const Create = () => {
  const [metadata, setMetadata] = useState({
    name: '',
    description: "",
    image: "",
    attributes: [
      {
        "trait_type": "",
        "value": ""
      }
    ]
  });

  return (
    <div>
      <CreateLayout metadata={metadata} setMetadata={setMetadata}></CreateLayout>
    </div>
  );
}

export default Create;