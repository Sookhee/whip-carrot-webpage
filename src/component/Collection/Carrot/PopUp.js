import React, {Component} from 'react';
import '../../../animation/hover.scss'
import './Popupstyle.css';  

class Popup extends Component{  

  render() {  
    return (  
        <div className='popup'>  
            <div className='popup\_inner'>  
                <button onClick={this.props.closePopup}>X</button> 
                <img src={this.props.img} alt=""/>
                {console.log(this)}
            </div>  
        </div>  
        );  
    }  
}  

export default Popup;