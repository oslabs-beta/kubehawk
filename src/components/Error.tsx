import React from 'react'
import lostImg from './assets/judgy_hawk.gif'

export default function Error() {
  return (
    <div>
        <h1>Uh oh... </h1>
        <img src={lostImg} alt="uh oh"/>
        <p>Something went wrong, thank you for your patience as we figure it out</p>
    </div>
  )
}
