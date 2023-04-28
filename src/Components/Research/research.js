import React from 'react'
import './reasearch.css'
import Footer from '../Footer/footer'

const res =[
  {
    'title':' Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
  },
  {
    'title':' Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
  },
  {
    'title':' Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
  },
  {
    'title':' Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
  },
  {
    'title':' Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
  },
]

const Research = () => {
  return (
    <div className='res'>
          <div className='res-1'>
              <span></span>
              <h1>RESEARCH INTERESTS</h1>
          </div>
          {res.map((data) => {
            return(
              <div className='res-2'>
                  <p>{data.title}</p>
              </div>
          )})}
          <Footer />
    </div>
  )
}

export default Research