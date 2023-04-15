import React from 'react'
import { MdNotifications, MdClose } from 'react-icons/md'

const Notification = ({ handleSetNotification }) => {
    return (
        <div className='notification-container'>
            <ico><MdNotifications/></ico>
           <p> Hi this is a notification</p>
           <ico><MdClose className="notif-close-btn"  onClick={() => handleSetNotification()}/></ico>
        </div>
    )
}

export default Notification