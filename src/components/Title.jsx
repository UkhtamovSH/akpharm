import '../styles/components/Title.css'
const TitleSubTitle = (props) => {
  const { title } = props
  return (
    <>
      <p className="titleApp">{title}</p>
    </>
  )
}

export default TitleSubTitle
