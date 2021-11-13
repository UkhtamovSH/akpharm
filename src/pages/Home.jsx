import AboutUS from "../components/AboutUS"
import OurAdvantages from "../components/OurAdvantages"
import WhyWe from "../components/WhyWe"
import Main from "../layout/Main"
import ProductCatalog from "../components/ProductCatalog"
import HowContact from "../components/HowContact"
import PartnersView from "../components/PartnersView"
import Partners from "../components/Partners"
import Header from "../components/Header"

const Home = () => {
  const title = "Ishonchli tibbiyot mahsulotlari distribyutori!"
  return (
    <Main>
      <Header title={title} />
      <AboutUS />
      <WhyWe />
      <OurAdvantages />
      <ProductCatalog />
      <HowContact />
      <PartnersView />
      <Partners />
    </Main>
  )
}

export default Home
