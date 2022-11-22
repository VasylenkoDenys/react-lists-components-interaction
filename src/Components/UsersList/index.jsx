import React, { Component } from "react";
import User from "../User";

class UsersList extends Component {
  state = {
    users: [
      {
        id: 1,
        firstName: "Vasya",
        lastName: "Pupkin",
        likes: 0,
        isLiked: false,
      },
      {
        id: 2,
        firstName: "Anna",
        lastName: "Gorbenko",
        likes: 0,
        isLiked: false,
      },
    ],
  };

  mapUsers = (user) => {
    return (
      <User
        firstName={user.firstName}
        lastName={user.lastName}
        id={user.id}
        key={user.id}
        likes={user.likes}
        isLiked={user.isLiked}
        userLiker = {this.userLiker}
        deleteUser = {this.deleteUser}
      />
    );
  };
  
  userLiker=(id)=> {
    this.setState({
      users: this.state.users.map((user)=>{
        return {
          ...user,
          likes: id===user.id ? user.likes +1 : user.likes,
          isLiked: id===user.id ? true: user.isLiked,
        };
      }),
    });
  };

  deleteUser=(id)=> {
    return(
    this.setState({
      users: this.state.users.filter((user) => id !== user.id),
    })
  )};
  render() {
    const { users } = this.state;
    const usersList = users.map(this.mapUsers);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Users</h1>
        <article>{usersList}</article>
      </div>
    );
  }
}

export default UsersList;
