import React from 'react';

const HorizontalSlide = ({ leftcontent, rightcontent }) => (

  <div className = "row container-fluid">
    <div className = "col-6 modal-dialog-centered">
       <h1 className = "text-center display-1">{leftcontent}</h1>
     </div>
     <div className = "col-6 modal-dialog-centered">
       <h5 className = "text-center display-4 float-right">{rightcontent}</h5>
    </div>
  </div>

)

export default HorizontalSlide;
