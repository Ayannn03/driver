import React from 'react'
import './message.css'
import TabBar from '../tab-bar/tabBar'
import Rider from '../../images/rider.png'

const message = () => {
  return (
    <div className='message'>
        <div className='message-contents'>
        <div className='header'>
        <h3>Messages</h3>
    </div>
    <div className='chats'>
    <div className='chats-container'>
    <img src={Rider} />
    <div className='driver-message'>
    <h4>Me</h4>
    <p>w8 phoe</p>
    </div>
    </div>
    </div>
        <TabBar/>
        </div>
    </div>
  )
}

export default message;