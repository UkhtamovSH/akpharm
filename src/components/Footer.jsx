import '../styles/components/Footer.css'
import { Container } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import { NavbarItems } from './navbar/NavbarItems'
import LogoBlue from '../assets/svg/logoblue.svg'
import Phone2 from '../assets/svg/phone2.svg'
import Address2 from '../assets/svg/address2.svg'
import Email from '../assets/svg/email.svg'

const Footer = () => {
  return (
    <>
      <section className="footerSection">
        <Container>
          <div className="footerSection__flex">
            <div className="footerSection__sub">
              <Link to="/">
                <img src={LogoBlue} alt="" />
              </Link>
              <br /> <br />
              <a href="tel:+998712086784" className="footerNumber text-decoration-none">
                <span>+998 71</span>
                <span style={{ marginLeft: '7px' }}>208 67 84</span>
              </a>
            </div>
            <div className="footerSection__sub">
              <p className="footerSection__linksTitle">
                Kompaniya haqida
              </p>
              <div className="footerSection__links">
                {NavbarItems.map((items, index) => (
                  <NavLink to={items.to}
                    className="text-decoration-none my-4" activeClassName="navbar__linksActive"
                    key={index}>
                    {items.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="footerSection__sub">
              <p className="footerSection__linksTitle">
                Biz bilan bogʻlaning
              </p>
              <div className="">
                <a href="tel:+998712086784" className="text-decoration-none text-dark" style={{ color: '#1F2022' }}>
                  <div className="footerSection__linksDiv">
                    <img src={Phone2} alt="" />
                  </div>
                  <span>+998 71 208 67 84</span>
                </a>
              </div>
              <div className="my-4">
                <div className="footerSection__linksDiv">
                  <img src={Email} width="24" height="24" alt="" />
                </div>
                <span>
                  info@akpharm.uz
                </span>
              </div>
              <div className="">
                <div className="footerSection__linksDiv">
                  <img src={Address2} alt="" />
                </div>
                <span>
                  Olmazor tumani, Kichik halqa yoʻli koʻchasi, 5-A
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Footer
