import { useEffect, useState } from "react"
import { getNotAuthInstance } from "../helpers/httpClient"
import CategoryLink from "../components/category/CategoryLink"
import { NavLink } from "react-router-dom"
import '../styles/components/CategoryLayout.css'
import { Container } from "reactstrap"
import { getLanguage } from "../helpers/language"

const CategoryLayout = (props) => {
  const [category, setCategory] = useState([])

  const lan = getLanguage();

  const getCategory = () => {
    getNotAuthInstance()
      .get(`/api/v1/category-list/?lan=${lan}`)
      .then((res) => {
        setCategory(res.data)
      }).catch((err) => { });
  }

  useEffect(() => {
    getCategory();
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className="categoryLayout">
        <Container>
          <div className="categoryLayout_flex">
            <div className="categoryLayout__sub1">
              <NavLink
                to={"/categories/"}
                exact
                className="notActiveLink"
                activeClassName="activeNavLink"
              >
                <CategoryLink categoryAtr={'Barchasi'} />
              </NavLink>
              {category.map((item, index) => (
                <NavLink
                  to={`/categories/${item.slug}`}
                  exact
                  className="notActiveLink"
                  activeClassName="activeNavLink"
                  key={index}
                >
                  <CategoryLink categoryAtr={item.name} />
                </NavLink>
              ))}
            </div>
            <div className="categoryLayout__sub2">
              {props.children}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default CategoryLayout
