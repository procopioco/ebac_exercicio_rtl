import styled from 'styled-components';

import Header from './components/Header';
import Hero from './components/Hero';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

const AppContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
  background: #f2f6fb;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <JobForm />
      <JobList />
    </AppContainer>
  );
}

export default App;
