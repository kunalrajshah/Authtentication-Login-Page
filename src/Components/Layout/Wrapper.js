import React,{Fragment} from 'react';
import Navbar from '../Navbar/Navbar';
import Classes from './Wrapper.module.css';

const Wrapper = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={Classes.main}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Wrapper;