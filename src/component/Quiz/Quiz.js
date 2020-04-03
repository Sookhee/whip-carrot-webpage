import React, {Component} from 'react';
import './Quiz.scss';

class Quiz extends Component{
    render(){
        return(
            <div className="quiz">
                <div className="left">

                </div>
                <div className="right">
                    <form>
                        <div className="question-wrap">
                            <div className="question">
                                Q1. 너드 당근의 체크 셔츠 색은 무엇일까요?
                            </div>
                            <div className="answer-wrap">
                                <div className="answer"><input type="radio"></input> 빨간색</div>
                                <div className="answer"><input type="radio"></input> 파란색</div>
                                <div className="answer"><input type="radio"></input> 초록색</div>
                            </div>
                        </div>
                        <div className="question-wrap">
                            <div className="question">
                                Q1. 너드 당근의 체크 셔츠 색은 무엇일까요?
                            </div>
                            <div className="answer-wrap">
                                <div className="answer"><input type="radio"></input> 빨간색</div>
                                <div className="answer"><input type="radio"></input> 파란색</div>
                                <div className="answer"><input type="radio"></input> 초록색</div>
                            </div>
                        </div>
                        <div className="question-wrap">
                            <div className="question">
                                Q1. 너드 당근의 체크 셔츠 색은 무엇일까요?
                            </div>
                            <div className="answer-wrap">
                                <div className="answer"><input type="radio"></input> 빨간색</div>
                                <div className="answer"><input type="radio"></input> 파란색</div>
                                <div className="answer"><input type="radio"></input> 초록색</div>
                            </div>
                        </div>
                        <div className="question-wrap">
                            <div className="question">
                                Q1. 너드 당근의 체크 셔츠 색은 무엇일까요?
                            </div>
                            <div className="answer-wrap">
                                <div className="answer"><input type="radio"></input> 빨간색</div>
                                <div className="answer"><input type="radio"></input> 파란색</div>
                                <div className="answer"><input type="radio"></input> 초록색</div>
                            </div>
                        </div>
                        <button type="submit">제출</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Quiz;