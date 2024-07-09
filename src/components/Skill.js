import React from 'react'
import './skill.css'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import bootstrap from '../images/bootsrap.png'
import react from '../images/react.png'
import mongoDB from '../images/mongoDB.png'
import Layout from './layout/Layout'
import note from '../images/node.js.png'
import sea from '../images/sea.jpg'
import git from '../images/github.png'
import express from '../images/express.jpg'

function Skill() {
  return (
    <Layout>

      <div className='skill'>
        <div className='mask2'>
          <img src={sea} className='img-fluid into-img2' />
        </div>


        <div className='box2 w-75 m-auto'>

          <div className='container'>


            <div className='row  justify-content-center'>
              <h1>My Skills</h1>
              <div className='col-sm-6 col-md-6 col-lg-2  animea  justify-content-evenly mb-4' >
                <img className='size' src={html} />
                <p className='skill-name'> Html</p>
                <div className='progress-bar'>
                  <span className='percentage-html'> 95%</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-2  animea  justify-content-evenly mb-4' >
                <img className='size' src={css} />
                <p className='skill-name'>CSS</p>
                <div className='progress-bar'>
                  <span className='percentage-css'> 95%</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-2  animea  justify-content-evenly mb-4' >
                <img className='size' src={js} />
                <p className='skill-name'>JavaScript</p>
                <div className='progress-bar'>
                  <span className='percentage-js'> 75%</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-2 animea   justify-content-evenly mb-4' >
                <img className='size' src={bootstrap} />
                <p className='skill-name'>Bootsrap</p>
                <div className='progress-bar'>
                  <span className='percentage-bootsrap'> 95%</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-2 animea  justify-content-evenly mb-4' >
                <img className='size' src={react} />
                <p className='skill-name'>React</p>
                <div className='progress-bar'>
                  <span className='percentage-react'> 85%</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-2   animea justify-content-evenly mb-4' >
                <img className='size' src={note} />
                <p className='skill-name'> Node JS</p>
                <div className='progress-bar'>
                  <span className='percentage-express'> 75%</span>
                </div>
              </div>
              <div className=' col-sm-6 col-md-6 col-lg-2 animea justify-content-evenly mb-4' >
                <img className='size' src={express} />
                <p className='skill-name'> Express</p>
                <div className='progress-bar'>
                  <span className='percentage-node'> 75%</span>
                </div>
              </div>
              <div className=' col-sm-6 col-md-6 col-lg-2  animea  justify-content-evenly mb-4' >
                <img className='size' src={mongoDB} />
                <p className='skill-name'> MongoDB</p>
                <div className='progress-bar'>
                  <span className='percentage-mongo'> 75%</span>
                </div>
              </div>

              <div className='col-sm-6 col-md-6 col-lg-2 animea  justify-content-evenly mb-4' >
                <img className='size' src={git} />
                <p className='skill-name'>GitHub</p>
                <div className='progress-bar'>
                  <span className='percentage-git'> 75%</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>





    </Layout>



  )

}

export default Skill