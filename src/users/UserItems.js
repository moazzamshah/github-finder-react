import React from 'react';
import PropTypes from 'prop-types';
const UserItems = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='added something'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3> {login} </h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItems.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
