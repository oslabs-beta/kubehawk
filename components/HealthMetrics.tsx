
function HealthMetrics() {
  return (
    <div id="dash-body">
        <div>
          <div className="row">
            <div className="column">
            <iframe src="http://aafceb2de711e4e3fb11539ebd64d3da-707198852.us-east-1.elb.amazonaws.com/d-solo/a87fb0d919ec0ea5f6543124e16c42a5/kubernetes-compute-resources-namespace-workloads?orgId=1&refresh=10s&var-datasource=default&var-cluster=&var-namespace=prometheus&var-type=deployment&from=1681417988807&to=1681421588807&panelId=1" width="450" height="200"></iframe>
              <iframe src="http://35.232.26.177/d-solo/09ec8aa1e996d6ffcd6817bbaff4db1b/kubernetes-api-server?orgId=1&refresh=10s&from=1680725303587&to=1680728903587&theme=light&panelId=9" width="225" height="100" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HealthMetrics