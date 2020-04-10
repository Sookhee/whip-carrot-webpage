import React, {Component} from 'react';
import Popup from './PopUp';
import './Carrot.scss';

class Carrot extends Component{

    constructor(props){
        super(props);
        this.state = { showPopup: false };
        }
      
        togglePopup() {
         this.setState({
           showPopup: !this.state.showPopup
         });
       }

    render(){

        return(
            <div className="carrot" onClick={this.togglePopup.bind(this)}>
                <div className="image"></div>
                {this.state.showPopup ? 
                    <Popup closePopup={this.togglePopup.bind(this)}/>  
                    : null
                }
            </div>
            
        );
    };
}




export default Carrot;