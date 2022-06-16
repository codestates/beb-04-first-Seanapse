import styled from 'styled-components';

const Title = styled.div`
    border-bottom: 1px solid #e2e2e2;
    font-weight: 600;
    font-size: 1.8ch;

    padding: 15px;
`
const Div = styled.div`
    border: 1px solid #e2e2e2;
    margin-left: 30px;
    margin-right: 30px;
`

const Content = styled.div`
    padding: 15px;
    font-weight: 500;
    font-size: 1.5ch;
`

const DetailWrapper = ({icon, title, children}) => {
  return (
    <Div>
      <Title>
        {icon}
        {title}
      </Title>
      <Content>
        {children}
      </Content>
    </Div>
  );
}
 
export default DetailWrapper;