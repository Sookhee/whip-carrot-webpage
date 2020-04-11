import React, {Component} from 'react';
import './Team.scss';
import Member from './Member'

class Team extends Component{

    constructor(props){
        super(props);
        this.state = {
            memberData: [
                {
                    name: "김수경", 
                    phone: "010-9396-2036",
                    github: "https://github.com/sugyeongKim",
                    instagram: "https://www.instagram.com/su_gyeong47/",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/sugyeong.jpg?raw=true"
                }, {
                    name: "안지원", 
                    phone: "010-7663-9705",
                    github: "https://github.com/jiwonan",
                    instagram: "https://www.instagram.com/jeon1_31/",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/jiwon.jpg?raw=true"
                }, {
                    name: "정민지", 
                    phone: "010-4010-6613",
                    github: "https://github.com/Sookhee",
                    instagram: "https://www.instagram.com/5ookhee/",
                    img: "https://github.com/Sookhee/whip-carrot-webpage/blob/master/src/img/minji.jpg?raw=true"
                }
            ]
        }
    }

    render(){
        return(
            <div className="team">
                {
                this.state.memberData.map((member, i) => {
                    return (<Member name={member.name}
                                    phone={member.phone}
                                    github={member.github}
                                    instagram={member.instagram}
                                    img={member.img}
                                    key={i} 
                        />);
                    })
                }
            </div>
        );
    };
}

export default Team;