import React from 'react'
import './ProfileSettings.css'

const ProfileSettings = () => {
  return (
    <div className='main'>
        <div className='profile'>
            <div className='profile-title'>
                <h1>Profile</h1>
            </div>
            <div className='profile-pic'>
                <img src=''/>
            </div>
            <div className='tasks-btns'>
                <button>Tasks left</button>
                <button>Tasks done</button>
            </div>
            <ul className='settings-list'>
                <li><h4>Settings</h4></li>
                <li><h3>App Settings</h3></li>
                <li><h4>Account</h4></li>
                <li><h3>Change account name</h3></li>
                <li><h3>Change account password</h3></li>
                <li><h3>Change account image</h3></li>
                <li><h4>Uptodo</h4></li>
                <li><h3>About US</h3></li>
                <li><h3>FAQ</h3></li>
                <li><h3>Help & Feedback</h3></li>
                <li><h3>Support US</h3></li>
                <li><h3>Log out</h3></li>
            </ul>
        </div>
        <div className='settings-boxes'>
            <div className='name-settings'>
                <div className='settings-title'>
                    <h1>Change account settings</h1>
                </div>
                <div className='new-input'>
                    <input type='text' name='name' placeholder='Martha Hays'/>
                </div>
                <div className='btns'>
                    <button className='btn one'>Cancel</button>
                    <button className='btn two'>Edit</button>
                </div>
            </div>
            <div className='password-settings'>
                <div className='settings-title'>
                    <h1>Change account password</h1>
                </div>
                <div className='new-input'>
                    <div>
                        <label htmlFor='old-password'>Enter old password</label>
                        <input type='password' name='old-password'/>
                    </div>
                    <div>
                        <label htmlFor='new-password'>Enter new password</label>
                        <input type='password' name='new-password'/>
                    </div>
                </div>
                <div className='btns'>
                    <button className='btn one'>Cancel</button>
                    <button className='btn two'>Edit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileSettings