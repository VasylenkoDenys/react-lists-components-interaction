import React from "react";

class User extends React.Component {
  render() {
    const {id, firstName, lastName, likes, isLiked, userLiker, deleteUser } =
      this.props;
    return (
      <div className="userCard">
        <h2>User info</h2>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Likes: {likes}</p>
        <button className="btn" onClick={()=>userLiker(id)} hidden={isLiked}>
          like
        </button>
        <button className="btn" onClick={()=>deleteUser(id)}>
          delete user
        </button>
      </div>
    );
  }
}

export default User;
