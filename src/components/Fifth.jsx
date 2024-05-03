import React from 'react'
import team from '../images/team.png'
function Fifth() {
  return (
    <>
    <div className="fullbody5 d-flex">
        <div className='cont5'>
            <p className="text-secondary f1">SUPERIOR NETWORKING FOR TRAVEL PLANNING</p>
            <h3 className='f2'> EASILY COORDINATE AND PLAN <br />
            WITH FRIENDS AND FAMILY</h3>
            <p className="f3 text-secondary">
                You're the type of person who wants to take amazing,unique vacations-the kind where luxuary meets authentic,and each experience is curated specially for you.We value the user journey and experience above all else and are differienciated by serving their needs first-we want to make their hectic and stressful lives easier by enabling them to focus on enjoying their vacation and ensuring they get the most
            </p>
            <button className="btn btn-primary">GET STARTED</button>
        </div>
        <img src={team} alt="" />
    </div>
    </>
  )
}

export default Fifth