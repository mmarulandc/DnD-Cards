import React from 'react';
import Card from './Card';
import GridLayout from 'react-grid-layout';
import _ from "lodash";
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'

const CardList = ({cards,cardType,columnId}) => {
    const indexes = cards.map((card,index) => (
        {i:index.toString(), x:(index * 2) %9, y:Math.floor(index * 2) % 2 , h:20, w:1, draggableHandle: ".react-grid-dragHandleExample" }
    ))
    console.log(indexes)
    return (
        
        <div className="container">
            <div className="row"  >
        <GridLayout className="layout" layout={indexes} cols={4} rowHeight={6} width={1000} >
                {cards.map((card, index) =>(
                <div key={index.toString()} className="react-grid-dragHandleExample">
                    <Card
                        card = {card}
                        key = {index.toString()}
                        cardType = {cardType}
                        index={ index}
                        >
                    </Card>
                </div>
                )) }
        </GridLayout>
            </div>        
        </div>
    )}
export default CardList;