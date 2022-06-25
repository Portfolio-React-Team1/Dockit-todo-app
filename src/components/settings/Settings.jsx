import React from 'react'
import  './Settings.scss'
import './Settings-module.scss'
import brush from '../../assets/images/brush.svg'
import text from '../../assets/images/text.svg'
import language from '../../assets/images/language-square.svg'
import importIcon from '../../assets/images/import.svg'
import Setting from "./Setting"

const settingsArr=[{
  image:brush,
  text:"Change app color"
},
{
  image:text,
  text:"Change app typography"
},
{
  image:language,
  text:"Change app language"
},
]


const Settings = () => {
  return (
    <div className="settings_container">
<header className="settings_header">
Settings
</header>
<p style={{fontSize:"14px"}}>Settings</p>
<ul className="settings">

{settingsArr.map((setting,index)=>(
 <Setting {...setting} />
))
}
</ul>

<p style={{fontSize:"14px"}}>Imports</p>

<ul className="settings">
  <Setting image={importIcon} text={"Import from Google calender"}/>
</ul>


    </div>
  )
}

export default Settings