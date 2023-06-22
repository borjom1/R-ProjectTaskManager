import React, {useEffect, useState} from 'react';
import avatar from '../assets/avatar.png';
import {IoIosRocket} from 'react-icons/io';
import {MdTimeline} from 'react-icons/md';
import {IoIosApps} from 'react-icons/io';
import Label from "./Label";
import {Button} from "@mui/material";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {useNavigate} from "react-router-dom";
import Role from "./Role";
import ModalUserInfo from "./ModalUserInfo";
import {getUser, removeUser} from "../utils/localstorage";
import {getUserInfo} from "../services/user";

const UserProfile = ({setUserRoles}) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [isModalActive, setModalActive] = useState(false);

  useEffect(() => {
    const item = getUser();
    if (!item) {
      navigate('/sign_in');
    }
    const {login} = getUser();
    getUserInfo().then(data => {
      const {avatar, ...any} = data;
      setUser({...any, login: '@' + login});
      setUserAvatar(avatar);
      setUserRoles(data.roles);
    });
  }, []);

  const onSaveSuccess = (firstName, lastName, position, avatar) => {
    setUser(Object.assign(user, {fullName: `${firstName} ${lastName}`, position}));
    setUserAvatar(avatar);
  };

  const handleLogoutClick = () => {
    removeUser();
    navigate('/sign_in');
  };

  const handleEditClick = () => setModalActive(!isModalActive);

  let role;
  if (user) {
    if (user.roles.includes('ADMIN')) {
      role = <Role variant='admin'/>;
    } else if (user.roles.includes('MANAGER')) {
      role = <Role variant='manager'/>;
    }
  }

  return (
    <div className='w-full h-full bg-dark-24 rounded-[30px]'>
      {isModalActive && <ModalUserInfo
        setActive={setModalActive}
        onSaveSuccess={onSaveSuccess}
        user={{...user, avatar: userAvatar}}
      />}
      <div className='w-full bg-dark-31 rounded-t-[30px] py-2 px-10 flex gap-3 items-center'>
        <img src={userAvatar || avatar} alt='avatar' width={45} className='rounded-full'/>
        <div>
          <div className='flex gap-2 items-center'>
            <p className='text-white-f0 text-lg leading-none'>{user?.fullName}</p>
            {role}
          </div>
          <p className='mt-1 text-gray-7d text-xs font-medium leading-none'>{user?.login}</p>
        </div>
      </div>
      <div className='px-10 mx-auto mt-6'>
        <Label
          name={'Position'}
          icon={<IoIosRocket color={'#424242'} size={18}/>}
          value={user?.position}
        />
        <div className='w-full flex justify-between mt-2'>
          <Label
            name={'Joined on'}
            icon={<MdTimeline color={'#424242'} size={18}/>}
            value={user?.joined}
          />
          <Label
            name={'Projects'}
            icon={<IoIosApps color={'#424242'} size={18}/>}
            value={user?.projects}
          />
        </div>

        <div className='flex gap-3 justify-end mt-4 mb-4'>
          <Button
            variant="filled"
            startIcon={<EditRoundedIcon/>}
            style={{
              backgroundColor: '#447591',
              color: '#ececec',
            }}
            onClick={handleEditClick}>
            Edit
          </Button>
          <Button
            variant="filled"
            startIcon={<LogoutRoundedIcon/>}
            style={{
              backgroundColor: '#415364',
              color: '#ececec',
            }}
            onClick={handleLogoutClick}>
            Log out
          </Button>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;