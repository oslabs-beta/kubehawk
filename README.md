
<p align="center">
  <img width="350" src="src/assets/prevue-large-green-bottom.png">
  <h1 align="center">KubeHawk </h1>
</p>


Kubehawk is a open source monitoring solution designed for Kubernetes clusters. With support for multicluster monitoring and RBAC visualization, Kubehawk simplifies the monitoring process of multiple production deployed Kubernetes clusters.

Check out our [website](https://www.kubehawk.com)!
<br/>

<div align="center">

[![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)](https://grafana.com/)
[![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)](https://prometheus.io/)
[![Cypress](https://img.shields.io/badge/cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

</div>

<br/>

## Features
1. Intuitive visualization of RBAC in your Kubernetes cluster
2. Real-time cluster health metrics monitoring, including pod status, resource utilization, and network traffic
3. No online database! We keep your data on your local machine for maximum security
4. Lightweight and highly efficient design for minimal impact on cluster performance
5. Cross-platform compatibility (Local, GKE, AWS) for seamless integration into your existing infrastructure
6. Easily extensible for future improvements, making it an ideal choice for teams looking to customize and enhance their security monitoring capabilities
7. Enhanced security and adherence to best practices, ensuring the safety and integrity of your valuable data and applications

## Prerequisites
Before you begin, ensure you have met the following requirements:

Kubernetes cluster version 1.18 or higher
kubectl version 1.18 or higher
Docker installed (if running locally)

# Getting Started
1. Fork and clone the repo: <br/>
   `git clone https://github.com/oslabs-beta/kubehawk.git`
2. Install dependencies: <br/>
   `npm install`
3. Make sure your Kubernetes cluster is up and running with Prometheus and Grafana exposed.
    * [Expose your Prometheus and Grafana endpoints](https://github.com/oslabs-beta/kubehawk/blob/next-dashboard/clusterSetup.md)
    * [Export your RBAC bindings to your local computer](https://github.com/oslabs-beta/kubehawk/blob/next-dashboard/clusterSetup.md#export-your-rbac-bindings-to-your-localhost)

4. Run our program and visit the local <br/>
    `npm run dev`

# Contribution
Contributions are a great way to contribute to the open source community as a whole. If you'd like to contribute to Kubehawk, please follow the steps below to get started.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/yourNewFeature`)
3. Commit your Changes (`git commit -m 'Add some a fantastic new feature'`)
4. Push to the Branch (`git push origin feature/yourNewFeature`)
5. Open a Pull Request

# License

Kubehawk is designed under the [MIT License](License.txt)



