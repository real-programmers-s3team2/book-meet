import styled from "styled-components";

const Container = styled.div`
  display: flex;
  bottom: 0px;
  width: 100%;
  background-color: #344551;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <div>&copy;개발자의 품격 2조</div>
    </Container>
  );
};

export default Footer;
