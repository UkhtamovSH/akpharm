import { useEffect, useState } from "react"
import { Col, Row } from "reactstrap"
import CategoryCard from "../components/category/CategoryCard"
import Header from "../components/Header"
import PartnersView from "../components/PartnersView"
import { getNotAuthInstance } from "../helpers/httpClient"
import CategoryLayout from "../layout/CategoryLayout"
import Main from "../layout/Main"

const Categories = (props) => {
  const [results, setResults] = useState([])
  const slug = props.match.params.slug

  const getResults = () => {
    getNotAuthInstance()
      .get("https://api.akpharm.uz/api/v1/drug-list/" + (slug ? "?category=" + slug : ""))
      .then((res) => {
        setResults(res.data.results)
      }).catch((err) => { });
  }
  useEffect(() => {
    getResults();
  }, [props.match.params.slug])

  const title = "Akpharmdagi mahsulotlar katalogi"
  return (
    <Main>
      <Header title={title} />
      <CategoryLayout>
        <Row>
          {results.map((result, index) => (
            <Col md={4}>
              <CategoryCard
                img={result.image}
                name={result.name}
                name2={result.manufacturer.name}
                key={index}
              />
            </Col>
          ))}
        </Row>
      </CategoryLayout>
      <section className="partnersViewCategories">
        <PartnersView />
      </section>
    </Main>
  )
}

export default Categories
