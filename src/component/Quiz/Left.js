import React, {Component} from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Left.scss';

class Left extends Component{
    render(){
        return(
            <div className="quiz-left">
                <Parallax className="custom-class" y={[-20, 20]} amount={0.1}>
                    <div className="img">
                    </div>
                </Parallax>
            </div>
        );
    };
}

export default Left;