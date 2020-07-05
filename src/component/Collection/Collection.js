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
                    name: "기본 당근",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot1.png?raw=true",
                    detail: "전형적인 당근. 깨끗하게 세척이 되어있다.",
                    color: "#fff955"
                }, {
                    name: "미림 당근",
                    img:"https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot2.png?raw=true",
                    detail: "밤새 과제하다 썩어버린 우리의 모습.",
                    color: "#fff955"
                }, {
                    name: "락앤롤 당근",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot3.png?raw=true",
                    detail: "ROCK이 아닌 즐거울 락 樂 ",
                    color: "#fff955"
                }, {
                    name: "소민지",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot4.png?raw=true",
                    detail: "당근이 되어버린 3107 소민지쿤;;",
                    color: "#fff955"
                }, {
                    name: "스프링 당근",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot5.png?raw=true",
                    detail: "@ : 여러분.. 대답 좀 해주세요.. 복습 좀 하시구요",
                    color: "#fff955"
                }, {
                    name: "이연우",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot6.png?raw=true",
                    detail: "큐티보쨕 넘 귀엽당ㅎㅎㅎㅎ",
                    color: "#fff955"
                }, {
                    name: "꽐라 당근",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot7.png?raw=true",
                    detail: "6개월 뒤 우리의 모습.",
                    color: "#fff955"
                }, {
                    name: "짜르 당근",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot8.png?raw=true",
                    detail: "짜잔~ 최영진 선생님 안녕하세요, 깜짝 이벤트 입니다.",
                    color: "#fff955"
                }, {
                    name: "근당",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot9.png?raw=true",
                    detail: ".다니합영환 을것 신오 에쇼티이아 ,요세하녕안",
                    color: "#fff955"
                }, {
                    name: "찵싹~",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/carrot10.png?raw=true",
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