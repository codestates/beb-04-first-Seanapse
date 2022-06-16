import React from 'react';
import styled from 'styled-components';

const DetailBlock = styled.div`
  /* background: white; */
  /* border-radius: 16px; */
  /* box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04); */

  /* margin-top: 96px;
  margin-bottom: 32px; */
  /* display: flex; */
  /* flex-direction: column; */
`;

function DetailTemplate({ children }) {
  return <DetailBlock>{children}</DetailBlock>;
}

export default DetailTemplate;
