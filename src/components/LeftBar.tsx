import React from 'react'
import shield from './assets/icons/shield.png'
import {MdOutlineSecurity, MdOutlineSettings} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {SiKubernetes} from 'react-icons/si'

function LeftBar() {
  return (
      <div id='left-bar'>
      <p><MdOutlineSecurity /> Security</p>
      <p><FaUsers /> Users</p>
      <p><SiKubernetes /> Cluster Metrics</p>
      <p><MdOutlineSettings /> Setting</p>
      </div>
  )
}

export default LeftBar