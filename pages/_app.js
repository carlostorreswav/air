import { NotifProvider } from "../air/notif"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <NotifProvider>
      <Component {...pageProps} />
    </NotifProvider>
  )
}

export default MyApp
