import { Col, Container, Row } from "reactstrap"
import '../styles/components/HowContact.css'
import TitleSubTitle from './TitleSubTitle'
import TitleSubTitleTwo from './TitleSubTitleTwo'
import HowContactSVG from '../assets/svg/howcontactarrow.svg'
import ContentRight1 from '../assets/svg/contentright1.svg'
import ContentRight2 from '../assets/svg/contentright2.svg'
import ContentRight3 from '../assets/svg/contentright3.svg'

const HowContact = () => {

  const title = "Qanday bogʻlanish mumkin?";
  const subtitle = "3 xil koʻrinishda biz bilan bogʻlanishingiz va hamkorlikni yoʻlga qoʻyishingiz mumkin";

  const titleStep1 = "Elektron manzilimizga yoki saytimiz orqali ariza qoldiring";
  const subtitleStep1 = "Oʻz taklif va murojaatlaringizni quyidagi elektron manzilga yozib qoldiring: info@akpharm.uz. Murojaatingizni koʻrib chiqib, aloqaga chiqamiz.";

  const titleStep2 = "Ijtimoiy tarmoqlar orqali bogʻlaning";
  const subtitleStep2 = "Facebook va Instagram ijtimoiy tarmoqlarida oʻz murojaatingizni yoʻllang. Sizni qiziqtirgan barcha savollarga javob beramiz";

  const titleStep3 = "Menedjerlarimiz bilan bogʻlaning";
  const subtitleStep3 = "Saytimizda koʻrsatilgan telefon raqamga telefon qilib bogʻlaning va menedjerimizdan toʻliq ma’lumot oling.";

  const forCol = (
    <Row className="howContactSectionCol2Row">
      <Col md={12} lg={3} xl={3} className="howContactSectionColSUB">
        <div className="forSvg">
          <img src={HowContactSVG} className="howContactSVG" alt="" />
        </div>
      </Col>
      <Col md={12} lg={9} xl={9} className="howContactAnother1">
        <img src={ContentRight1} className="contentRight mb-4" alt="" />
        <div className="howContactAnother1Sub" />
        <TitleSubTitleTwo
          title={titleStep1}
          subtitle={subtitleStep1}
        />
      </Col>
    </Row>
  )



  return (
    <>
      <section className="howContactSection">
        <Container>
          <Row>
            <Col md={12} lg={8} xl={8} className="howContactSectionCol1">
              <TitleSubTitle
                title={title}
                subtitle={subtitle}
              />
              <button className="appBtn2 mt-4">Ariza qoldirish</button>
            </Col>
            <Col md={12} lg={4} xl={4} className="howContactSectionCol2">
              {forCol}
            </Col>
            <Col
              xs={{ offset: 0, size: 12 }}
              sm={{ offset: 0, size: 12 }}
              md={{ offset: 0, size: 12 }}
              lg={{ offset: 4, size: 4 }}
              xl={{ offset: 4, size: 4 }}
              className="howContactSectionCol22">
              {forCol}
            </Col>
          </Row>
          <Row className="howContactSectionCol3Row">
            <Col
              xs={{ offset: 0, size: 12 }}
              sm={{ offset: 0, size: 12 }}
              md={{ offset: 0, size: 12 }}
              lg={{ offset: 4, size: 4 }}
              xl={{ offset: 4, size: 4 }}
              className="howContactSectionCol3"
            >
              <Row>
                <Col md={12} lg={3} xl={3} className="howContactSectionColSUB">
                  <div className="forSvg">
                    <img src={HowContactSVG} className="howContactSVG" alt="" />
                  </div>
                </Col>
                <Col md={12} lg={9} xl={9} className="howContactAnother2">
                  <img src={ContentRight2} className="contentRight mb-4" alt="" />
                  <div className="howContactAnother2Sub" />
                  <TitleSubTitleTwo
                    title={titleStep2}
                    subtitle={subtitleStep2}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ offset: 0, size: 12 }}
              sm={{ offset: 0, size: 12 }}
              md={{ offset: 0, size: 12 }}
              lg={{ offset: 0, size: 4 }}
              xl={{ offset: 0, size: 4 }}
              className="howContactSectionCol4"
            >
              <Row>
                <Col md={12} lg={3} xl={3} className="howContactSectionColSUB">
                </Col>
                <Col md={12} lg={9} xl={9} className="howContactAnother3">
                  <img src={ContentRight3} className="contentRight mb-4" alt="" />
                  <div className="howContactAnother3Sub" />
                  <TitleSubTitleTwo
                    title={titleStep3}
                    subtitle={subtitleStep3}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HowContact
