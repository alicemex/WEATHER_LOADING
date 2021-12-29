
import './App.css';
import MyComponent from './components/MyComponent.js'
import Card from './components/Card.jsx'
import Led from './components/Led.jsx';
import Weather from './components/Weather.jsx'
import Pokedex from './components/Pokedex.jsx'
function App() {
  return (
   
    <>
    <MyComponent  name="Dalia Macias" age={32} isMarried={false} ></MyComponent>
    <div className="Flex">
    <Pokedex background="#fff"></Pokedex>
    <Weather></Weather>
    </div>
    <Led className="foco"></Led> 
    
    <div className='App' >
    
    
    <Card 

        titulo="Mis hobbies" 
        item1="Música" 
        item2="Ejercicio" 
        item3="Videojuegos" 
        background="#17D7A0" ></Card>

      <Card 
        titulo="Tiempo libre" 
        item1="nada" 
        item2="netflix" 
        item3="popo" 
        background="#6166B3" ></Card>

      <Card 
        titulo="Comida Favorita:" 
        item1="pasta" 
        item2="wraps" 
        item3="sandwitches" 
        background="#32C1CD" ></Card>
    </div>
    </>
  );
}

export default App;
