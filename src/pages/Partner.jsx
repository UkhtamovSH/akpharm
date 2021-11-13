import { useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"
import CategoryCard from "../components/category/CategoryCard"
import Header from "../components/Header"
import TitleSubTitle from "../components/TitleSubTitle"
import { getNotAuthInstance } from "../helpers/httpClient"
import Main from "../layout/Main"
import '../styles/components/Partner.css'

const Partner = (props) => {
  const [results, setResults] = useState([])
  const [manufacturer, setManufacturer] = useState([])

  const slug = props.match.params.slug

  const getResults = () => {
    getNotAuthInstance()
      .get(`/api/v1/manufacturer-list/${slug}/?lan=uz`)
      .then((res) => {
        setResults(res.data)
      }).catch((err) => { });
  }
  const getManufacturer = () => {
    getNotAuthInstance()
      .get(`/api/v1/drug-list/?page=1&manufacturer=${slug}&lan=uz`)
      .then((res) => {
        setManufacturer(res.data.results)
      }).catch((err) => { });
  }

  useEffect(() => {
    getResults();
    getManufacturer();
    window.scroll(0, 0)
  }, [props.match.params.slug])

  const title = results.name
  const pConvert = () => {
    return { __html: `${results.description}` };
  };
  return (
    <Main>
      <Header title={title} />
      <section className="logoPartnerSection">
        <Container>
          <div className="logoPartnerFlex">
            <div className="logoPartnerDiv">
              <div className="logoPartnerDivSub">
                <img src={results.logo} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="logoPartnerDiv2">
              <TitleSubTitle
                title={'Kompaniya haqida'}
                subtitle={
                  <p className="text-decoration-none" dangerouslySetInnerHTML={pConvert()} />}
              />
            </div>
          </div>

          <div className="my-3">
            <TitleSubTitle
              title={'Kompaniya mahsulotlari'}
            />
            <Row>
              {manufacturer.length > 0
                ?
                manufacturer.map((item, index) => (
                  <Col md={3} key={index}>
                    <CategoryCard
                      name={item.name}
                      name2={item.manufacturer.name}
                      img={item.image}
                    />
                  </Col>
                ))
                : <Col md={12}>
                  gg
                </Col>
              }
            </Row>
          </div>
        </Container>
      </section>
    </Main>
  )
}

export default Partner
