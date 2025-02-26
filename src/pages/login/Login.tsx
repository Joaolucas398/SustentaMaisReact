import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
// import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';

import './Login.css';

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            nome:'',
            usuario:'',
            senha:'',
            foto:'',
            localidade:'',
            token:''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    navigate('/home', {replace: true});
                }
            }, [token])

            async function onSubmit(e: ChangeEvent<HTMLFormElement>){
                e.preventDefault();
                try{
                    await login(`/usuario/logar`, userLogin, setToken)
    
                    alert('Usuário logado com sucesso!');
                }catch(error){
                    alert('Dados do usuário inconsistentes. Erro ao logar!');
                }
            }

    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='gridLogin'>
            <Grid item sm={6} className='centraliza'>
                <Box className='retangulo1'>
                    <img src="https://i.imgur.com/zW3Yj5R.png" alt="hexagonos" className='hexagonos'/>
                    <Box className='texto'>
                        A rede que te inspira a ser mais sustentável!
                    </Box>
                    <img src="https://i.imgur.com/mrfJjEl.png" alt="hexagonos" className='hexagonosBot'/>
                </Box>
            </Grid>

            <Grid item className='centraliza' sm={6}>
                <img src="https://i.imgur.com/12aTZJR.png" alt="logoSustentaMais" className='logo'/>
                <Box className='retangulo2'>
                    <Box className='forms'>
                        <form onSubmit={onSubmit}>
                            <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail ou nome de usuário' variant='outlined' name='usuario'  />
                            <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password'/>
                            <Box marginTop={2} className='button'>
                                    <Button type='submit' id='entrarButton'>
                                        Entrar
                                    </Button>
                            </Box>
                        </form>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box textAlign='center'>
                            <Box className='box1'>
                                <hr style={{ width: "5.5rem" }} />
                                <Typography id='ou'>  ou</Typography>
                                <hr style={{ width: "5.5rem" }} />
                            </Box>
                            <Button id='google'>
                                <img className='googleIcon' src={require("../../assets/img/Google.png")} />
                                Entrar com o Google
                            </Button>
                            <Box id='esqueci'>
                                <Box>
                                    <Button id='conta'> Criar conta</Button>
                                </Box>
                                <Button id='novaSenha'>Esqueci minha senha</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>

    )
}

export default Login;