import React from 'react'
import './awards.css'
import Footer from '../Footer/footer'

const awards = [
  {
    "award":"Selected for PMRF via lateral entry, May 2022"
  },
  {
    "award":"Recieved MHRD fellowship for Master of Technology at IIT BHU, 2019-2021"
  },
  {
    "award":"Secured 9th rank in the state merit list of Madhya Pradesh in intermediate, 2013"
  },
  {
    "award":"Awarded certificate of excellence for securing full marks in 'Physics' in intermediate, 2013"
  },
  {
    "award":"Hosted International conference ChemTSF-2022 at IIT Roorkee"
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