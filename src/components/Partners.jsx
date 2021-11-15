import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import TitleSubTitle from '../components/TitleSubTitle'
import { getNotAuthInstance } from "../helpers/httpClient"
import { getLanguage } from "../helpers/language"
import '../styles/components/Partners.css'

const Partners = () => {

  const [partners, setPartners] = useState([])

  const lan = getLanguage()

  const getPartners = () => {
    getNotAuthInstance()
      .get(`/api/v1/manufacturer-list/?per_page=8&ordering=is_home&lan=${lan}`)
      .then((res) => {
        setPartners(res.data.results)
      }).catch((err) => { });
  }

  useEffect(() => {
    getPartners();
    window.scroll(0, 0)
  }, [])


  const title = "30+ hamkorlar";
  const subtitle = "Hozirgi kunga kelib, butun dunyo boʻyicha 30 dan ortiq hamkorlar bilan ish yuritib kelmoqdamiz.";

  return (
    <>
      <section className="partnersSection">
        <Container>
          <Row>
            <Col md={12} lg={5} xl={5}>
              <TitleSubTitle
                title={title}
                subtitle={subtitle}
              />
              <Link to="/partners" className="appBtn2 d-inline-flex mt-4 text-decoration-none">
                Barcha hamkorlar
              </Link>
            </Col>
            <Col md={12} lg={7} xl={7}>
              <div className="partnersImgCardFlex">
                <Row>
                  {partners.map((item, index) => (
                    <Col xs={6} sm={3} md={3} key={index}>
                      <Link to={`/partners/${item.slug}`}>
                        <div className="partnersImgCard d-flex justify-content-center w-100">
                          <img src={item.logo} className="partnersImg" alt="" />
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Partners
