import React from 'react';
import HorizontalSlide from './HorizontalSlide'
import VerticalSlide from './VerticalSlide'

// TODO make mobile-friendly

const Slides = ({ slidenum, submit }) => (
  // TODO one day, this should query an API for the <div> of the slide with that ID
  // this is not that day
  <div>
   {slidenum == 0 &&
     <HorizontalSlide leftcontent = "Bountium" rightcontent = "Trustless Business" />
   }
   {slidenum == 1 &&
     <VerticalSlide title = "Mission" content = {
       [
         "Our unique insight: Trust is bad for business; trust is risky, nonscalable, subjective, and artificially limiting",
         "Bountium converts trustful business to trustless business"
       ]} />
   }
   {slidenum == 2 &&
     <VerticalSlide title = "Mission" content = {
       [
         "We have specifically identified inter-business relationships as the most painful trust-point today",
         "We are specifically targeting new, international supply relationships as the most trustful inter-business relationship"
       ]} />
   }
   {slidenum == 3 &&
     <VerticalSlide title = "How we do it" content = {
       [
         "Bountium converts trustful business to trustless business through smart contracts",
         "Payment is escrowed into the contract; we can’t touch it, you can’t touch it, and your counterparty can’t touch it",
         "Payment is released when the transaction’s predetermined terms are met; these terms include QA expectations, and other needed proofs for buyer satisfaction",
         "In case of dispute, the contract may defer to a mutually-agreed-upon arbitration mechanism"
       ]} />
   }
   {slidenum == 4 &&
     <VerticalSlide title = "Mission" content = {
       [
         "We are distributing through existing “trust brokers” today, because that’s where businesses go to \"purchase trust\"",
         "\tNamely: 1) Letter-of-Credit issuing banks, and 2) Trade organisations"
       ]} />
   }
   {slidenum == 5 &&
     <VerticalSlide title = "Current State" content = {
       [
         "We have proven Bountium as a successful means with which to make supply orders, processing > $10k in orders - internationally, anonymously, and between blockchain newbies",
       ]} />
   }
   {slidenum == 6 &&
     <div>
       <VerticalSlide title = "Next Steps" content = {
         [
           "But we're not satisfied - we're now breaking into the real world",
           "Our biggest priority is integrating with existing trust tooling, and finding bold partners who want to be on the right side of innovation",
         ]} />
       <div className = "text-center" id = "email-signup">
         <h1>Is that you?</h1><br/>
         <input type="email" id="email-input" placeholder="Leave your email if so!"/><br/>
         <button onClick = {submit} className = "btn btn-secondary mt-2">Submit</button>
       </div>
     </div>
   }
   {/* else, wtf*/}
   {!(slidenum >= 0 && slidenum < 7) &&
     <div>how did you get here</div>
   }
  </div>
);

export default Slides;
