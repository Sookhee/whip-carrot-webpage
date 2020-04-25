import React, {Component} from 'react';
import '../../../animation/hover.scss'
import './Popupstyle.css';  

class Popup extends Component{  

  render() {  

    return (  
        <div className='popup'>  
            <div className='popup inner'>
                <button onClick={this.props.closePopup}>X</button>

                <div className="leftback">
                    <img className="carrotimg" src={this.props.img} alt=""/>
                </div>

                <div className="rightback">
                    <h1 className="detail_title">{this.props.name}</h1>
                    <span className="detail">{this.props.detail}</span>
                </div>
                {console.log(this)}
            </div>  
        </div>  
        );  
    }  
}  

export default Popup;