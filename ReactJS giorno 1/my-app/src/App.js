import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

const dati = {
  title : "BottonNameExample",
  altImage : 'Cane',
  srcImage : 'https://www.piggypet.it/wp-content/uploads/2023/08/Progetto-senza-titolo-2023-08-05T132259.115-870x563@2x.jpg'
}

function App() {
  return (
    <div className="App">
      <ButtonComponent buttonTitle = {dati.title}/>
      <ImageComponent alt={dati.altImage} src = {dati.srcImage} />
    </div>
  );
}

export default App;
