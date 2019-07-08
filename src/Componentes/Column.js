import React, { Component } from 'react';
import CardList from './CardList';
import { Droppable } from 'react-beautiful-dnd';

class Column extends Component {
    state = {  }
    render() { 
        return ( 
                
            <CardList
                columnId = {this.props.columnId}
                cards = {this.props.cards}
                cardType = {this.props.cardType}
            />

         );
    }
}
 
export default Column;