import React, { useContext } from "react";
import { GlobalContext } from "../Context/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillBasket2Fill } from "react-icons/bs";
import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
export default function Products({
  category,
  user,

  productsSearch,
}) {
  const {
    basketProducts,
    setBasketProducts,
    basketPiece,
    setBasketPiece,

    products,
  } = useContext(GlobalContext);
  let newProducts = productsSearch.length == 0 ? products : productsSearch;
  newProducts = newProducts.filter((product) => {
    return product.productCategory === category;
  });

  // basket add function
  const addBasket = (product) => {
    setBasketPiece(basketPiece + 1);
    var index = "BOS";
    basketProducts.map((val, idx) => {
      if (val.id === product.id) {
        index = idx;
      }
    });
    index != "BOS"
      ? (basketProducts[index].piece =
          parseInt(basketProducts[index].piece) + 1)
      : setBasketProducts([
          ...basketProducts,
          {
            name: product.productName,
            price: product.productPrice,
            id: product.id,
            piece: 1,
          },
        ]);
  };

  return (
    <div>
      <Row>
        {newProducts.map((product, idx) => (
          <Col xs="2" key={idx}>
            <Card style={{ maxWidth: "16rem", maxHeight: "50rem" }}>
              <img class="test" alt="Sample" src={product.productImg} />
              <CardBody>
                <CardTitle tag="h5">{product.productName}</CardTitle>
                {product.productPrice + " ₺"}
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                ></CardSubtitle>
                <CardText>{product.productInfo}</CardText>
                <BsFillBasket2Fill
                  onClick={() => addBasket(product)}
                  className="ekle"
                />
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
