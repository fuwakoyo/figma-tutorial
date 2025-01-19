
import { BrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import './index.css';
import Hero from './Hero';
import Body from './Body';
import Container from './Container';
import Content from './Content';
import InfoImage from './InfoImage';
import GuidanceDescription from './GuidanceDescription';
import PlatformsDescription from './PlatformsDescription';
import Typography from './Typography';
import Symbols from './Symbols';
import Colors from './Colors';
import Themes from './Themes';
import Feedback from './Feedback';




const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Hero/>
        <Body>
          <Container height="543px">
            <Content title="Guidance" fontWeight='bold' textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' description={<GuidanceDescription/>}/>
            <InfoImage src="Guidance.svg" alt="Guidance"/>
          </Container>
          <Container height="487px">
            <Content title="Platforms" description={<PlatformsDescription/>}/>
            <InfoImage src="Platforms.svg" alt="Platforms"/>
          </Container>
          <Container height="543px">
            <Content title="Typography" description={<Typography/>}/>
            <InfoImage src="Typography.svg" alt="Typography"/>
          </Container>
          <Container height="591px">
            <Content title="Symbols" description={<Symbols/>}/>
            <InfoImage src="Symbols.svg" alt="Symbols"/>
          </Container>
          <Container height="517px">
            <Content title="Colors" description={<Colors/>}/>
            <InfoImage src="Colors.svg" alt="Colors"/>
          </Container>
          <Container height="543px">
            <Content title="Themes" description={<Themes/>}/>
            <InfoImage src="Themes.svg" alt="Themes"/>
          </Container>
          <Container height="543px" marginBottom='0'>
            <Content title="Feedback" description={<Feedback/>}/>
            <InfoImage src="Feedback.svg" alt="Feedback"/>
          </Container>
        </Body>
      </Layout>
    </BrowserRouter>
  );
};

export default App;




