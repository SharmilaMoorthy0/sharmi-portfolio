import React from 'react'
import './project.css'
import Layout from './layout/Layout'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import sea from '../images/sea.jpg'
function Projects() {

  return (
    <Layout>
      <div className='project'>
        <div className='mask3'>
          <img src={sea} className='img-fluid into-img3' />
        </div>

        <div className='box3  '>
       
          <div className=' container '>
          <h1 className='my-5'> Projects</h1>
            <div className='row my-5 justify-content-center '>
           
              <div class="col-sm-12 col-md-4 col-lg-4 ">

                <img src={project1} class="img-fluid   projectbox" width={"500px"} height={"500px"} />
                <h5 class="card-title mt-0 "><strong>Ecommerce</strong></h5>
                <p className='card-text text-dark mt-0'>Ecommerce application with admin control using MERN</p>

              </div>


              <div class="col-sm-12 col-md-4 col-lg-4">

                <img src={project2} class=" img-fluid  projectbox" width={"500px"} height={"500px"} alt="..." />

                <h5 class="card-title mt-0 "><strong>Employe Management System</strong></h5>
                <p className='card-text text-dark mt-0'>EMS application to store Employes data at everything at one place(MERN).</p>

              </div>


              <div class="col-sm-12 col-md-4 col-lg-4 ">

                <img src={project3} class="img-fluid  projectbox" width={"500px"} height={"500px"} alt="..." />
                <h5 class="card-title mt-0 "><strong>ToDo App</strong></h5>
                <p className='card-text text-dark mt-0'>Small todo application using MERN</p>

              </div>

            </div>
          </div>




        </div>

      </div>










    </Layout>
  )
}

export default Projects