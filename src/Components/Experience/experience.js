import React from 'react'
import './experience.css'
import Footer from '../Footer/footer'

const exp =[
  {
    "company":"Bharat Oman Refinery Limited",
    "position":"INDUSTRIAL TRAINING",
    "location":"Bina, Madhya Pradesh",
    "year":2016,
    "para":"Detailed study of crude distillation and vacuum distillation units"
  },
]

const Experience = () => {
  return (
    <div className='exp'>
      <div className='exp-0'>
    <span></span>
      <h1>EXPERIENCE</h1>
      </div>
        {exp.map((data) => {
          return(
            <>
            <div className='exp-1'>
            <div className='exp-left'>
              <h1>{data.year}</h1>
              <p className='pos'>{data.position}</p>
              <p className='comp'>{data.company}</p>
              <p className='comp'>{data.location}</p>
            </div>
            <div className='exp-right'>
            <p>{data.para}</p>
            </div>
            </div>
            </>
          )
        })}
        <Footer />
    </div>
  )
}

export default Experience