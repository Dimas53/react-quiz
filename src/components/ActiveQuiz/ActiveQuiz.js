import React from "react"
import cls from './ActiveQuiz.module.sass'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={cls.ActiveQuiz}>
        <p className={cls.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
              {props.question}
            </span>
            <small>{props.answerNumber} из { props.quizLength }</small>
        </p>

        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />

    </div>
)

export default ActiveQuiz