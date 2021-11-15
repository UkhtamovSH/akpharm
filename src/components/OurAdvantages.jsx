import { Col, Container, Row } from "reactstrap"
import TiteSubTitleTwo from './TitleSubTitleTwo'
import Title from './Title'
import '../styles/components/OurAdvantages.css'
import ourAdvantagesSVG1 from '../assets/svg/ourAdvantagesSVG1.svg'
import ourAdvantagesSVG2 from '../assets/svg/ourAdvantagesSVG2.svg'
import ourAdvantagesSVG3 from '../assets/svg/ourAdvantagesSVG3.svg'
import ourAdvantagesSVG4 from '../assets/svg/ourAdvantagesSVG4.svg'

const OurAdvantages = () => {
  const appTitle = "Bizdagi afzalliklar"
  const dataAdvantages = [
    {
      img: ourAdvantagesSVG1,
      title: "Koʻp yillik tajriba",
      subtitle: " 20 yil biznes sohasida va 3 yil davomida tibbiyot sohasidagi tajriba yutuqlar sizning muvaffaqiyatingiz garovi boʻla oladi."
    },
    {
      img: ourAdvantagesSVG2,
      title: "Keng tanlov",
      subtitle: "Kompaniyamizdagi keng tanlov va mahsulotlar adadi sizning ehtiyojingizni toʻliq qondirishiga aminmiz!"
    },
    {
      img: ourAdvantagesSVG3,
      title: "Sifat",
      subtitle: "Dunyoning koʻzga koʻringan brendlari bilan hamkorlik — mahsulotlar yuqori sifatli va xavfsiz boʻlishini taʼminlaydi."
    },
    {
      img: ourAdvantagesSVG4,
      title: "Hamyonbop narxlar",
      subtitle: "Mahsulotlar bozor narxidan ancha pastligiga amin boʻling"
    },
  ]

  return (
    <>
      <section className="ourAdvantages">
        <div className="ourAdvantagesImg" />
        <Container className="ourAdvantages_container">
          <Title
            title={appTitle}
          />
          <Row>
            {dataAdvantages.map((item, index) => (
              <Col sm={6} md={6} lg={3} xl={3} key={index} className="ourAdvantagesCol text-center">
                <img src={item.img} className="mb-3" alt="" />
                <TiteSubTitleTwo
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default OurAdvantages
