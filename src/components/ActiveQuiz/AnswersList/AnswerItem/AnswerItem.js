import React from "react"
import cls from './AnswerItem.module.sass'

const AnswerItem = props => {
    const classes = [cls.AnswerItem]

    if (props.state) {
        classes.push(cls[props.state])
    }
    return (
        <li
            className={classes.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem