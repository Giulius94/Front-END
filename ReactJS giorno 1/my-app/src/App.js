import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import { TableComponent } from './components/TableComponent';

let users = [{
  id : 1,
  nome : 'Franco',
  username : 'Battiato',
  città : 'Posillipo'
},
{
  id : 2,
  nome : 'Checco',
  username : 'Zalone',
  città : 'Puglia'
}
  
]

function App() {
  return (
    <div className="App">
      <ButtonComponent buttonTitle = "BottonNameExample"/>
      <ImageComponent image = 'https://www.piggypet.it/wp-content/uploads/2023/08/Progetto-senza-titolo-2023-08-05T132259.115-870x563@2x.jpg' title = 'Cane' />
      <TableComponent listaUtenti={users} />
    </div>
  );
}

export default App;
