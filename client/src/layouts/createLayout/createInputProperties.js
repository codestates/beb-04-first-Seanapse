
import { CreateInputTitle, CreateInputWrapper } from '../../components/create/input';
import CreateInputElement from '../../components/create/input/input';
import styled from 'styled-components';

const PropertiesWrapper = styled.div`
  display: grid;

  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 50px;

  > div {
    width: 90%;
    margin: 10px;
  }
`;

const AddPropertyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PropertyButton = styled.button`
  font-size: 20px;
  width: 50px;
  margin: 10px;
`;

const CreateInputProperties = ({ title, metadata, setMetadata }) => {

  const propertiesHandler = (e, index) => {
    setMetadata({
      ...metadata,
      attributes: [
        ...metadata.attributes.slice(0, index),
        {
          ...metadata.attributes[index],
          [e.target.name]: e.target.value
        },
        ...metadata.attributes.slice(index + 1)
      ]
    });
  }

  const addPropertiesHandler = () => {
    setMetadata({
      ...metadata,
      attributes: [...metadata.attributes, {
        "trait_type": "",
        "value": ""
      }]
    });
  }

  const removePropertiesHandler = (e, index) => {
    const removeProperties = metadata.attributes.filter(
      (item, itemIndex) => index !== itemIndex
    )
    setMetadata({
      ...metadata.attributes,
      attributes: removeProperties});
  }

  return (
    <CreateInputWrapper>
      <CreateInputTitle title={title}></CreateInputTitle>
      {metadata.attributes.map((attribute, index) => {
        return (
          <PropertiesWrapper key={index}>
            <CreateInputElement name={'trait_type'} placeholder={"Key.."} onChange={(e) => { propertiesHandler(e, index) }} value={attribute.trait_type}></CreateInputElement>
            <CreateInputElement name={'value'} placeholder={"Value.."} onChange={(e) => { propertiesHandler(e, index) }} value={attribute.value} ></CreateInputElement>
            <PropertyButton onClick={(e) => { removePropertiesHandler(e, index) }}>-</PropertyButton>
          </PropertiesWrapper>
        );
      })
      }
      <AddPropertyButtonWrapper>
        <PropertyButton onClick={addPropertiesHandler}>+</PropertyButton>
      </AddPropertyButtonWrapper>
    </CreateInputWrapper>
  );
}

export default CreateInputProperties;