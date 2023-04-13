import Link from "next/link"

function LandCopy() {
 return (
    <div className='landing-copy-section'>
        <div className="landing-copy">
            <span id="tagline">
        <h3>Let your Kubernetes soar</h3>
        </span>
        <span id="headline">
        <h1>Try KubeHawk Today</h1>
        </span>

        <ul>
            <li>Monitor users data metrics</li>
            <li>Control who has access to what</li>
            <li>Get the most out of your data</li>
        </ul>
        <Link href='/cluster'> <button>Dashboard</button></Link>
       
        </div>
    </div>
  )
}

export default LandCopy