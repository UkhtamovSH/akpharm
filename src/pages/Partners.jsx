import Header from "../components/Header"
import PartnersManufacturer from "../components/PartnersManufacturer"
import Main from "../layout/Main"

const Partners = (props) => {
  const title = "Hamkorlarimiz"
  return (
    <Main>
      <Header title={title} />
      <PartnersManufacturer />
    </Main>
  )
}

export default Partners
