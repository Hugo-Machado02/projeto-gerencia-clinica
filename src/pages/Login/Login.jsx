import React from 'react'
import InputGroup from '../../Components/InputGroup/InputGroup'
import useForm from '../../hooks/useForm';

const Login = () => {

    const [formData, handleChange] = useForm({
        emailTxt: "",
        senhaTxt: "",
    });


    return (
        <div className='container-login'>
            <form onSubmit={handleChange} className='formulario-login'>
                <div className="element-container-login">
                    <InputGroup type="text" value={formData.emailTxt} name="emailTxt" onChange={handleChange} label="E-mail" placehoder="Digite o E-mail" className="element-"></InputGroup>
                </div>
                <div className="element-container-login">
                    <InputGroup type="password" value={formData.senha} name="senhaTxt" onChange={handleChange} label="Senha" placehoder="Digite a Senha"  className="element-login"></InputGroup>
                </div>
            </form>
        </div>
    )
}

export default Login
