import { Col, Container, Row } from "reactstrap"
import '../styles/components/WeConnect.css'
import TitleSubTitle from "../components/TitleSubTitle"
import Phone from "../assets/svg/phone.svg"
import Location from "../assets/svg/Location.svg"
import Vector from "../assets/svg/Vector.svg"
import { getNotAuthInstance } from "../helpers/httpClient"
import { getLanguage } from "../helpers/language"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"

const WeConnect = () => {
  const [lists, setLists] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const [errors, setErrors] = useState({
    name_error: false,
    number_error: false,
    text_error: false,
  });
  const { name_error, number_error, text_error } = errors;

  const onFocus = (name) => setErrors({ ...errors, [name]: false });

  const lan = getLanguage()

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      full_name: name,
      phone: number,
      text: text,
    };
    if (name.length > 5 && number.length === 12 && text.length > 9) {
      getNotAuthInstance()
        .post(`/api/v1/petition-post/?lan=${lan}`, postData)
        .then((res) => {
          setErrors({
            name_error: false,
            number_error: false,
            text_error: false,
          });
          setLists([...lists, res.postData]);
          setName("");
          setNumber("");
          setText("");
        })
        .catch((error) => { });
    } else if (name.length < 6) {
      setErrors({
        ...errors,
        name_error: true,
      });
    } else if (number.length < 12) {
      setErrors({
        ...errors,
        number_error: true,
      });
    } else if (text.length < 10) {
      setErrors({
        ...errors,
        text_error: true,
      });
    }
  };


  const title = "Ariza qoldiring va biz siz bilan bogʻlanamiz";

  const subtitle = "Hamkorlik boʻyicha takliflaringiz yoki mahsulotlarni ulgurji koʻrinishda sotib olish boʻyicha savollaringiz boʻlsa, ariza qoldiring va biz siz bilan bogʻlanib, barcha savollaringizga javob beramiz."

  return (
    <>
      <section className="weConnectSection">
        <Container>
          <Row>
            <Col md={6} lg={8} xl={8} className="weConnectSectionCol1">
              <img src={Vector} className="weConnectVectorImg" alt="" />
              <TitleSubTitle
                title={title}
                subtitle={subtitle}
              />
              <a href="tel:+998712086784" className="text-decoration-none text-dark" style={{ color: '#1F2022' }}>
                <p className="text1">
                  <div className="text1ImgDiv">
                    <img src={Phone} alt="" />
                  </div>
                  <span className="">+998 71 208 67 84</span>
                </p>
              </a>
              <p className="text1">
                <div className="text1ImgDiv">
                  <img src={Location} alt="" />
                </div>
                <span className="">
                  Olmazor tumani, Kichik halqa yoʻli koʻchasi, 5-A
                </span>
              </p>
            </Col>
            <Col md={6} lg={4} xl={4}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="rightContact">
                  <p className="labelFormText">Ism sharifingiz</p>
                  <input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    onFocus={() => onFocus("name_error")}
                  />
                  {name_error ? (
                    <p className="inputError">
                      Ism kamida 5ta belgidan iborat bo'lishi kerak
                    </p>
                  ) : null}

                  <p className="labelFormText">Telefon raqamingiz</p>
                  <div className="inputPhone">
                    <PhoneInput
                      onChange={(e) => setNumber(e)}
                      onFocus={() => onFocus("number_error")}
                      value={number}
                      inputExtraProps={{
                        required: true,
                        autoFocus: true,
                      }}
                      country={"uz"}
                      onlyCountries={["uz"]}
                      masks={{ uz: "(..) ...-..-.." }}
                      placeholder={"+998 () ___--__"}
                      areaCodes={{ uz: ["998"] }}
                      autocomplete="off"
                    />
                  </div>
                  {number_error ? (
                    <p className="inputError">Telefon raqam to'liq kiritilmadi</p>
                  ) : null}

                  <div className="textArea">
                    <p className="labelFormText">Sizni nima qiziqtiryapti</p>
                    <textarea
                      name=""
                      id=""
                      cols="40"
                      rows="7"
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                      onFocus={() => onFocus("text_error")}
                      value={text}
                    ></textarea>
                    {text_error ? (
                      <p className="inputError">
                        Izoh kamida 10ta belgidan iborat bo'lishi kerak
                      </p>
                    ) : null}
                    <button className="appBtn2 w-100 mt-3" type="submit">
                      Yuborish
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WeConnect
