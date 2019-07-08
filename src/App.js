import React from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import CardList from './Componentes/CardList';
import RGL, { WidthProvider } from "react-grid-layout";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import GridLayout from 'react-grid-layout';
const ReactGridLayout = WidthProvider(RGL);


class  App extends React.Component {
  
  state = {
    cards : [],
    cardType: 'Artifact',
    layout: []

  }

  getCards = async () => {
    const url = `https://api.magicthegathering.io/v1/cards`;
    const response = await fetch(url);
    const cards = await response.json();
    const respuesta = []
    const Sets = new Set();
    cards.cards.forEach(card => {
      if(card.imageUrl !=null) {
        respuesta.push(card)
      }
      
    });
    respuesta.forEach(i =>{

      Sets.add(i.id)
      if(respuesta.length === Sets.size) {
        console.log('son iguales')
      }
    
    })


    this.setState({
      cards: respuesta


    })
  }

  getCardsByType = async (type) => {
    this.setState({
      cardType : type
    })
  }


  componentDidMount() {
    this.getCards();
  }

  reorder = (list,startIndex,endIndex) =>{
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex,0,removed);
    console.log(endIndex)
    return result;
  }

  onDragEnd = result =>{
    if(!result.destination) {
      return;
    }
    
    const cards = this.reorder(
      this.state.cards,
      result.source.index,
      result.destination.index 
    );


    this.setState({
      cards:cards
    })

    console.log("fuente " +  result.source.index )
    console.log('destino ' + result.destination.index )
  }

 
  render() {
    return (
      
      <div className="App">
      
        <Header
          titulo = 'MTG API'
        />

        <div>

          <Formulario
            getCardsByType = {this.getCardsByType}
          />
          
          <CardList
              cards = {this.state.cards}
              cardType = {this.state.cardType}
          />

        </div>

    </div>
    );
    }
}



export default App;
