import React, { Component } from 'react';
import User from '../User';

class UsersList extends Component {

  state = {users:[
    {id: 1, firstName: 'Vasya', lastName: 'Pupkin', likes: 0, isLiked: false,},
    {id: 2, firstName: 'Anna', lastName: 'Gorbenko', likes: 0, isLiked: false,},
  ]};

  mapUsers= (user)=>{
    return (
    <User firstName={user.firstName} lastName={user.lastName} key={user.id} likes= {user.likes}/>
  )};

  liker=()=> {
    // const {id, likes, isLiked} = this.state;
    this.setState({users: this.state.users.map((user) =>{
      return{...user,
        likes: user.id ? user.likes+1:user.likes,
        isLiked: user.id ? user.isLiked === true : user.isLiked,}
  }),
});
  };
  render() {
    const {users} = this.state;
    const usersList = users.map(this.mapUsers);
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Users</h1>
        <article>{usersList}</article>

      </div>
    );
  }
}

export default UsersList;
