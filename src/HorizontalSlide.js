import React from 'react';

const HorizontalSlide = ({ leftcontent, rightcontent }) => (

  <div>
    <div className = "d-none d-md-flex">
      <div className = "row container-fluid">
        <div className = "col-6 modal-dialog-centered">
           <h1 className = "text-center display-1">{leftcontent}</h1>
         </div>
         <div className = "col-6 modal-dialog-centered">
           <h5 className = "text-center display-4 float-right">{rightcontent}</h5>
        </div>
      </div>
    </div>
    <div className = "d-md-none container-fluid">
      <div className = "row mt-5">
        <h1 className = "text-center display-1">{leftcontent}</h1>
      </div>
      <div className = "row mt-5">
        <h5 className = "text-center display-4">{rightcontent}</h5>
      </div>
    </div>
  </div>

)

export default HorizontalSlide;
