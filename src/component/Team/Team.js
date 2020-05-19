import React, {Component} from 'react';
import './Team.scss';
import Intro from '../Intro/Intro';
import Member from './Member'

class Team extends Component{

    constructor(props){
        super(props);
        this.state = {
            memberData: [
                {
                    name: "김수경",
                    major: "뉴미디어 소프트웨어과",
                    phone: "010-9396-2036",
                    github: "https://github.com/sugyeongKim",
                    instagram: "https://www.instagram.com/su_gyeong47/",
                    facebook: "https://www.facebook.com/profile.php?id=100024603741653",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/sugyeong.jpg?raw=true"
                }, {
                    name: "안지원", 
                    major: "뉴미디어 소프트웨어과",
                    phone: "010-7663-9705",
                    github: "https://github.com/jiwonan",
                    instagram: "https://www.instagram.com/jeon1_31/",
                    facebook: "https://www.facebook.com/Anjiwon1",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/jiwon.jpg?raw=true"
                }, {
                    name: "정민지", 
                    major: "뉴미디어 소프트웨어과",
                    phone: "010-4010-6613",
                    github: "https://github.com/Sookhee",
                    instagram: "https://www.instagram.com/5ookhee/",
                    facebook: "https://www.facebook.com/MinjiJeong02",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/minji.jpg?raw=true"
                }, {
                    name: "서채원", 
                    major: "뉴미디어 디자인과",
                    phone: "010-8833-6746",
                    facebook: "https://www.facebook.com/profile.php?id=100009601390266",
                    img: "https://github.com/Sookhee/AppandMe-Website2020/blob/master/src/img/%EC%84%9C%EC%B1%84%EC%9B%90.jpg?raw=true"
                }
            ]
        }
    }

    render(){
        return(
            <div className="team">
                <Intro title="팀원 소개" sub="채채당을 만든 개발자들과 디자이너 입니다."/>
                <div className="wrap-member">
                    {
                    this.state.memberData.map((member, i) => {
                        return (<Member name={member.name}
                                        major={member.major}
                                        phone={member.phone}
                                        github={member.github}
                                        instagram={member.instagram}
                                        facebook={member.facebook}
                                        img={member.img}
                                        key={i} 
                            />);
                        })
                    }
                </div>
            </div>
        );
    };
}

export default Team;