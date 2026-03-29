import styled from 'styled-components';
import JobCard from '../JobCard';

const ListContainer = styled.section`
  margin-bottom: 24px;
`;

const ListTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 20px;
`;

const jobs = [
  { id: 1, title: 'Desenvolvedor Front-end', company: 'EBAC', location: 'Remoto', description: 'Desenvolva interfaces modernas com React e Styled Components.' },
  { id: 2, title: 'QA Automation', company: 'EBAC', location: 'Híbrido', description: 'Automatize testes e garanta qualidade com Jest e Testing Library.' },
  { id: 3, title: 'Product Manager', company: 'EBAC', location: 'São Paulo', description: 'Lidere squads de produto e otimize entregas ágeis.' },
];

const JobList = () => (
  <ListContainer>
    <ListTitle>Vagas Disponíveis</ListTitle>
    {jobs.map(job => (
      <JobCard key={job.id} {...job} />
    ))}
  </ListContainer>
);

export default JobList;
