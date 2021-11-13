import '../styles/components/TitleSubTitle.css'
const TitleSubTitle = (props) => {
  const { title, subtitle } = props
  return (
    <>
      <p className="titleSubTitle1">{title}</p>
      <p className="titleSubTitle2">{subtitle}</p>
    </>
  )
}

export default TitleSubTitle
