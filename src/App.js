import React from 'react'
import Header from './Header'
import Map from './Map'

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Map />
      <div className='screenshot-container'>Check your forest</div>
    </div>
  )
}

export default App