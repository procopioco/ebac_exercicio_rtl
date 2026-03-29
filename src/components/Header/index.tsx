import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #0077b6, #00b4d8);
  border-radius: 10px;
  color: #fff;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const SubTitle = styled.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
`;

const Header = () => (
  <HeaderContainer>
    <div>
      <Title>Portal de Vagas</Title>
      <SubTitle>Gerencie, comente e encontre sua próxima oportunidade!</SubTitle>
    </div>
  </HeaderContainer>
);

export default Header;
