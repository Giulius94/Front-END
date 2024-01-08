import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import FetchData from './components/FetchData';


function App() {
  return (
    <div className="App">
      <ButtonComponent buttonTitle = "BottonNameExample"/>
      <ImageComponent image = 'https://www.piggypet.it/wp-content/uploads/2023/08/Progetto-senza-titolo-2023-08-05T132259.115-870x563@2x.jpg' title = 'Cane' />
    </div>
  );
}

export default App;
