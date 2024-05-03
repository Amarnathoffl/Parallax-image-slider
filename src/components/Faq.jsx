import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function Faq() {
  return (
    <>
     <div className='fullbodyfaq bg-light'>
      <div className="contentfaq" style={{textAlign:'center'}}>
        <p className="text-secondary" style={{letterSpacing:'5px'}}>
        MUST ASKED QUESTIONS
        </p>
        <h3 style={{letterSpacing:'3px'}}>FREQUENTLY ASKED QUESTIONS</h3>
      </div>
       <div className='accord'>
         <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><i className="fa-regular fa-circle-question" style={{color: "#00b8e6"}}></i> &ensp; WHY PLANNING TRAVEL LOGISTICS IS REALLY HARD?</Accordion.Header>
            <Accordion.Body>
            Planning travel logistics can be difficult because there are many
            factors to consider, such as transportation, accommodations, and
            activities. It can be time-consuming to research and compare all of
            your options, and it can be overwhelming to keep track of all the
            details.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><i className="fa-regular fa-circle-question" style={{color: "#00b8e6"}}></i> &ensp;HOW CAN Wanderlust SAVE OUR TIME?</Accordion.Header>
            <Accordion.Body>
            Wanderlust can save you time by providing personalized recommendations
            and managing your group activities through an online dashboard. This
            means you don't have to spend hours researching and comparing options
            on your own, and you can easily keep track of your itinerary and
            group activities in one place.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><i className="fa-regular fa-circle-question" style={{color: "#00b8e6"}}></i> &ensp;WHY CANT I GET RECOMMENDATIONS THROUGH REVIEW SITES?</Accordion.Header>
            <Accordion.Body>
            It can be difficult to get recommendations through review sites because
            they are often cluttered with noise from anonymous internet users. It
            can be hard to know who to trust, and it can be time-consuming to
            sift through all the reviews to find the ones that are relevant and
            trustworthy. Wanderlust offers a solution to this problem by providing
            personalized recommendations from experts you can trust.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><i className="fa-regular fa-circle-question" style={{color: "#00b8e6"}}></i> &ensp;CAN I MANAGE MY GROUP ACTIVITIES THROUGH AN ONLINE DASHBOARD?</Accordion.Header>
            <Accordion.Body>
            Yes, with Wanderlust you can manage your group activities through an
            online dashboard. This makes it easy to keep track of your itinerary
            and group activities, and it saves you time by allowing you to
            manage everything in one place.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
       </div>
     </div>
    </>
  )
}

export default Faq