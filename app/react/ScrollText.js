import React from 'react'

export default (props) => {
  //to get the text to properly render as paragraphs
  const textArr = props.text ? props.text.split('\n') : [];
  return (
    <div className='scroll-text'>
      {textArr.map((ele, idx) => {
        return (
          <p key={idx}>{ele}</p>
        )
      })}
    </div>
  )
}