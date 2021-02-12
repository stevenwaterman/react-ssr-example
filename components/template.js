import Header from './header'
import Footer from './footer'

export default function Component ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
