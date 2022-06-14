import styled from "styled-components";
import walletImg from '../wallet.png';
function Wallet() {

    const Button = styled.button`
        display: flex;
        justify-content: center;

        min-width: 25px;
        min-height: 25px;

        border: 0px;
        background-color: transparent;

    `

    return (
      <Button>
          {/* <i class="fa-regular fa-wallet"></i> */}
          <img src={walletImg}></img>
      </Button>
    );
  }
  export default Wallet;