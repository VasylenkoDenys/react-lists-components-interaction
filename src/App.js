import React from 'react';
import './App.css';
import UsersList from './Components/UsersList';



class App extends React.Component {

  render() {
  return (
    <div className='App'>
      <UsersList/>
    </div>
  );
}
}
export default App;
