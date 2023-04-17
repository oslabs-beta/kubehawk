import '../styles/application.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
        {/* You can add a global header here */}
      </header>
      <Component {...pageProps} />
      <footer>
        {/* You can add a global footer here */}
      </footer>
    </div>
  )
}

export default MyApp