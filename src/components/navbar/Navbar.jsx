import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import '../../styles/components/Navbar.css'
import Logo from '../../assets/svg/logo.svg'
import LogoBlue from '../../assets/svg/logoblue.svg'
import MenuLineDark from '../../assets/svg/menu-line-dark.svg'
import MenuLineWhite from '../../assets/svg/menu-line-white.svg'
import CloseLineDark from '../../assets/svg/close-line-dark.svg'
import CloseLineWhite from '../../assets/svg/close-line-white.svg'
import Ru from '../../assets/svg/ru.svg'
import Uz from '../../assets/svg/uz.svg'
import En from '../../assets/svg/en.svg'

import { NavbarItems } from "./NavbarItems"
import { useTranslation } from "react-i18next"
import { getLanguage } from "../../helpers/language"

const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false)
  const [button, setButton] = useState(false)
  const [menu, setMenu] = useState(false)
  const [isOpenLen, setIsOpenLen] = useState(false)

  const toggleIsOpenLen = () => setIsOpenLen(!isOpenLen)

  const { t, i18n } = useTranslation();
  const lan = getLanguage();

  const onLanguageHandle = newLang => {
    i18n.changeLanguage(newLang);
    window.localStorage.setItem('language', newLang);
  };

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
          <img src={changeColor || !menu ? LogoBlue : Logo} className="appLogoo" alt="" />
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
                <div className="navbar__flexRightSub4">
                  <Dropdown isOpen={isOpenLen} toggle={toggleIsOpenLen}>
                    <DropdownToggle className={changeColor ? "active" : ""} caret>
                      {lan === "uz" ?
                        <><img src={Uz} style={{ marginRight: '4px' }} alt="" /> {t('navbar.uz')}</>
                        : lan === "ru" ?
                          <><img src={Ru} style={{ marginRight: '4px' }} alt="" /> {t('navbar.ru')}</>
                          :
                          <><img src={En} style={{ marginRight: '4px' }} alt="" /> {t('navbar.en')}</>
                      }
                    </DropdownToggle>
                    <DropdownMenu className="">
                      <DropdownItem onClick={() => onLanguageHandle('uz')}>
                        <img src={Uz} style={{ marginRight: '4px' }} alt="" /> {t('navbar.uz')}
                      </DropdownItem>
                      <DropdownItem onClick={() => onLanguageHandle('ru')}>
                        <img src={Ru} style={{ marginRight: '4px' }} alt="" /> {t('navbar.ru')}
                      </DropdownItem>
                      <DropdownItem onClick={() => onLanguageHandle('en')}>
                        <img src={En} style={{ marginRight: '4px' }} alt="" /> {t('navbar.en')}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
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
          <section className="menuSection my-4">
            <Container>
              <div className="menuSectionFlexLan">
                <div onClick={() => { onLanguageHandle('uz'); toggleMenu() }}>
                  <img src={Uz} style={{ marginRight: '4px' }} alt="" /> {t('navbar.uz')}
                </div>
                <div onClick={() => { onLanguageHandle('ru'); toggleMenu() }}>
                  <img src={Ru} style={{ marginRight: '4px' }} alt="" /> {t('navbar.ru')}
                </div>
                <div onClick={() => { onLanguageHandle('en'); toggleMenu() }}>
                  <img src={En} style={{ marginRight: '4px' }} alt="" /> {t('navbar.en')}
                </div>
              </div>
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
