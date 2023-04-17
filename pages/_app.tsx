import './styles/application.scss'
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
        {/* You can add a global header here */}
      </header>
      <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
      <footer>
        {/* You can add a global footer here */}
      </footer>
    </div>
  )
}

export default MyApp
