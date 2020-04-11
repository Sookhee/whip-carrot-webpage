import React, {Component} from 'react';
import './Collection.scss';
import Carrot from './Carrot/Carrot';
import '../../animation/hover.scss';

class Collection extends Component{
    constructor(props){
        super(props);
        this.state = {
            popData: [
                {
                    name: "sky",
                    img: "/image/sky.jpg"
                }, {
                    name: "1",
                    img:"/image/1.jpg"
                }, {
                    name: "2",
                    img: "/image/2.jpg"
                }, {
                    name: "3",
                    img: "/image/sky.jpg"
                }, {
                    name: "4",
                    img: "/image/1.jpg"
                }, {
                    name: "5",
                    img: "/image/2.jpg"
                }, {
                    name: "6",
                    img: "/image/sky.jpg"
                }, {
                    name: "7",
                    img: "/image/2.jpg"
                }, {
                    name: "8",
                    img: "/image/1.jpg"
                }, {
                    name: "9",
                    img: "/image/sky.jpg"
                }, {
                    name: "10",
                    img: "/image/1.jpg"
                }, {
                    name: "11",
                    img: "/image/2.jpg"
                }, {
                    name: "12",
                    img: "/image/sky.jpg"
                }
            ]
        }
    }
    render(){
        return(
            <div className="collection">
                <a href="#" class="hvr-float">Float</a>
                <div className="title">Collect you Carrot!</div>
                    <div className="carrot-wrap">
                    {this.state.popData.map((carrot, i) => {
                    return (<Carrot name={carrot.name}
                                    img={carrot.img}
                                    key={i} 
                        />);
                    })
                }
                </div>
            </div>
        );
    };
}

export default Collection;