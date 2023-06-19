import React, {useEffect, useState} from 'react';
import AuthTemplate from "../components/AuthTemplate";
import {useNavigate} from "react-router-dom";
import TextInput from "../components/TextInput";
import {Button} from "@mui/material";
import {createAlert} from "../utils/alerts";
import {tryAuth} from "../services/auth";

export default function SignIn() {

  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);

  const handleClick = async () => {
    const filteredFields = [login, password].filter(field => field.length < 3);
    if (filteredFields.length > 0) {
      setAlert(createAlert('warn', 'All fields lengths should be longer than 2 symbols'));
      return;
    }

    try {
      const user = await tryAuth({login, password}, true);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      setAlert(createAlert('error', error));
    }
  };

  const text = {
    title: 'You are for the first time?',
    fLine: 'To use our services you have to register',
    sLine: 'specifying your personal info'
  };

  const button = {
    label: 'Sign Up',
    onClick: () => {
      navigate('/sign_up');
    }
  };

  const buttonStyle = 'rounded-[30px] mt-10';

  return (
    <>
      <AuthTemplate text={text} button={button} label='Log in account'>
        {alert}
        <div className='flex flex-col gap-6 mt-4'>
          <TextInput label='Login' onChange={event => setLogin(event.target.value)}/>
          <TextInput label='Password' isPassword onChange={event => setPassword(event.target.value)}/>
          <Button
            onClick={handleClick}
            className={buttonStyle}
            variant='filled'
            style={{
              backgroundColor: '#3AA6AD',
              color: '#F0F0F0',
            }}>
            Sign In
          </Button>
        </div>
      </AuthTemplate>
    </>
  );
};