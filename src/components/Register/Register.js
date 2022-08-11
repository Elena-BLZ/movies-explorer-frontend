import React from 'react'
import "./Register.css"
import AuthForm from '../AuthForm/AuthForm'


export default function Register() {
  return (
    <AuthForm
     formName="registerForm"
     title="Добро пожаловать!" 
     buttonText="Зарегистрироваться" 
     navText="Уже зарегистрированы?" 
     navLinkTo="/singin"
     navLinkText="Войти"
    />
  )
}
