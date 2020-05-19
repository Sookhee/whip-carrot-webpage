import React, {Component} from 'react';
import '../../../animation/hover.scss'
import './Popupstyle.css';  

class Popup extends Component{  

  render() {  

    return (  
        <div className='popup'>  
            <div className='popup inner'>
                <div onClick={this.props.closePopup} className="cancel-button"></div>

                <div className="leftback" style={{background: this.props.color}}>
                    <img className="carrotimg" src={this.props.img} alt=""/>
                </div>

                <div className="rightback">
                    <h1 className="detail_title">{this.props.name}</h1>
                    <span className="detail_content">{this.props.detail}</span>
                </div>
            </div>  
        </div>  
        );  
    }  
}  

export default Popup;