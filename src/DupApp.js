import React,{Fragment} from 'react';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Pages/LoginPage';

const DupApp = () => {
  return (
    <Fragment>
      <Navbar />
      <LoginPage />
    </Fragment>
  )
}

export default DupApp;