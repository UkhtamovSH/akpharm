import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Col, Row } from "reactstrap"
import CategoryCard from "../components/category/CategoryCard"
import Header from "../components/Header"
import PartnersView from "../components/PartnersView"
import { getNotAuthInstance } from "../helpers/httpClient"
import { getLanguage } from "../helpers/language"
import CategoryLayout from "../layout/CategoryLayout"
import Main from "../layout/Main"

const Categories = (props) => {
  const [resultsCategory, setResultsCategory] = useState([])
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const lan = getLanguage();

  const slug = props.match.params.slug ? props.match.params.slug : "";

  const getResults = (
    page = 1,
    next_url = `/api/v1/drug-list/?page=${page}${slug ? `&category=${slug}` : ''}&lan=${lan}`) => {
    if (page === 1) {
      setLoading(true);
    }
    getNotAuthInstance()
      .get(next_url)
      .then((res) => {
        const result = page === 1 ? res.data.results : [...resultsCategory, ...res.data.results]
        setResultsCategory(result)
        setNextUrl(res.data.next);
        setLoading(false);
      }).catch((err) => {
        setResultsCategory([])
      });
  }
  useEffect(() => {
    getResults();
  }, [props.match.params.slug])

  const title = "Akpharmdagi mahsulotlar katalogi"
  return (
    <Main>
      <Header title={title} />
      <CategoryLayout>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            Loading...
          </div>
        ) : (
          <InfiniteScroll
            dataLength={resultsCategory.length}
            next={() => {
              getResults(2, nextUrl);
            }}
            hasMore={nextUrl ? true : false}
            loader={<h4>Loading...</h4>}
          >
            <Row>

              {resultsCategory.map((result, index) => (
                <Col md={6} lg={6} xl={4} key={index}>
                  <CategoryCard
                    {...result}
                  />
                </Col>
              ))}
            </Row>

          </InfiniteScroll>
        )}
      </CategoryLayout>
      <section className="partnersViewCategories">
        <PartnersView />
      </section>
    </Main>
  )
}

export default Categories
