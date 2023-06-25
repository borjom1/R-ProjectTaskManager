import React from 'react';
import Role from "./Role";
import User from "./User";

const UserList = ({className, userClassName, users, avatars}) => {

  console.log('users', users)
  console.log('avatars', avatars)

  const mappedUsers = users?.map(user => {
    let role;
    if (user.roles.includes('ROLE_ADMIN')) {
      role = <Role variant={'admin'}/>;
    } else if (user.roles.includes('ROLE_MANAGER')) {
      role = <Role variant={'manager'}/>;
    }

    return (
      <User
        key={user.id}
        className={userClassName}
        offBg={true}
        login={user.login}
        fullName={user.fullName}
        role={role}
        userAvatar={avatars.find(e => e.id === user.id)?.avatar}
      />
    );
  });

  return (
    <div className={className}>
      {mappedUsers}
    </div>
  );
};

export default UserList;