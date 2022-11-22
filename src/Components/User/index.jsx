import React from "react";

class User extends React.Component {

  render(){
    const {id, firstName, lastName, likes, isLiked, liker} = this.props;
    console.log(firstName)
    return ( 
      <div className="userCard">
        <h2>User info</h2>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Likes: {likes}</p>
        <button className="btn" onClick={liker(id)} hidden={isLiked}>like</button>
        <button >delete user</button>

      </div>
    );
    }
  }

  export default User;