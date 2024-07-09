import React from 'react'
import './contact.css'
import Layout from './layout/Layout'
import trees from '../images/trees.jpg'
import sea from '../images/sea.jpg'

function Contact() {
  return (

    <Layout>
      <div className='contact'>
        <div className='mask4'>
          <img src={sea} className='img-fluid into-img4 ' />
        </div>

        <div className='box4 w-75 m-auto '>
       
          <div className='container '>
         
          <div className='row text-center justify-content-center'>
          <h1 className=' '>Contact</h1>
            <div className='col-sm-12 col-md-12 col-lg-6 ml-20 mt-5'>
              <div className='w-75 m-2'>
                <input type='text' className='form-control align-items-center' placeholder='Name' />
              </div>
              <div className='w-75 m-2'>
                <input type='email' className='form-control' placeholder='Email' />
              </div>
              <div className='w-75 m-2'>
                <input type='text' className='form-control' placeholder='subject' />
              </div>
              <div className='w-75 m-2'>
                <input type='textarea' row='10' className='form-control' placeholder='Message' />
              </div>
              <div className='w-25 m-auto'>
                <button className='btn btn-primary'>Submit</button>
              </div>
            </div>
            <div className=' col-sm-12 col-md-12 col-lg-6 mt-5 text-dark text-center'>
               <p>
               <i class="fa fa-envelope" aria-hidden="true"></i> -sharmilamoorthy327@gmail.com
               </p>
               <p>
               <i class="fa fa-phone" aria-hidden="true"></i> -9944634370
               </p>
               <p>
               <i class="fa fa-map-marker" aria-hidden="true"></i>-AvalPoondurai,Erode-638115.
               </p>
            </div>
          </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Contact