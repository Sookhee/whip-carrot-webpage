import React, {Component} from 'react';
import {AppContext} from '../../Context';
import Axios from 'axios';
import './Right.scss';

class Right extends Component{
    static contextType = AppContext;

    constructor(props){
        super(props);
        this.state = {
            quiz1:null,
            quiz2:null,
            quiz3:null,
            quiz4:null,
            quiz5:null
        };
    }

    handleOptionChangeQuiz1 = (event) => {this.setState({quiz1:event.target.value});}
    handleOptionChangeQuiz2 = (event) => {this.setState({quiz2:event.target.value});}
    handleOptionChangeQuiz3 = (event) => {this.setState({quiz3:event.target.value});}
    handleOptionChangeQuiz4 = (event) => {this.setState({quiz4:event.target.value});}
    handleOptionChangeQuiz5 = (event) => {this.setState({quiz5:event.target.value});}

    insertQuiz = (event) => {
        event.preventDefault();
        event.persist();
        var url = 'http://18.222.91.117/apply-quiz.php';

        Axios.post(
            url,
            {
                name:this.name.value,
                phone:this.phone.value,
                quiz1:this.state.quiz1,
                quiz2:this.state.quiz2,
                quiz3:this.state.quiz3,
                quiz4:this.state.quiz4,
                quiz5:this.state.quiz5
            }
        )
        .then(function (response){
            if(response.data.success === 1){
                event.target.reset();
                alert(response.data.msg);
            }
            else{
                alert(response.data.msg);
            }
        })
        .catch(function (error) {
            alert("error : " + error);
        });
    }

    render(){
        return(
            <div className="quiz-right">
                <form onSubmit={this.insertQuiz}>
                    <div className="wrap-quiz">
                        <div className="title"><span>Q1.</span> 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='1-1' name='q1' id='radio1-1' onChange={this.handleOptionChangeQuiz1}/>
                            <label htmlFor='radio1-1'>Value 1</label><br/>
                            <input type='radio' value='1-2' name='q1' id='radio1-2' onChange={this.handleOptionChangeQuiz1}/>
                            <label htmlFor='radio1-2'>Value 2</label><br/>
                            <input type='radio' value='1-3' name='q1' id='radio1-3' onChange={this.handleOptionChangeQuiz1}/>
                            <label htmlFor='radio1-3'>Value 3</label><br/>
                        </div>
                    </div>

                    <div className="wrap-quiz">
                        <div className="title"><span>Q2.</span> 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='2-1' name='q2' id='radio2-1' onChange={this.handleOptionChangeQuiz2}/>
                            <label htmlFor='radio2-1'>Value 1</label><br/>
                            <input type='radio' value='2-2' name='q2' id='radio2-2' onChange={this.handleOptionChangeQuiz2}/>
                            <label htmlFor='radio2-2'>Value 2</label><br/>
                            <input type='radio' value='2-3' name='q2' id='radio2-3' onChange={this.handleOptionChangeQuiz2}/>
                            <label htmlFor='radio2-3'>Value 3</label><br/>
                        </div>
                    </div>

                    <div className="wrap-quiz">
                        <div className="title"><span>Q1.</span> 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='3-1' name='q3' id='radio3-1' onChange={this.handleOptionChangeQuiz3}/>
                            <label htmlFor='radio3-1'>Value 1</label><br/>
                            <input type='radio' value='3-2' name='q3' id='radio3-2' onChange={this.handleOptionChangeQuiz3}/>
                            <label htmlFor='radio3-2'>Value 2</label><br/>
                            <input type='radio' value='3-3' name='q3' id='radio3-3' onChange={this.handleOptionChangeQuiz3}/>
                            <label htmlFor='radio3-3'>Value 3</label><br/>
                        </div>
                    </div>

                    <div className="wrap-quiz">
                        <div className="title"><span>Q1.</span> 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='4-1' name='q4' id='radio4-1' onChange={this.handleOptionChangeQuiz4}/>
                            <label htmlFor='radio4-1'>Value 1</label><br/>
                            <input type='radio' value='4-2' name='q4' id='radio4-2' onChange={this.handleOptionChangeQuiz4}/>
                            <label htmlFor='radio4-2'>Value 2</label><br/>
                            <input type='radio' value='4-3' name='q4' id='radio4-3' onChange={this.handleOptionChangeQuiz4}/>
                            <label htmlFor='radio4-3'>Value 3</label><br/>
                        </div>
                    </div>

                    <div className="wrap-quiz">
                        <div className="title"><span>Q1.</span> 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='5-1' name='q5' id='radio5-1' onChange={this.handleOptionChangeQuiz5}/>
                            <label htmlFor='radio5-1'>Value 1</label><br/>
                            <input type='radio' value='5-2' name='q5' id='radio5-2' onChange={this.handleOptionChangeQuiz5}/>
                            <label htmlFor='radio5-2'>Value 2</label><br/>
                            <input type='radio' value='5-3' name='q5' id='radio5-3' onChange={this.handleOptionChangeQuiz5}/>
                            <label htmlFor='radio5-3'>Value 3</label><br/>
                        </div>
                    </div>

                    <hr/>

                    <div className="wrap-info">
                        <div className="wrap-input">
                            <div className="title">전화번호</div>
                            <input className="input" type="text" name="phone" placeholder="전화번호를 적어주세요." ref={(val) => this.phone = val}></input>
                        </div>
                        <div className="wrap-input">
                            <div className="title">이름</div>
                            <input className="input" type="text" name="name" placeholder="이름을 적어주세요." ref={(val) => this.name = val}></input>
                        </div>
                    </div>
                    <div className="wrap-button">
                        <input type="submit" value="제출하기" className="quiz-submit"/>
                    </div>
                </form>
            </div>
        );
    };
}



export default Right;