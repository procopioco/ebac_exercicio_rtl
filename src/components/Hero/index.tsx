import styled from 'styled-components';

const HeroContainer = styled.section`
  background: #fff;
  border-radius: 12px;
  margin-bottom: 20px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

const HeroTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 22px;
`;

const HeroDescription = styled.p`
  margin: 0;
  color: #555;
`;

const Hero = () => (
  <HeroContainer>
    <HeroTitle>Bem-vindo ao Dashboard</HeroTitle>
    <HeroDescription>Cadastre vagas, veja candidaturas e comente as oportunidades.</HeroDescription>
  </HeroContainer>
);

export default Hero;
