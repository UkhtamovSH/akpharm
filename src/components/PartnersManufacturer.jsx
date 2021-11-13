import { useEffect, useState } from 'react'
import '../styles/components/PartnersManufacturer.css'
import { getNotAuthInstance } from '../helpers/httpClient'
import { Card, Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
const PartnersManufacturer = () => {
  const [results, setResults] = useState([])

  const getResults = () => {
    getNotAuthInstance()
      .get(`https://api.akpharm.uz/api/v1/manufacturer-list/?page=1&lan=uz`)
      .then((res) => {
        setResults(res.data.results)
      }).catch((err) => { });
  }

  useEffect(() => {
    getResults();
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <section className="partnersManufacturer">
        <Container>
          <Row>
            {results.map((result, index) => (
              <Col md="3" className="partnersManufacturerCol my-3">
                <Link to={`/partners/${result.slug}`}>
                  <Card className="partnersManufacturerCard"
                    key={index}>
                    <img src={result.logo} className="partnersImg" alt="" />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default PartnersManufacturer
