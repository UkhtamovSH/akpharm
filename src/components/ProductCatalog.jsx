import { useEffect, useState } from "react";
import { getNotAuthInstance } from "../helpers/httpClient";
import '../styles/components/ProductCatalog.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";
import { Link } from "react-router-dom";

const ProductCatalog = () => {
  const [dataProduct, setDataProduct] = useState([])
  // const [loading, setLoading] = useState(false)

  const getProductData = () => {
    // setLoading(true)
    getNotAuthInstance()
      .get(`/api/v1/category-list/?lan=uz`)
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
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "360px",
    slidesToShow: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 1008,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: "unslick"
    //   }

    // ]
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
                  <p>{item.name}</p>
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
