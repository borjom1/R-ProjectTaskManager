import React from 'react';
import {BsFillPeopleFill} from 'react-icons/bs';
import {IconButton} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import UserList from "./user/UserList";

const Members = ({roles, members, avatars, setMembers}) => {

  const isManager = roles?.includes('MANAGER');

  const handleAddMemberClick = () => {
  };
  const handleRemoveMemberClick = () => {
  };

  return (
    <div className='w-full h-full bg-dark-24 rounded-[30px]'>
      <div className='w-full bg-dark-31 rounded-t-[30px] h-[50px] flex justify-between items-center px-8'>

        <div className='flex gap-2 items-center'>
          <BsFillPeopleFill color={'#7A7A7A'} size={20}/>
          <p className='text-gray-7a'>Members</p>
        </div>

        {isManager &&
          <div className='flex gap-1 items-center'>
            <IconButton
              onClick={handleAddMemberClick}
              style={{color: '#ececec'}}>
              <PersonAddIcon/>
            </IconButton>
            <IconButton
              onClick={handleRemoveMemberClick}
              style={{color: '#ececec'}}>
              <PersonRemoveIcon/>
            </IconButton>
          </div>
        }

      </div>

      <UserList
        className='py-2 px-2'
        userClassName='px-4'
        users={members}
        avatars={avatars}
      />

    </div>
  );
};

export default Members;