import { CreateTitle, CreateWrapper, CreatSubmitButton } from '../../components/create';
import CreateInput from './createInput';
import CreateInputProperties from './createInputProperties';
import CreateUpload from './createUpload';
import {ipfsImageUpload, ipfsMetadataUpload} from '../../utils/pinata';
import {createNFT} from '../../utils/wallet';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const CreateLayout = ({metadata, setMetadata, seanapseNFT, setIsLoading}) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(undefined);

  const inputOnChaneHandler = (e) => {
    setMetadata({
      ...metadata,
      [e.target.name]: e.target.value
    })
  }

  // const createNFT = async(address, tokenUrl) => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum)
  //   const contract = new ethers.Contract("0xe18585AE18ea624E361f71BE760DFA1050baaA99", seanapseNFT, provider);
    
  //   try{
  //     await contract.mintNFT(address, tokenUrl);
  //   } catch(err) {
  //     console.error(err);
  //   }
  // }

  const submitHandler = async() => {
    setIsLoading(true);
    try {
      if(!window.ethereum.selectedAddress) throw new Error();
      const imageIpfsUri = await ipfsImageUpload(file, metadata);
      const finalMetadata = {
        ...metadata,
        image: imageIpfsUri
      }
      setMetadata(finalMetadata);
      const metadataIpfsUri = await ipfsMetadataUpload(finalMetadata);
      await createNFT(window.ethereum.selectedAddress, metadataIpfsUri);
      setIsLoading(false);
      navigate("/");
    } catch(err) {
      setIsLoading(false);
      console.error(err);
    }
  }

  return (
    <CreateWrapper>
      <CreateTitle title={"Create New Item"}></CreateTitle>
      <CreateUpload setFile={setFile}></CreateUpload>
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
      <CreatSubmitButton onClick={submitHandler}>Create</CreatSubmitButton>
    </CreateWrapper>
  );
}

export default CreateLayout;