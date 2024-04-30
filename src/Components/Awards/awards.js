import React from 'react'
import './awards.css'
import Footer from '../Footer/footer'

const awards = [
  {
    "award":"PMRF for Doctoral degree at IITR, 2021-2025."
  },
  {
    "award":"Best Paper Award at IICHE-CHEMCON 2023."
  },
  {
    "award":"MHRD fellowship for Master of Technology at IIT BHU, 2019-2021"
  },
  {
    "award":"Secured 9th rank in the state merit list of Madhya Pradesh in intermediate, 2013."
  },
  {
    "award":"Awarded certificate of excellence for securing full marks in Physics in intermediate, 2013."
  },
]

const Awards = () => {
  return (
    <div className='awards'>
      <div className='aw-1'>
        <span></span>
        <h1>AWARDS AND ACHIEVEMENTS</h1>
      </div>
        <div className='awards-list'>
          {awards.map((data) => {
              return(
                <p>{data.award}</p>
              )
          })}
        </div>
        <Footer />
    </div>
  )
}

export default Awards