import React from 'react';

const VerticalSlide = ({ title, content }) => (

  <div className = "container-fluid">
     <h1 className = "text-center display-1">{title}</h1>
     <br/><br/>
     <ul className = "">{content.map(text => <li className = "display-4" key = {text}>{text}</li>)}</ul>
  </div>

)

export default VerticalSlide;
