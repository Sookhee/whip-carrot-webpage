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
                    phone: "010-0000-0000",
                    github: "",
                    facebook: "",
                    img: "https://d3mcojo3jv0dbr.cloudfront.net/2017/08/23/00/56/9be74bc89d94469af8b687934e41fe4c.png?w=600&h=300&q=65"
                }, {
                    name: "안지원", 
                    phone: "010-0000-0000",
                    github: "",
                    facebook: "",
                    img: "https://d3mcojo3jv0dbr.cloudfront.net/2017/08/23/00/56/9be74bc89d94469af8b687934e41fe4c.png?w=600&h=300&q=65"
                }, {
                    name: "정민지", 
                    phone: "010-0000-0000",
                    github: "",
                    facebook: "",
                    img: "https://d3mcojo3jv0dbr.cloudfront.net/2017/08/23/00/56/9be74bc89d94469af8b687934e41fe4c.png?w=600&h=300&q=65"
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
                                    facebook={member.facebook}
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