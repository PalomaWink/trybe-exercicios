import Image from './Image';
import './App.css';
import staringCat from './staringCat.jpg'

function App() {
  return (
    <Image source={ staringCat } alternativeText={ 'Gato fofinho' } />
  );
}

export default App;
