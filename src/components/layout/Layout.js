import React from 'react'
import Header from '../Header/Header'


function Layout({children}) {
  return (
    <div className='container-fluid'>
        <Header/>
        
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout