import { Col, Container, Row } from "reactstrap"
import '../styles/components/WeConnect.css'
import TitleSubTitle from "../components/TitleSubTitle"
import Phone from "../assets/svg/phone.svg"
import Location from "../assets/svg/Location.svg"
import Vector from "../assets/svg/Vector.svg"

const WeConnect = () => {
  const title = "Ariza qoldiring va biz siz bilan bogʻlanamiz";

  const subtitle = "Hamkorlik boʻyicha takliflaringiz yoki mahsulotlarni ulgurji koʻrinishda sotib olish boʻyicha savollaringiz boʻlsa, ariza qoldiring va biz siz bilan bogʻlanib, barcha savollaringizga javob beramiz."

  return (
    <>
      <section className="weConnectSection">
        <Container>
          <Row>
            <Col md={8} className="weConnectSectionCol1">
              <img src={Vector} className="weConnectVectorImg" alt="" />
              <TitleSubTitle
                title={title}
                subtitle={subtitle}
              />
              <a href="tel:+998712086784" className="text-decoration-none text-dark" style={{ color: '#1F2022' }}>
                <p className="text1">
                  <div className="text1ImgDiv">
                    <img src={Phone} alt="" />
                  </div>
                  <span className="">+998 71 208 67 84</span>
                </p>
              </a>
              <p className="text1">
                <div className="text1ImgDiv">
                  <img src={Location} alt="" />
                </div>
                <span className="">
                  Olmazor tumani, Kichik halqa yoʻli koʻchasi, 5-A
                </span>
              </p>
            </Col>
            <Col md={4}>
              wp
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WeConnect
