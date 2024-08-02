import { Card } from "react-bootstrap"

type StoreItemsType = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    category: string
}
 
export function StoreItems({name, price, imgUrl} : StoreItemsType) {
  return (
    <Card>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body className="d-flex justify-content-between">
            <Card.Title>{name}</Card.Title>
            <div>{price}.kr</div>
        </Card.Body>
    </Card>
  )
}


