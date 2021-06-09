import React, { Component } from 'react';
import UserItems from './UserItems';

export class Users extends Component {

  render() {
    return (
      <div className='userStyle'>
        {this.props.users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
