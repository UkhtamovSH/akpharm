import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import TitleSubTitle from '../components/TitleSubTitle'
import { getNotAuthInstance } from "../helpers/httpClient"
import '../styles/components/Partners.css'

const Partners = () => {

  const [partners, setPartners] = useState([])


  const getPartners = () => {
    getNotAuthInstance()
      .get('/api/v1/manufacturer-list/?per_page=8&ordering=is_home&lan=uz')
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
            <Col md={5}>
              <TitleSubTitle
                title={title}
                subtitle={subtitle}
              />
              <Link to="/partners" className="appBtn2 d-inline-flex mt-4 text-decoration-none">
                Barcha hamkorlar
              </Link>
            </Col>
            <Col md={7}>
              {partners.map((item, index) => (
                <Link to={`/partners/${item.slug}`} key={index}>
                  <div className="partnersImgCard">
                    <img src={item.logo} className="partnersImg" alt="" />
                  </div>
                </Link>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Partners
