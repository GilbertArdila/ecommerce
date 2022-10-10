import React from 'react';
import { Header,Footer } from './index';

const Layout = ({children}) => {
  return (
    <div className='main'>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export  {Layout}