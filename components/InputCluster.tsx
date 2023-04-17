import Link from "next/link"

function InputCluster() {
  return (
    <>
    <div className="onboard-page">
    <div className="base-container">
    <div className="header">Tell us about your Cluster</div>
    <div className="content">
      <div className="form">
        <div className="form-group">
          <label htmlFor="IP">IP Address</label>
          <input type="text" name="username" placeholder="IP Address" />
        </div>
        <div className="form-group">
          <label htmlFor="cluster-name">Cluster Name</label>
          <input type="text" name="Cluster" placeholder="Cluster Name" />
        </div>
      </div>
    </div>
    <div className="footer">
      
      <Link href='/dashboard'>
      <button type="button" className="btn">
        Continue 🦅
      </button>

      </Link>
      
    </div>
  </div>
  </div>
  </>
  )
}

export default InputCluster