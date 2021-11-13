import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Container } from "reactstrap"
import { setPartners } from "../redux/actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from '../assets/svg/star.svg'
import Unstar from '../assets/svg/unstar.svg'
import Title from './Title'
import '../styles/components/PartnersView.css'

const PartnersView = () => {

  const partners = useSelector(state => state.partners)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPartners());
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const ratingArray = [1, 2, 3, 4, 5];

  const appTitle = 'Hamkorlarimiz fikrlari';

  return (
    <>
      <section className="partnersViewSection">
        <Container>
          <Title
            title={appTitle}
          />
          <Slider {...settings}>
            {partners.map(({ image, author, comment, workplace, rating }, index) => (
              <div className="partnersViewSection_Card" key={index}>
                <img
                  src={image}
                  alt={author}
                  className="partnersViewSection_Img img-fluid"
                />
                <p className="text1">{comment}</p>
                <div className="textLine" />
                <div className="textFlex">
                  <div className="">
                    <p className="text2">{author}</p>
                    <p className="text3">{workplace}</p>
                  </div>
                  <div className="">
                    {ratingArray.map((arrItem, index) => (
                      <img
                        key={index}
                        src={index < Math.round(rating) ? Star : Unstar}
                        alt=""
                        className="partnersViewSection_Img2"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  )
}

export default PartnersView
