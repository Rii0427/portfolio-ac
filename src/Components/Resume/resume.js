import React from 'react'
import './resume.css'
// import cv from '../CV/CVANTRA-1.pdf'
import Footer from '../Footer/footer'

const resume = [
  {
    'year':'2021-Present',
    'dept':'Department of Chemical Engineering',
    'university':"Indian Institute of Technology",
    'degree':'Ph.D.',
    'location':'Roorkee 247667, India',
    cgpa:9.111
  },
  {
    'year':'2019-2021',
    'dept':'Department of Chemical Engineering',
    'university':"Indian Institute of Technology",
    'degree':'M.Tech',
    'location':'Varanasi 221005, India',
    cgpa:9.46
  },
  {
    'year':'2013-2017',
    'dept':'Department of Chemical Engineering',
    'university':"MANIT",
    'degree':'B.Tech',
    'location':'Bhopal 462003, India',
    cgpa:8.11
  },
  {
    'year':2013,
    'dept':'PCM',
    'university':"Saket Shishu Ranjan HSS, M.P. Board",
    'degree':'Intermediate ',
    'location':'MP',
    'cgpa':'95%'
  },
  {
    'year':2011,
    'dept':'All Subjects',
    'university':"Saket Shishu Ranjan HSS, M.P. Board",
    'degree':'Matriculate',
    'location':'MP',
    'cgpa':'90%'
  },
]

const Resume = () => {
  return (
    <div className='resume'>
        <div className='resume-1'>
          <span className='span-1'></span>
          <h1>ACADEMIC QUALIFICATIONS</h1>
        </div>
        {/* <div className='resume-2'>
          <h2>Education</h2>
          <a href={cv}><button>DOWNLOAD CV</button></a>
        </div> */}
        {resume.map((data) => {
            return(
        <div className='resume-3'>
              <div className='res-left'>{data.year}</div>
              <div className='res-right'>
                  <p className='degree'>{data.degree}</p>
                  <p className='dept'>{data.dept}</p>
                  <p className='university'>{data.university}</p>
                  <p className='university'>{data.location}</p>
                  <p className='cgpa'><span>CGPA/Percentage - </span>{data.cgpa}</p>
              </div>
        </div>
            )
        })}
        <Footer />
    </div>
  )
}

export default Resume