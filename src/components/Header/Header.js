import React, { useState } from 'react'
import './header.css'
import MobileNav from '../MobileNav/MobileNav'




function Header() {
  const [openmenu, setopemmenu] = useState(false)
  const togglemenu = () => {
    setopemmenu(!openmenu)
  }
  return (
    <>
      <MobileNav isopen={openmenu} togglemenu={togglemenu} />

      <nav className='nav_wrapper p-0'>

        <div >
          <header className='nav_content ' >
            {/* <a className='logo ' href='Home'> DEVELOPER</a>
            <button className='menu_btn ' onClick={togglemenu}>
              {openmenu ?"": <i class="fa fa-bars" aria-hidden="true"></i>}
           
            </button> */}
            <ul className=''>
              <a className="menu_item mx-4" href='/'> Home</a>
              <a className="menu_item mx-4" href='/About'> About</a>
              <a className="menu_item mx-4" href='/skills'> skills</a>
              <a className="menu_item mx-4" href='/Projects'> Projects</a>
              <a className="menu_item mx-4" href='/Contact'> contact</a>
            </ul>



          </header>
        </div>
        <div className='d-flex mobile  justify-content-start d-lg-none d-sm-block '>

<button className='menu_btn ' onClick={togglemenu}>
  {openmenu ? "" : <i class="fa fa-bars" aria-hidden="true"></i>}

</button>
</div>
      </nav >
     


    </>


  )

}


export default Header



