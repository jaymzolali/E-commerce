import React from 'react'
import './subscribe.css'

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="sub_one">
        <p className="yes">Yes</p>
        <p className="write">Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Commerce.</p>
      </div>
      <div className="sub_email">
        <input type="email" placeholder='Drop your Email' />
        <button className='subs'>Subscribe <div className="img"></div></button>
      </div>
      <h6>First order only. You’re ready?</h6>
    </section>
  )
}

export default Subscribe