import styled from 'styled-components';

type JobCardProps = {
  title: string;
  company: string;
  location: string;
  description: string;
};

const Card = styled.article`
  border: 1px solid #dbe2ef;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  margin-bottom: 12px;
`;

const JobTitle = styled.h3`
  margin: 0 0 6px;
`;

const JobMeta = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
`;

const JobDescription = styled.p`
  margin-top: 8px;
  color: #333;
`;

const JobCard = ({ title, company, location, description }: JobCardProps) => (
  <Card>
    <JobTitle>{title}</JobTitle>
    <JobMeta>{company} • {location}</JobMeta>
    <JobDescription>{description}</JobDescription>
  </Card>
);

export default JobCard;
