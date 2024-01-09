import { Container } from 'react-bootstrap';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <AllTheBooks />
      </Container> 
      <MyFooter />
    </>
  );
}

export default App;
