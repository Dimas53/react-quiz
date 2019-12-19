import React from "react"
import cls from './AnswerItem.module.sass'

const AnswerItem = props => {
    return (
        <li
            className={cls.AnswerItem}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem