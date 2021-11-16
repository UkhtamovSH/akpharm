import { Card } from "reactstrap"

const CategoryCard = ({ name, image, manufacturer }) => {
  return (
    <>
      <Card className="categoryCard">
        <div className="categoryCardImgDiv">
          <img src={image} className="categoryCardImg" alt={name} />
        </div>
        <div className="categoryCardInfo">
          <p>{manufacturer?.name}</p>
          <p className="mb-0">{name}</p>
        </div>
      </Card>
    </>
  )
}

export default CategoryCard
