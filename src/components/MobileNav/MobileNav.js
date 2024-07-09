import React from 'react'
import './mobilenav.css'

function MobileNav({isopen,togglemenu}) {
    return (
       
            <div className={`mobile-menu ${isopen ?"active":""}`}
            onClick={togglemenu}
            >
                 <div className='mobile-menu-container '>
                 {/* <a className='logo px-2' href='Home'> DEVELOPER</a> */}
                 <button className='menu_btn ' onClick={togglemenu}>
              {isopen ?<i class="fa fa-times" aria-hidden="true"></i>: ""}
           
            </button>
                <ul>
                    <li> <a className="menu_item " href='/'> Home</a></li>
                    <li><a className="menu_item " href='/About'> About</a></li>
                    <li><a className="menu_item" href='/skills'> skills</a></li>
                    <li><a className="menu_item " href='/Projects'> Projects</a></li>
                    <li><a className="menu_item" href='/contact'> contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav