import CreateLayout from '../layouts/createLayout';
import { useState } from 'react';
import seanapseNFT from '../utils/SeanapseNFT.json';
import CreateLoading from '../components/create/loading';

const Create = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState({
    name: '',
    description: "",
    image: "",
    attributes: []
  });

  return (
    <>
      {isLoading ? <CreateLoading></CreateLoading> : undefined}
      <CreateLayout setIsLoading={setIsLoading} seanapseNFT={seanapseNFT} metadata={metadata} setMetadata={setMetadata}></CreateLayout>
    </>
  );
}

export default Create;