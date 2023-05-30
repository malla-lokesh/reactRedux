import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);

  return (
    <React.Fragment>
      <Header/>
      {!isLoggedIn && <Auth/>}
      {isLoggedIn && <UserProfile/>}
      {isLoggedIn && <Counter />}
    </React.Fragment>
  );
}

export default App;
