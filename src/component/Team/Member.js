import React, {Component} from 'react';
import './Member.scss';

class Member extends Component{
    render(){
        return(
            <div className="member">
                <img className="member-img hvr-grow" src={this.props.img}></img>
                <div className="member-name">{this.props.name}</div>
                <div className="member-phone">{this.props.phone}</div>
                <div className="sns-wrap">
                    <a href={this.props.github} class="ir_pm git_ico_img"><div>Github</div></a>
                    <a href={this.props.instagram} class="ir_pm insta_ico_img"><div>Instagram</div></a>
                </div>
            </div>
        );
    };
}

export default Member;