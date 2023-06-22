import React, {useEffect, useState} from 'react';
import {IconButton} from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import SaveIcon from '@mui/icons-material/Save';
import FileUpload from "./FileUpload";
import TextInput from "./TextInput";
import {updateAvatar, updateUser} from "../services/user";

const ModalUserInfo = ({setActive, user, onSaveSuccess}) => {

  const [image, setImage] = useState(user.avatar);
  const [firstName, setFirstName] = useState(' ');
  const [lastName, setLastName] = useState(' ');
  const [position, setPosition] = useState(' ');

  const [fName, lName] = user.fullName.split(' ');

  useEffect(() => {
    setFirstName(fName);
    setLastName(lName);
    setPosition(user.position);
  }, []);

  const handleChange = event => {
    const uploadedFile = event.target.files[0];

    if (!uploadedFile) {
      return;
    }
    // read photo in binary format
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result.toString());
    reader.readAsDataURL(uploadedFile);
  };

  const handleSaveClick = () => {
    const userInfo = {firstName, lastName, position};
    updateUser(userInfo).then(() => {
      updateAvatar(image).then(() => {
        onSaveSuccess(firstName, lastName, position, image);
        setActive(false);
      })
    });
  };

  return (
    <div
      className='w-full h-full fixed top-0 left-0 z-10 flex justify-center items-center'
      style={{backgroundColor: 'rgba(0,0,0,0.58)'}}
      onClick={() => setActive(false)}>
      <div
        className='w-[50%] h-[55%] bg-dark-15 rounded-[30px]'
        onClick={event => event.stopPropagation()}>
        <div className='bg-cyan w-full h-[15%] rounded-t-[30px] flex items-center justify-between px-6'>
          <IconButton
            onClick={() => setActive(false)}
            aria-label="undo"
            style={{backgroundColor: '#1f9ca1', color: '#ececec'}}>
            <UndoIcon/>
          </IconButton>
          <p className='text-xl text-white-f0 font-medium'>Update profile</p>
          <IconButton
            aria-label="save"
            onClick={handleSaveClick}
            style={{backgroundColor: '#1f9ca1', color: '#ececec'}}>
            <SaveIcon/>
          </IconButton>
        </div>
        <div className='flex gap-4 px-10 py-12'>
          <div className='w-[45%] border-2 border-dark-1f rounded-lg px-3'>
            <p className='text-dark-31 text-sm font-medium'>Avatar settings</p>
            <div className='h-full flex flex-col justify-center items-center'>
              <img className='rounded-full' src={image} width={70} height={70} alt='avatar'/>
              <FileUpload onChange={handleChange}/>
            </div>
          </div>
          <div className='w-[55%] border-2 border-dark-1f rounded-lg px-3'>
            <p className='text-dark-31 text-sm font-medium'>Profile settings</p>
            <div className='mt-3 flex flex-col gap-2 py-4 px-10'>
              <TextInput
                onChange={event => setFirstName(event.target.value)}
                label='First name' bgColor={'#1f1f1f'} defaultValue={fName}
              />
              <TextInput
                onChange={event => setLastName(event.target.value)}
                label='Last name' bgColor={'#1f1f1f'} defaultValue={lName}
              />
              <TextInput
                onChange={event => setPosition(event.target.value)}
                label='Position' bgColor={'#1f1f1f'} defaultValue={user?.position}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUserInfo;