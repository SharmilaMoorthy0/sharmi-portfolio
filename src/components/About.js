import React from 'react'
import trees from '../images/trees.jpg'
import './About.css'

import Layout from './layout/Layout'
import sea from '../images/sea.jpg'
import { Navigate, useNavigate } from 'react-router-dom'


function About() {
  const Navigate = useNavigate()
  return (
    <Layout>
      <div className='About'>
        <div className='mask1'>
          <img src={sea} className='img-fluid into-img ' />
        </div>
        <div className='box1 w-75 m-auto'>
          <div className='container text-center'  >
         
            <div className='row align-items-center p-5  '>
          
            <h1>About</h1>
                <p>Hello, I am a highly motivated and skilled engineering graduate looking for an entry-level position as a software engineer.
                  Strong in design and integration with intuitive problem-solving skills. Passionate to contribute ideas and learn new things.
                  I am available for any kind of job opportunity that suits my interests.</p>
                <button className='btn-dark btn btnss' onClick={() => Navigate('/Contact')}>contact Me</button>
              </div>
            </div>
          </div>
       
        {/* <div className=' box1 '>

          <div className='container '>
            <div className='row   '>

              <div className='content-section  col-sm-12 col-md-12 col-lg-6'>
                <h1>About</h1>
                <p>Hello, I am a highly motivated and skilled engineering graduate looking for an entry-level position as a software engineer.
                  Strong in design and integration with intuitive problem-solving skills. Passionate to contribute ideas and learn new things.
                  I am available for any kind of job opportunity that suits my interests.</p>
                <button className='btn btn-dark' onClick={() => Navigate('/Contact')}>contact</button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>




    </Layout>
  )
}

export default About