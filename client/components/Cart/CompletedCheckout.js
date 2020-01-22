import React from 'react'

const CompletedCheckout = props => {
  return (
    <div className="completedCheckout">
      <h1>Thanks for making Disney richer!!!</h1>
      <img src="https://specials-images.forbesimg.com/imageserve/5cc0c243a7ea436c70f3ba2f/960x0.jpg?fit=scale" />
      <h4>Your order for a total of ${props.total} has been placed!</h4>
    </div>
  )
}

export default CompletedCheckout
