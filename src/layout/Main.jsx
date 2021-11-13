import Footer from "../components/Footer"
import Header from "../components/Header"
import WeConnect from "../components/WeConnect"
import Navbar from "../components/navbar/Navbar"
import './Main.css'

const Main = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <WeConnect />
      <Footer />
    </>
  )
}

export default Main
