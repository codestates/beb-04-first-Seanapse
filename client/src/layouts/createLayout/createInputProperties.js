
import { CreateInputTitle, CreateInputWrapper } from '../../components/create/input';
import CreateInputElement from '../../components/create/input/input';
import { useState } from 'react';
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

const CreateInputProperties = ({ title }) => {
  const [properties, setProperties] = useState([]);

  const propertiesHandler = (e, index) => {
    setProperties([
      ...properties.slice(0, index),
      {
        ...properties[index],
        [e.target.name]: e.target.value
      },
      ...properties.slice(index + 1)
    ]);
  }

  const addPropertiesHandler = () => {
    setProperties([...properties, {
      "trait_type": "",
      "value": ""
    }]);
  }

  const removePropertiesHandler = (e, index) => {
    const removeProperties = properties.filter(
      (item, itemIndex) => index !== itemIndex
    )
    setProperties(removeProperties);
  }

  return (
    <CreateInputWrapper>
      <CreateInputTitle title={title}></CreateInputTitle>
      {properties.map((property, index) => {
        return (
          <PropertiesWrapper key={index}>
            <CreateInputElement name={'trait_type'} placeholder={"Key.."} onChange={(e) => { propertiesHandler(e, index) }} value={property.trait_type}></CreateInputElement>
            <CreateInputElement name={'value'} placeholder={"Value.."} onChange={(e) => { propertiesHandler(e, index) }} value={property.value} ></CreateInputElement>
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