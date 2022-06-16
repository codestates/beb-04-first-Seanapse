import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   border: 0.5px solid ;
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

function Description({width="10px"}){
    const height = "10px";
    
    return(
        <Wrapper width={width} height={height}>
            <div>
                <div><h3>Description</h3></div>
                <Text><div>unique and cool and shy ghosts living on the blockchain.</div></Text>
            </div>
        </Wrapper>
    )
}
export default Description;