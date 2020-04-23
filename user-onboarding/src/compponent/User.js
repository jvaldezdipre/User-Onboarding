import React from 'react';

function User({ details }) {
  return (
    <div className='user-card'>
      <img src={details.avatar} alt='user image' />
      <h3>
        {details.first_name} {details.last_name}
      </h3>
      <h2>{details.email}</h2>
    </div>
  );
}

export default User;
