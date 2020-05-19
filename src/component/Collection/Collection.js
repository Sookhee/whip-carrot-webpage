import React, {Component} from 'react';
import './Collection.scss';
import Carrot from './Carrot/Carrot';
import Intro from '../Intro/Intro';
import '../../animation/hover.scss';

class Collection extends Component{
    constructor(props){
        super(props);
        this.state = {
            popData: [
                {
                    name: "carrot1",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot1.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"

                }, {
                    name: "carrot2",
                    img:"https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot2.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                }, {
                    name: "carrot3",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot3.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                }, {
                    name: "carrot4",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot4.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                }, {
                    name: "carrot5",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot5.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                }, {
                    name: "carrot6",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot6.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                }, {
                    name: "carrot7",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot7.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                }, {
                    name: "carrot8",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot8.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                }, {
                    name: "carrot9",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot9.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                }, {
                    name: "carrot10",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot10.png?raw=true",
                    detail: "미림당근은 미림마이스터고를 다니다가 실성해서 넥타이를 머리에 두르고 난동을 부리는 중이다. 어쩌구저쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 (문구 수정)"
                },
                {},
                {}
            ]
        }
    }
    render(){
        return(
            <div className="collection">
                <Intro title="당근 도감" 
                       sub="퀴즈를 맞혀서 모은 당근들 어쩌구 볼 수 있는 도감입니다. 당근을 눌러 소개를 구경하세요? .. (문구 수정)"/>
                <div className="title-color">
                    <span className="f_color">C</span>o<span className="f_color">ll</span>e<span className="f_color">c</span>t <span className="f_color">Y</span>o<span className="f_color">u</span>r <span className="f_color"></span>Ca<span className="f_color">rr</span>o<span className="f_color">t</span>!
                   
                    </div>
                    <div className="carrot-wrap">
                    {this.state.popData.map((carrot, i) => {
                    return (
                        carrot.name == null ?
                        (
                            <div className="empty"></div>
                        )
                        :
                        (
                            <Carrot name={carrot.name}
                                img={carrot.img}
                                detail={carrot.detail}
                                key={i} 
                            />
                        )
                        );
                    })
                }

                
                </div>
            </div>
        );
    };
}

export default Collection;