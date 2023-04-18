import { GrafDashboard } from "../components/dashboards/GrafDashboard"
import { StateContext } from "../context/StateContext"
import { useContext } from "react"


function Dashboard() {
  const { componentState, setComponentState} = useContext(StateContext)
  const title: any = componentState.currentTitle
  console.log(componentState.currentTitle)
  return (
    <GrafDashboard title={title} />
  )
}

export default Dashboard