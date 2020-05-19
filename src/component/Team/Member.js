import React, {Component} from 'react';
import './Member.scss';

class Member extends Component{
    render(){
        return(
            <div className="member">
                
                <img className="member-img hvr-grow" src={this.props.img}></img>
                <div className="member-name">{this.props.name}</div>
                <div className="member-phone">{this.props.major}</div>
                <div className="member-phone">{this.props.phone}</div>
                {
                    this.props.github == null ?
                    (
                        <div className="sns-wrap">
                            <a href={this.props.facebook}><div class="ir_pm facebook_img icon_box">Github</div></a>
                            <a href={this.props.instagram}><div className="ir_pm insta_img icon_box">Instagram</div></a>
                        </div>
                    )
                    :
                    (
                        <div className="sns-wrap">
                            <a href={this.props.github}><div class="ir_pm git_img icon_box">Github</div></a>
                            <a href={this.props.facebook}><div class="ir_pm facebook_img icon_box">Facebook</div></a>
                            <a href={this.props.instagram}><div className="ir_pm insta_img icon_box">Instagram</div></a>
                        </div>
                    )
                    
                }
                
            </div>
        );
    };
}

export default Member;