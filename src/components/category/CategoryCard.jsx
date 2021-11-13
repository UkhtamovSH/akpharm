import { Card } from "reactstrap"

const CategoryCard = (props) => {
  const { name, img, name2 } = props
  return (
    <>
      <Card className="categoryCard">
        <div className="categoryCardImgDiv">
          <img src={img} className="categoryCardImg" alt={name} />
        </div>
        <div className="categoryCardInfo">
          <p>{name2}</p>
          <p className="mb-0">{name}</p>
        </div>
      </Card>
    </>
  )
}

export default CategoryCard
