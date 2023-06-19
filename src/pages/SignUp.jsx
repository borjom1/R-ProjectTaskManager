import React, {useEffect, useState} from 'react';
import AuthTemplate from "../components/AuthTemplate";
import TextInput from "../components/TextInput";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {tryAuth} from '../services/auth';
import {createAlert} from "../utils/alerts";

export default function SignUp() {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [login, setLogin] = useState('');
  const [position, setPosition] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);

  const handleClick = async () => {
    const filteredFields = [
      firstName, lastName, login,
      position, password, confirmPassword
    ].filter(field => field.length < 2);

    if (filteredFields.length > 0) {
      setAlert(createAlert('warn','All fields lengths should be longer than 2'));
      return;
    } else if (password !== confirmPassword) {
      return;
    }

    try {
      const user = await tryAuth({firstName, lastName, login, position, password});
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.log(error)
      setAlert(createAlert('error', error));
    }
  };

  const button = {
    label: 'Sign In',
    onClick: () => {
      navigate('/sign_in');
    }
  };

  const buttonStyle = 'w-[35%] rounded-[30px] border-2 mt-10';
  const text = {
    title: 'Welcome back!',
    fLine: 'To keep connected with us please',
    sLine: 'login with your personal info'
  };

  return (
    <>
      <AuthTemplate text={text} button={button} label='Create an account'>
        {alert}
        <div className='flex gap-6'>
          <TextInput label='First name' onChange={event => setFirstName(event.target.value)}/>
          <TextInput label='Last name' onChange={event => setLastName(event.target.value)}/>
        </div>

        <div className='flex gap-6'>
          <TextInput label='Login' onChange={event => setLogin(event.target.value)}/>
          <TextInput label='Position' onChange={event => setPosition(event.target.value)}/>
        </div>

        <div className='flex gap-6'>
          <TextInput
            label='Password' isPassword
            onChange={event => setPassword(event.target.value)}
            error={password !== confirmPassword ? 'Passwords do not match' : null}
          />
          <TextInput
            label='Confirm password' isPassword
            onChange={event => setConfirmPassword(event.target.value)}
            error={password !== confirmPassword ? 'Passwords do not match' : null}
          />
        </div>

        <Button
          className={buttonStyle}
          variant='filled'
          style={{
            backgroundColor: '#3AA6AD',
            color: '#F0F0F0',
          }}
          onClick={handleClick}>
          Sign Up
        </Button>

      </AuthTemplate>
    </>
  );
};