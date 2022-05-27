import React, {memo} from 'react'

const Header = () => {
    console.log('header')
  return (
   
        <h1 className='f1 light-green'>RoboFriends</h1>
     
  )
}

export default memo(Header)