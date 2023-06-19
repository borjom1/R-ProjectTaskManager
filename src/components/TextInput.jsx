import React from 'react';
import {TextField} from '@mui/material';

const TextInput = ({label, onChange, isPassword, error}) => {

  const textFieldStyles = {
    backgroundColor: '#424242',
    input: {
      color: '#F0F0F0',
      borderRadius: 30
    },
    label: {
      color: '#8F8F8F'
    },
  };

  const type = isPassword ? 'password' : 'text';

  return (
    <TextField
      className='rounded-lg'
      label={label}
      variant='filled'
      size='small'
      type={type}
      sx={textFieldStyles}
      onChange={onChange}
      error={!!error} helperText={error}
    />
  );
};

export default TextInput;