import React, {Component} from "react"
import cls from './Auth.module.sass'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className={cls.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form onSubmit={this.submitHandler} className={cls.AuthForm}>
            <Input
              label="Email"
            />

            <Input
              label="Пароль"
              errorMessage={'TEST'}
            />

            <Button
              type="success"
              onClick={this.loginHandler}
            >
              Войти
            </Button>

            <Button
              type="primary"
              onClick={this.registerHandler}
            >
              Зарегистрироваться
            </Button>

          </form>
        </div>
      </div>
    )
  }
}