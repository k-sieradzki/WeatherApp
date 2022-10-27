import React from 'react';
import './DynamicallyCities.css';
import {

	FaPlus,
} from 'react-icons/fa';

class DynamicallyCities extends React.Component
{
    constructor()
    {
        super()
        {
            this.state ={
                addTextbox:[{}]
            }
        }
    }
    addControls()
    {
        this.setState((
            {
                addTextbox:[...this.state.addTextbox, {}]
            }
        ))
    }
    delControls(i)
    {
        this.state.addTextbox.splice(i,1)
        this.setState({})
    }
    render(){
        return(
            <>
                <h1>How to Add</h1>
                {this.state.addTextbox.map((index) => (
                    <>
                    <input type="text" placeholder="test" />
                    {
                        index ?
                    <button onClick={() => this.delControls(index)}><FaPlus/></button>
                    :null
                    }
                    </>
                ))}
                <button onClick={() => this.addControls()}>Add controls</button>
            </>

        )
    }
}

export default DynamicallyCities;


