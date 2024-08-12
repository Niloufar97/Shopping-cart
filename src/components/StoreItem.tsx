import { Button, Card } from "react-bootstrap";

type StoreItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  category: string;
};

export function StoreItem({ name, price, imgUrl }: StoreItemType) {
  const quantity: number = 0;
  return (
    <Card className="h-100 p-2" >
      <Card.Img variant="top" src={imgUrl} style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className="ms-2 text-muted">{price}kr</span>
        </Card.Title>
        <div className="mt-auto mb-3">
          {quantity === 0 ? (
            <Button className="bg-white text-dark border border-dark w-100">+ Add to cart</Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}
