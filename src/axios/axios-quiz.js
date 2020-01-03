import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-b77e2.firebaseio.com/'
})