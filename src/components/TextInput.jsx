import React from 'react';
import {TextField} from '@mui/material';

const TextInput = ({className, label, onChange, isPassword, error, bgColor, defaultValue}) => {

  const textFieldStyles = {
    backgroundColor: bgColor || '#424242',
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
      className={'rounded-lg ' + className}
      label={label}
      variant='filled'
      size='small'
      type={type}
      sx={textFieldStyles}
      onChange={onChange}
      defaultValue={defaultValue || ''}
      error={!!error} helperText={error}
    />
  );
};

export default TextInput;