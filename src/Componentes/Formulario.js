import React, { Component } from 'react';
import Types from '../TypesData';


class Formulario extends Component {
    state = { 
        type : 'Artifact'
     }

    changeType = (e) => {
        this.setState({
            type: e.target.value
        },() => {
            this.props.getCardsByType(this.state.type);
        });

    }

    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s4 m8 offset-m2">
                    <form>
                        <h2>
                            Search by type
                        </h2>
                        <div className="input-field col s12 ">
                            <select
                            onChange={this.changeType}
                            >
                            {Types.map(type=>(

                                <option key ={type} value={type}>{type}</option>
                                
                            ))}

                            </select>


                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Formulario;