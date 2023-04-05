import React from 'react'
import ViewSelector from './ViewSelector'
import Navbar from './Navbar'


function Dashboard() {
  return (
    <div id="dash-container">
      <Navbar />
    <div className="wrapper">
    {/* <ViewSelector name={'CPU Stats'}/> */}
    <ViewSelector name={'Security'}/>
</div>
</div>

  )
}

export default Dashboard