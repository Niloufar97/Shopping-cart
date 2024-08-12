import { Card } from "react-bootstrap"

type StoreItemType = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    category: string
}
 
export function StoreItem({name, price, imgUrl} : StoreItemType) {
  return (
    <Card>
        <Card.Img variant="top" src={imgUrl} style={{objectFit: "cover"}} />
        <Card.Body className="d-flex justify-content-between">
            <Card.Title>{name}</Card.Title>
            <div>{price}.kr</div>
        </Card.Body>
    </Card>
  )
}


