import '../styles/components/TitleSubTitleTwo.css'
const TitleSubTitleTwo = (props) => {
  const { title, subtitle } = props
  return (
    <>
      <p className="titleSubTitleTwo1">{title}</p>
      <p className="titleSubTitleTwo2">{subtitle}</p>
    </>
  )
}

export default TitleSubTitleTwo
