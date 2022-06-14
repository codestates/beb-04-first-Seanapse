import styled from "styled-components";

function NFT() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 20px;
    margin-left: 20px;
    margin-top: 30px;
    padding: 20px;

    border: 3px solid #e2e2e2;
    border-radius: 12px;
  `
  const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    padding: 30px;

    border: 3px solid #e2e2e2;
    border-radius: 12px;
  `

  const Item = styled.div`
    width: 200px;
    height: 250px;

    border: 3px solid #e2e2e2;
    border-radius: 12px;
  `
    return (
      <Div>
        <div>41,999,999 items Searched!</div>
        <ItemList>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ItemList>
      </Div>
    );
  }
  export default NFT;