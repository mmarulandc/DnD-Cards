import React from 'react';
import GridLayout from 'react-grid-layout';
import { identifier } from '@babel/types';


const Card = ({card,cardType,index}) => {
    
    const {imageUrl,name,type} = card
    
    
    const UrlImage = 
    <div className="card" >
        <div >
            <div className="" >
                <img src={imageUrl} alt={name} key={index.toString()}></img>
                
            </div>
        </div>
 
    </div>
    
    return ( 
        

        <div className=''
        >
        {UrlImage }
        </div>
       
        

        
    );
}
 
export default Card;