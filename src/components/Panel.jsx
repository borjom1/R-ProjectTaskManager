import React from 'react';
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import {Button} from "@mui/material";

const Panel = ({name}) => {

  const handleEditClick = () => {};
  const handleDeleteClick = () => {};
  const handleExitClick = () => {};

  return (
    <div className='w-full bg-dark-24 rounded-[30px]'>
      <div className='w-full bg-dark-31 rounded-t-[30px] h-[50px] flex justify-between items-center px-8'>
        <p className='text-gray-7a'>Project</p>
        <p className='text-lg text-white-f0'>{name}</p>
      </div>
      <div className='flex gap-5 justify-between px-8 py-4'>
        <Button
          onClick={handleEditClick}
          className='w-1/3'
          variant="filled"
          startIcon={<EditRoundedIcon/>}
          style={{backgroundColor: '#447591', color: '#ececec'}}>
          Edit
        </Button>
        <Button
          onClick={handleDeleteClick}
          className='w-1/3'
          variant="filled"
          startIcon={<DeleteOutlineIcon/>}
          style={{backgroundColor: '#D23A3A', color: '#ececec'}}>
          Delete
        </Button>
        <Button
          onClick={handleExitClick}
          className='w-1/3'
          variant="filled"
          startIcon={<LogoutIcon/>}
          style={{backgroundColor: '#808080', color: '#ececec'}}>
          Exit
        </Button>
      </div>
    </div>
  );
};

export default Panel;