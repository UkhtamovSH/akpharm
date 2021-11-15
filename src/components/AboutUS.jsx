import { Col, Container, Row } from "reactstrap";
import TitleSubTitle from './TitleSubTitle'
import '../styles/components/AboutUs.css'
import AboutUs1 from "../assets/img/aboutUs1.png"
import AboutUs2 from "../assets/img/aboutUs2.png"

const AboutUs = () => {
  const title = "Biz haqimizda";
  const subtitle = "Akpharm - bu sheriklar va xodimlar bilan ishonchli, halol munosabatlarga asoslangan kompaniya. Biz o'z biznesimizni kompaniya tashkil etilganidan buyon o'zgarmagan qadriyatlar va urf -odatlar asosida quramiz. Muvaffaqiyatlarimizni biz bilan umumiy biznes bilan shug'ullanadigan odamlar bilan bo'lishish biz uchun muhim. Biz rivojlanishimizni biz va mijozlarimiz oldida turgan muammolarni birgalikda hal qilishda ko'ramiz.";

  return (
    <>
      <section className="aboutUsSection">
        <Container>
          <Row className="align-items-center h-100">
            <Col sm={12} md={12} lg={6} xl={6} className="aboutUsSection__Col1">
              <img src={AboutUs1} className="aboutUsSection__Col1Img1" alt="" />
              <img src={AboutUs2} className="aboutUsSection__Col1Img2" alt="" />
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} className="aboutUsSection__Col2">
              <div className="aboutUsSection__Col2Sub">
                <TitleSubTitle
                  title={title}
                  subtitle={subtitle}
                />
                <div className="aboutUsSection__Col2Flex">
                  <div className="">
                    <p className="number">340</p>
                    <p className="numberText">xodimlar</p>
                  </div>
                  <div className="">
                    <p className="number">180</p>
                    <p className="numberText">ta’minotchilar</p>
                  </div>
                  <div className="">
                    <p className="number">600</p>
                    <p className="numberText">xaridorlar</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutUs
