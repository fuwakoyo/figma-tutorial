
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './index.css';
import Hero from './Hero';
import Body from './Body';
import Container from './Container';
import Content from './Content';
import InfoImage from './InfoImage';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Hero/>
        <Body>
          <Container>
            <Content title="title" description="content"/>
            <InfoImage src="Guidance.svg" alt="Guidance"/>
          </Container>
        </Body>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
