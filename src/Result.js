import React from 'react'

const Result = () => {
 return (
    <div className='result'>
        <h1>Analysis Review</h1>
        <div className='result-content'>
        <img src='./test2.png' />
        <div>
        <p>Total Forest Area: <span className='result-text'>1502m2</span> </p>
        <p>You can protect your forest only in <span className='result-text'>15€</span></p>
        </div>
        <div className='result-btn-container'>
            <div className='result-btn'>
                <span>Protect my forest</span>
            </div>
            <div className='result-btn result-btn-cancel'>
                <span>Cancel</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Result