import { CreateTitle, CreateWrapper, CreatSubmitButton } from '../../components/create';
import CreateInput from './createInput';
import CreateInputProperties from './createInputProperties';
import CreateUpload from './createUpload';

import Axios from 'axios';
import FormData from 'form-data';
import { useState } from 'react';

import {ethers} from 'ethers';

const CreateLayout = ({metadata, setMetadata, seanapseNFT, setIsLoading}) => {
  const [file, setFile] = useState(undefined);

  const inputOnChaneHandler = (e) => {
    setMetadata({
      ...metadata,
      [e.target.name]: e.target.value
    })
  }

  const imageUpload = async() => {
    const data = new FormData();
    data.append('file', file);
    data.append('pinataOptions', '{"cidVersion": 1}');
    data.append('pinataMetadata', `{"name": "${metadata.name}-picture", "keyvalues": {"company": "Pinata"}}`);

    let config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
      },
      data: data
    }
    try{
      const uploadFileResponse = await Axios(config);
      setMetadata((state) => ({
        ...state,
        image: uploadFileResponse.data.IpfsHash
      }))
      return uploadFileResponse;
    } catch(err) {
      console.error(err);
    }
  }

  const metadataUpload = async() => {
    const data = new FormData();
    const metadataFile = new File([new Blob([JSON.stringify(metadata)])], `${metadata.name}-metadata.json`)
    data.append('file', metadataFile);
    data.append('pinataOptions', '{"cidVersion": 1}');
    data.append('pinataMetadata', `{"name": "${metadata.name}-metadata", "keyvalues": {"company": "Pinata"}}`);

    const config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: { 
        'Authorization': `Bearer ${process.env.REACT_APP_PINATA_JWT}`
      },
      data : data
    };
    
    const res =  await Axios(config);
    return res.data.IpfsHash
  }

  const createNFT = async(address, tokenUrl) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract("0xe18585AE18ea624E361f71BE760DFA1050baaA99", seanapseNFT, provider);
    
    try{
      await contract.mintNFT(address, tokenUrl);
    } catch(err) {
      console.error(err);
    }
  }

  const submitHandler = async() => {
    setIsLoading(true);
    try {
      if(!window.ethereum.selectedAddress) throw new Error();
      await imageUpload();
      const toeknUrl = await metadataUpload();
      await createNFT(window.ethereum.selectedAddress, toeknUrl);
      setIsLoading(false);
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