import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function GetKlusterInfo() {
  const navigate = useNavigate()
  const [ipAddress, setIpAddress] = useState('')
  const [clusterName, setClusterName] = useState('')

  function changeIpAddress(e) {
    console.log(e.target.value)
    setIpAddress(e.target.value)
  }
  function changeClusterName(e) {
    console.log(e.target.value)
    setClusterName(e.target.value)
  }

  function handleClick(){
    navigate('/dashboard', {state: {ipAddress, clusterName}} )
  }
  return (
    <div className="onboard-page">
    <div className="base-container" >
    <div className="header">Tell us about your Cluster</div>
    <div className="content">
      <div className="form">
        <div className="form-group">
          <label htmlFor="IP">IP Address</label>
          <input type="text" name="username" onChange={changeIpAddress} placeholder="IP Address" />
        </div>
        <div className="form-group">
          <label htmlFor="cluster-name">Cluster Name</label>
          <input type="text" name="Cluster" onChange={changeClusterName} placeholder="Cluster Name" />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn" onClick={handleClick}>
        Continue 🦅
      </button>
    </div>
  </div>
  </div>
  )
}

export default GetKlusterInfo