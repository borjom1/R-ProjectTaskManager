import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const item = localStorage.getItem('user');
    if (!item) {
      navigate('/sign_in');
    }
    setUser(JSON.parse(item));
  }, []);

  return (
    <div>
      {JSON.stringify(user)}
      <br/>
      <button
        onClick={() => {
        localStorage.removeItem('user');
        navigate('sign_in');
      }}
      className='bg-slate-500 py-1 px-3 rounded-lg'>
        Log out
      </button>
    </div>
  );
};