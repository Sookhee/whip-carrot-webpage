import React, {Component} from 'react';
import './Collection.scss';
import Carrot from './Carrot/Carrot';
import Intro from '../Intro/Intro';
import '../../animation/hover.scss';

import Carrot1 from '../../img/carrot1.png';
import Carrot2 from '../../img/carrot2.png';
import Carrot3 from '../../img/carrot3.png';
import Carrot4 from '../../img/carrot4.png';
import Carrot5 from '../../img/carrot5.png';
import Carrot6 from '../../img/carrot6.png';
import Carrot7 from '../../img/carrot7.png';
import Carrot8 from '../../img/carrot8.png';
import Carrot9 from '../../img/carrot9.png';
import Carrot10 from '../../img/carrot10.png';

class Collection extends Component{
    constructor(props){
        super(props);
        this.state = {
            popData: [
                {
                    name: "기본 당근",
                    img: Carrot1,
                    detail: "전형적인 당근. 깨끗하게 세척이 되어있다.",
                    color: "#fff955"
                }, {
                    name: "미림 당근",
                    img: Carrot2,
                    detail: "밤새 과제하다 썩어버린 우리의 모습.",
                    color: "#fff955"
                }, {
                    name: "락앤롤 당근",
                    img: Carrot3,
                    detail: "ROCK이 아닌 즐거울 락 樂 ",
                    color: "#fff955"
                }, {
                    name: "소민지 당근",
                    img: Carrot4,
                    detail: "당근이 되어버린 3107 소민지쿤;;",
                    color: "#fff955"
                }, {
                    name: "스프링 당근",
                    img: Carrot5,
                    detail: "@ : 여러분.. 대답 좀 해주세요.. 복습 좀 하시구요",
                    color: "#fff955"
                }, {
                    name: "이연우 당근",
                    img: Carrot6,
                    detail: "큐티뽀쨕 넘 귀엽당ㅎㅎㅎㅎ",
                    color: "#fff955"
                }, {
                    name: "꽐라 당근",
                    img: Carrot7,
                    detail: "6개월 뒤 우리의 모습.",
                    color: "#fff955"
                }, {
                    name: "짜르 당근",
                    img: Carrot8,
                    detail: "짜잔~ 최영진 선생님 안녕하세요, 깜짝 이벤트 입니다.",
                    color: "#fff955"
                }, {
                    name: "근당 당근",
                    img: Carrot9,
                    detail: ".다니합영환 을것 신오 에쇼티이아 ,요세하녕안",
                    color: "#fff955"
                }, {
                    name: "찵싹~ 당근",
                    img: Carrot10,
                    detail: "챱챱챱챱챱챱챱챱츄릅츄릅챱챱챱",
                    color: "#fff955"
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
                       sub="퀴즈를 맞혀서 모을 수 있는 당근들을 볼 수 있는 도감입니다."/>
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
                                color={carrot.color}
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