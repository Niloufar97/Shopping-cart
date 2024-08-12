import { StoreItem } from "../components/StoreItem"
import {Products} from "../data/Products"
import { Row, Col } from "react-bootstrap"
export function Store() {
  return (
    <>
      <Row sm={1} md={2} lg={3} className="g-5">
        {Products.map(item => (
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
        )) 

        }
      </Row>
    </>
  )
}


