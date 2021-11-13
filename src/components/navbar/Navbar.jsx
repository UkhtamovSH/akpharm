import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Container } from "reactstrap"
import '../../styles/components/Navbar.css'
import Logo from '../../assets/svg/logo.svg'
import LogoBlue from '../../assets/svg/logoblue.svg'
import MenuLineDark from '../../assets/svg/menu-line-dark.svg'
import MenuLineWhite from '../../assets/svg/menu-line-white.svg'
import CloseLineDark from '../../assets/svg/close-line-dark.svg'
import CloseLineWhite from '../../assets/svg/close-line-white.svg'
import { NavbarItems } from "./NavbarItems"

const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false)
  const [button, setButton] = useState(false)
  const [menu, setMenu] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  }

  const showButton = () => {
    if (window.innerWidth > 992) {
      setButton(true)
    } else {
      setButton(false)
    }
  }

  const toggleMenu = () => {
    if (menu) {
      document.body.style.overflow = "hidden";
      setMenu(!menu)
    } else {
      document.body.style.overflow = "visible";
      setMenu(!menu)
    }
  }

  useEffect(() => {
    showButton()
    toggleMenu()
    changeBackground()
  }, [])

  window.addEventListener('scroll', changeBackground)
  window.addEventListener('resize', showButton)

  return (
    <section className={changeColor || !menu ? 'navbar active position-fixed' : 'navbar position-fixed'}>
      <Container className="navbar__container">
        <Link to="/">
          <img src={changeColor || !menu ? LogoBlue : Logo} alt="" />
        </Link>
        <div className="navbar__infoLinks">
          {
            !button
              ?
              <>
                {menu ?
                  <>
                    {changeColor || !menu ?
                      <img src={MenuLineDark} onClick={toggleMenu} alt="" />
                      :
                      <img src={MenuLineWhite} onClick={toggleMenu} alt="" />
                    }
                  </>
                  :
                  <>
                    {changeColor || !menu ?
                      <img src={CloseLineDark} onClick={toggleMenu} alt="" />
                      :
                      <img src={CloseLineWhite} onClick={toggleMenu} alt="" />
                    }
                  </>
                }
              </>
              :
              <>
                <div className={
                  changeColor ? 'navbar__linksChange' : 'navbar__links'}>
                  {NavbarItems.map((items, index) => (
                    <NavLink to={items.to} className="mx-2" activeClassName="navbar__linksActive" key={index}>
                      {items.name}
                    </NavLink>
                  ))}
                </div>
                <span>O'zbek tili</span>
                <button
                  style={{ marginLeft: '20px' }}
                  className={changeColor ? 'appBtnNavbarChange' : 'appBtn'}>
                  Ariza qoldirish
                </button>
              </>
          }
        </div>
      </Container>
      <div className={!menu ? 'navbarTwo activeTwo sticky-top' : 'navbarTwo sticky-top'}>
        {!menu
          ?
          <section className="menuSection">
            <Container>
              <div className='navbar__linksChange'>
                {NavbarItems.map((items, index) => (
                  <NavLink
                    to={items.to}
                    activeClassName="navbar__linksActive"
                    key={index}
                    onClick={toggleMenu}
                  >
                    {items.name}
                  </NavLink>
                ))}
              </div>
              <span>O'zbek tili</span>
              <button
                className='appBtn'>
                Ariza qoldirish
              </button>
            </Container>
          </section>
          :
          ''
        }
      </div>
    </section>
  )
}

export default Navbar
