import React, {Component} from 'react';
import '../../../animation/hover.scss'
import './Popupstyle.css';  

class Popup extends Component {  
  render() {  
    return (  
        <div className='popup'>  
            <div className='popup\_inner'>  
                <button onClick={this.props.closePopup}>X</button> 
                <img src="/image/sky.jpg" alt=""/>
            </div>  
        </div>  
        );  
    }  
}  

export default Popup;