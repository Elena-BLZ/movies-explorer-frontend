import React from 'react'
import "./Register.css"
import AuthForm from '../AuthForm/AuthForm'

export default function Register({handleRegister}) {
  return (
    <AuthForm
     formName="registerForm"
     title="Добро пожаловать!" 
     buttonText="Зарегистрироваться" 
     navText="Уже зарегистрированы?" 
     navLinkTo="/signin"
     navLinkText="Войти"
     onSubmit={handleRegister}
    />
  )
}
