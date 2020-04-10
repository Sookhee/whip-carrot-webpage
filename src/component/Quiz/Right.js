import React, {Component} from 'react';
import './Right.scss';

class Right extends Component{
    render(){
        return(
            <div className="quiz-right">
                <form>
                    <div className="wrap-quiz">
                        <div className="title">Q1. 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='1' name='q1' id='radio1-1'/>
                            <label for='radio1-1'>Value 1</label><br/>
                            <input type='radio' value='2' name='q1' id='radio1-2'/>
                            <label for='radio1-2'>Value 2</label><br/>
                            <input type='radio' value='3' name='q1' id='radio1-3'/>
                            <label for='radio1-3'>Value 3</label><br/>
                        </div>
                    </div>
                    <div className="wrap-quiz">
                        <div className="title">Q2. 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='1' name='q2' id='radio2-1'/>
                            <label for='radio2-1'>Value 1</label><br/>
                            <input type='radio' value='2' name='q2' id='radio2-2'/>
                            <label for='radio2-2'>Value 2</label><br/>
                            <input type='radio' value='3' name='q2' id='radio2-3'/>
                            <label for='radio2-3'>Value 3</label><br/>
                        </div>
                    </div>
                    <div className="wrap-quiz">
                        <div className="title">Q3. 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='1' name='q3' id='radio3-1'/>
                            <label for='radio3-1'>Value 1</label><br/>
                            <input type='radio' value='2' name='q3' id='radio3-2'/>
                            <label for='radio3-2'>Value 2</label><br/>
                            <input type='radio' value='3' name='q3' id='radio3-3'/>
                            <label for='radio3-3'>Value 3</label><br/>
                        </div>
                    </div>
                    <div className="wrap-quiz">
                        <div className="title">Q4. 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='1' name='q4' id='radio4-1'/>
                            <label for='radio4-1'>Value 1</label><br/>
                            <input type='radio' value='2' name='q4' id='radio4-2'/>
                            <label for='radio4-2'>Value 2</label><br/>
                            <input type='radio' value='3' name='q4' id='radio4-3'/>
                            <label for='radio4-3'>Value 3</label><br/>
                        </div>
                    </div>
                    <div className="wrap-quiz">
                        <div className="title">Q5. 어쩌고저쩌고</div>
                        <div className="wrap-answer">
                            <input type='radio' value='1' name='q5' id='radio5-1'/>
                            <label for='radio5-1'>Value 1</label><br/>
                            <input type='radio' value='2' name='q5' id='radio5-2'/>
                            <label for='radio5-2'>Value 2</label><br/>
                            <input type='radio' value='3' name='q5' id='radio5-3'/>
                            <label for='radio5-3'>Value 3</label><br/>
                        </div>
                    </div>
                    
                    <div className="wrap-quiz">
                        <div className="title">이벤트를 위한 정보 입력입니다</div>
                        <div className="wrap-answer">
                            <div><span>이름</span><input type="text"/></div>
                            <div><span>전화번호</span><input type="text"/></div>
                        </div>
                    </div>

                    <button type="submit" className="quiz-button">제출</button>
                </form>
            </div>
        );
    };
}

export default Right;