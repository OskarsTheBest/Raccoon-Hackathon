import React from 'react'
import { FaSearch } from 'react-icons/fa'

const RequestButton = ({ setIsLoading, setHideMap }) => {

  return (
    <div onClick={() => {
        setIsLoading(true)
        setHideMap(true)
    }} className='request-btn'>
        <FaSearch/>
        <span>Monitor</span>
    </div>
  )
}

export default RequestButton