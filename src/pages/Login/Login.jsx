import React from 'react'
import InputGroup from '../../Components/InputGroup/InputGroup'
import useForm from '../../hooks/useForm';

import './Login.css'

const Login = () => {

    const [formData, handleChange] = useForm({
        emailTxt: "",
        senhaTxt: "",
    });


    return (
        <div className='box-login'>
            <div className="container-login">
                <div className="titulo-container-login">
                    <h1 className='titulo-element-login'>Health<span>Sync</span></h1>
                    <h2 className='subtitulo-element-login'>Bem-vindo(a) de volta!</h2>
                </div>
                <form className='formulario-login' onSubmit={handleChange}>
                    <div className="element-container-login">
                        <InputGroup type="email" value={formData.emailTxt} name="emailTxt" onChange={handleChange} label="E-mail" placehoder="Digite o E-mail" className="element-login"></InputGroup>
                    </div>
                    <div className="element-container-login">
                        <InputGroup type="password" value={formData.senha} name="senhaTxt" onChange={handleChange} label="Senha" placehoder="Digite a Senha"  className="element-login"></InputGroup>
                    </div>
                    <div className="btn-container-login">
                        <button type='submit' className='btn-login'>Entrar</button>
                        <a href="#">Esqueci a senha</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
