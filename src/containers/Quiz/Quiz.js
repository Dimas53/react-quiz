import React, {Component} from "react"
import cls from './Quiz.module.sass'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"
import Loader from "../../components/UI/Loader/Loader"
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../store/actions/quiz";

class Quiz extends Component {
  // state = {
  //   results: {}, // { [id]: success error }
  //   isFinished: false,
  //   activeQuestion: 0,
  //   answerState: null, // { [id]: 'success' 'error' }
  //   loading: true,
  //   quiz: [
  //     // {
  //     //   question: 'Какого цвета небо?',
  //     //   rightAnswerId: 2,
  //     //   id: 1,
  //     //   answers: [
  //     //     {text: 'Чёрный', id: 1},
  //     //     {text: 'Синий', id: 2},
  //     //     {text: 'Красный', id: 3},
  //     //     {text: 'Зеленый', id: 4}
  //     //   ]
  //     // },
  //     // {
  //     //   question: 'В каком году основали Санкт-Петербург?',
  //     //   rightAnswerId: 3,
  //     //   id: 2,
  //     //   answers: [
  //     //     {text: '1700', id: 1},
  //     //     {text: '1702', id: 2},
  //     //     {text: '1703', id: 3},
  //     //     {text: '1803', id: 4}
  //     //   ]
  //     // },
  //     // {
  //     //   question: 'Что лишнее в этом списке?',
  //     //   rightAnswerId: 3,
  //     //   id: 3,
  //     //   answers: [
  //     //     {text: 'Квадрат', id: 1},
  //     //     {text: 'Круг', id: 2},
  //     //     {text: 'Кубик', id: 3},
  //     //     {text: 'Треугольник', id: 4}
  //     //   ]
  //     // }
  //   ]
  // }

  // onAnswerClickHandler = answerId => {
  //   // if (this.state.answerState) {
  //   //   const key = Object.keys(this.state.answerState)[0]
  //   //   if (this.state.answerState[key] === 'success') {
  //   //     return
  //   //   }
  //   // }
  //   //
  //   // const quiestion = this.state.quiz[this.state.activeQuestion]
  //   // const results = this.state.results
  //   //
  //   // if (quiestion.rightAnswerId === answerId) {
  //   //   if (!results[quiestion.id]) {
  //   //     results[quiestion.id] = 'success'
  //   //   }
  //   //   this.setState({
  //   //     answerState: {[answerId]: 'success'},
  //   //     results
  //   //   })
  //   //   const timeout = window.setTimeout(() => {
  //   //     if (this.isQuizFinished()) {
  //   //       this.setState({
  //   //         isFinished: true
  //   //       })
  //   //     } else {
  //   //       this.setState({
  //   //         activeQuestion: this.state.activeQuestion + 1,
  //   //         answerState: null
  //   //       })
  //   //     }
  //   //     window.clearTimeout(timeout)
  //   //   }, 700)
  //   // } else {
  //   //   results[quiestion.id] = 'error'
  //   //   this.setState({
  //   //     answerState: {[answerId]: 'error'},
  //   //     results
  //   //   })
  //   // }
  // }

  // isQuizFinished() {
  //   return this.state.activeQuestion + 1 === this.state.quiz.length
  // }

  // retryHandler = () => {
  //   this.setState({
  //     results: {},
  //     isFinished: false,
  //     activeQuestion: 0,
  //     answerState: null
  //   })
  // }

  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
    // try {
    //   const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
    //   const quiz = response.data
    //
    //   this.setState({
    //     quiz,
    //     loading: false
    //   })
    // } catch (e) {
    //   console.log(e)
    // }

  }

 componentWillUnmount() {
    this.props.retryQuiz()
 }


  render() {
    return (
        <div className={cls.Quiz}>
          <div className={cls.QuizWrapper}>
            <h1>Ответьте на все вопросы</h1>

            {
              this.props.loading || !this.props.quiz
              ? <Loader/>
              :  this.props.isFinished
                ? <FinishedQuiz
                  results={this.props.results}
                  quiz={this.props.quiz}
                  onRetry={this.props.retryQuiz}
                />
                : <ActiveQuiz
                  answers={this.props.quiz[this.props.activeQuestion].answers}
                  question={this.props.quiz[this.props.activeQuestion].question}
                  onAnswerClick={this.props.quizAnswerClick}
                  quizLength={this.props.quiz.length}
                  answerNumber={this.props.activeQuestion + 1}
                  state={this.props.answerState}
                />
            }



          </div>
        </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)