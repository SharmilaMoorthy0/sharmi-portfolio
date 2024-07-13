import React from 'react'
import img3 from '../images/img3.svg'
import './home.css'
import Layout from './layout/Layout'
import tape from '../images/tape.jpg'
import sea from'../images/sea.jpg'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate=useNavigate()
  return (
    <Layout>
      <div className='hero'>
        <div className='mask'>
          <img src={sea} className='img-fluid into-img' alt='introImg'/>
        </div>
        <div className='content'>
            <p>HELLO,
              I'm SHARMILA
            </p>
            <div className='typing'>
            <h1>FULL STACK DEVELOPER</h1>
            </div>
           <div>
          
              <a 
                href='/sharmi(1).pdf'   
                className='btn-main-offer my-2 '
              >
                Get Resume
              </a>
            
           </div>
            <button className='btn btn-dark  btns' onClick={()=>navigate('./About')}>About Me</button>
          

        </div>
      </div>
      
    </Layout>
  )




}

export default Home