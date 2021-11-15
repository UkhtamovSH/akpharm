import { useEffect, useState } from "react";
import { getNotAuthInstance } from "../helpers/httpClient";
import '../styles/components/ProductCatalog.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";
import { Link } from "react-router-dom";
import { getLanguage } from "../helpers/language";

const ProductCatalog = () => {
  const [dataProduct, setDataProduct] = useState([])
  // const [loading, setLoading] = useState(false)

  const lan = getLanguage()

  const getProductData = () => {
    // setLoading(true)
    getNotAuthInstance()
      .get(`/api/v1/category-list/?lan=${lan}`)
      .then(res => {
        setDataProduct(res.data)
        // setLoading(false)
      })
      .catch(error => { })
  }

  useEffect(() => {
    getProductData();
  }, [])

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    autoplay: true,
    centerMode: true,
    centerPadding: "360px",
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerPadding: "300px",
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "250px",
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          centerPadding: "180px"
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
        }
      }
    ]
  };

  const appTitle = "Akpharmdagi mahsulotlar katalogi"

  return (
    <>
      <section className="position-relative productCatalogSection">
        <Title title={appTitle} />
        <Slider {...settings}>
          {dataProduct.map((item, index) => (
            <div className="productCatalogSlider" key={index}>
              <img src={item.image} className="img-fluid productCatalogSliderImg"
                alt="" />
              <div className="d-flex justify-content-center w-100">
                <Link to={`/categories/${item.slug}`} className="productCatalogSliderInfo text-decoration-none">
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        <div className="d-flex justify-content-center w-100 mt-4">
          <button className="appBtn2">Barchasini ko`rish</button>
        </div>
      </section>
    </>
  )
}

export default ProductCatalog
