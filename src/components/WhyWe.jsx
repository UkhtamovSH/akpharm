import { Col, Container, Row } from "reactstrap";
import TitleSubTitle from './TitleSubTitle'
import TitleSubTitleTwo from './TitleSubTitleTwo'
import '../styles/components/WhyWe.css'
import WhyWeImg1 from '../assets/img/whyweimg1.png'
import WhyWeImg2 from '../assets/img/whyweimg2.png'
import CheckSvg from '../assets/svg/check.svg'

const WhyWe = () => {
  const title = "Nega biz bilan hamkorlik qilishingiz kerak?";
  const subtitle = "Bizdagi hamyonbop narxlar, sifatli va kamnamo mahsulotlar, samarali va doʻstona hamkorlik — bizdan xarid qilishingiz va biz bilan ishlashingiz uchun asosli sabab boʻla oladi.";

  const titleCheck = "Xususiy klinika";
  const subtitleCheck = "Yurtimizning eng tanilgan va xalqimiz ishonchiga ega klinika";


  const titleCheck2 = "Xususiy dorixonalar tarmogʻi";
  const subtitleCheck2 = "Butun Oʻzbekiston boʻylab ochilayotgan dorixonalar tarmogʻi";



  return (
    <>
      <section className="whyWeSection">
        <Container>
          <Row className="align-items-center h-100">
            <Col sm={12} md={12} lg={6} xl={6} className="whyWeSection__Col1">
              <TitleSubTitle
                title={title}
                subtitle={subtitle}
              />
              <Row>
                <Col md={6}>
                  <img src={CheckSvg} className="whyWeSection__Col1Img1 mb-4" alt="" />
                  <TitleSubTitleTwo
                    title={titleCheck}
                    subtitle={subtitleCheck}
                  />
                </Col>
                <Col md={6}>
                  <img src={CheckSvg} className="whyWeSection__Col1Img1 mb-4" alt="" />
                  <TitleSubTitleTwo
                    title={titleCheck2}
                    subtitle={subtitleCheck2}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} className="whyWeSection__Col2">
              <img
                src={WhyWeImg1}
                className="whyWeSection__Col2Img1" alt="" />
              <img
                src={WhyWeImg2} className="whyWeSection__Col2Img2" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WhyWe
