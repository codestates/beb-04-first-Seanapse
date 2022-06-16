import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-weight: 500;
    font-size: 1.5ch;
`;

function Description({width="10px"}){
    const height = "10px";
    
    return(
        <Wrapper width={width} height={height}>
            <div>
                <div><h3>Description</h3></div>
                <div>unique and cool and shy ghosts living on the blockchain.</div>
            </div>
        </Wrapper>
    )
}
export default Description;