import React from 'react'
import ViewSelector from './ViewSelector'


function Dashboard() {
  return (
    <div className="wrapper">
    {/* <ViewSelector name={'CPU Stats'}/> */}
    <ViewSelector name={'Security'}/>
</div>
  )
}

export default Dashboard