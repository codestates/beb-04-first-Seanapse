import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   /* border: 0.5px solid ; */
   border-radius: 10px;
   padding-left: 20px;
   margin-top: 10px;
   margin-bottom: 100px;

   font-family: Poppins, sans-serif;
   font-size: 25px;
`;
const Text = styled.div`
   padding-left: 20px;
   margin-top: 10px;
   margin-bottom: 10px;

   font-family: sans-serif;
   font-size: 20px;
`;

function Description({ description = "" }) {
    return (
        <Wrapper>
            <Text>{description}</Text>
        </Wrapper>
    )
}
export default Description;