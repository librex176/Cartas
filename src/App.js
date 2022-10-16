import './App.css';
import {Detalle_carta} from './componentes/Detalle_carta';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Cartas disponibles</h1>
      
      <Detalle_carta 
        nombre='Borresavage Dragon'
        tipo='Sincro / Dragon'
        efecto='1 Tuner + 1+ non-Tuner monsters
        If this card is Synchro Summoned: You can equip 1 Link Monster from your GY to this card, and if you do, place Borrel Counters on this card equal to that Link Monsters Link Rating. This card gains ATK equal to half the ATK of the monster equipped to it by its effect. When your opponent activates a card or effect (Quick Effect): You can remove 1 Borrel Counter from this card; negate the activation. You can only use this effect of "Borreload Savage Dragon" once per turn.'
        imagen='img1'
        alt = 'Borresavage'
        />
        <Detalle_carta 
        nombre='Borreload Dragon'
        tipo='Link / Dragon'
        efecto='3+ Effect Monsters
        Neither player can target this card with monster effects. Once per turn (Quick Effect): You can target 1 face-up monster on the field; it loses 500 ATK/DEF. Your opponent cannot activate cards or effects in response to this effects activation. At the start of the Damage Step if this card attacks an opponent monster You can place that opponents monster in a zone this card points to and take control of it but send it to the GY during the End Phase of the next turn.'
        imagen='img2'
        alt='Borreload'
        />
      </div>
    </div>
  );
}

export default App;
