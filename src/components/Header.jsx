import { useEffect, useState } from "react"
import { Container } from "reactstrap"

const Header = (props) => {
  const [show, setShow] = useState(false)
  const { title } = props

  const showElement = () => {
    if (window.innerWidth > 992) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    showElement()
  }, [])

  window.addEventListener('resize', showElement)

  return (
    <>
      {!show ?
        <div className="appHeaderSection3">
          <div className="appHeaderSectionLayer" />
          <Container className="appHeaderSectionInfo">
            <p className="text-white">{title}</p>
          </Container>
        </div>
        :
        window.location.pathname === '/'
          ?
          <div className="appHeaderSection2">
            <div className="appHeaderSectionLayer" />
            <Container className="appHeaderSectionInfo">
              <p className="text-white">{title}</p>
            </Container>
          </div>
          :
          <div className="appHeaderSection">
            <div className="appHeaderSectionLayer" />
            <Container className="appHeaderSectionInfo">
              <p className="text-white">{title}</p>
            </Container>
          </div>
      }
    </>
  )
}

export default Header
