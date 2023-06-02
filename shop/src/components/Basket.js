import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/Data";
import toast from "react-hot-toast";
import { Table, Button } from "reactstrap";
function Basket({ user, setUser }) {
  const { basketProducts, setBasketProducts, basketPiece, setBasketPiece } =
    useContext(GlobalContext);
  const removeBasket = (product) => {
    setBasketPiece(basketPiece - 1);
    basketProducts.map((val) => {
      if (val.id === product.id) {
        if (parseInt(product.piece) > 1) {
          val.piece = parseInt(product.piece) - 1;
        } else {
          const newBasket = basketProducts.filter(
            (val) => val.id !== product.id
          );
          setBasketProducts(newBasket);
        }
        return val;
      }
    });
  };
  const resetBasket = () => {
    setBasketProducts([]);
    setBasketPiece(0);
  };
  const BuyBasket = () => {
    if (user === null) {
      toast.error("Lütfen Giriş Yapın veya BUTİKYAĞMUR sitesine üye olun !");
    } else {
      var newUrun = 0;
      basketProducts.forEach((product) => {
        newUrun =
          newUrun + parseFloat(product.price) * parseFloat(product.piece);
      });
      if (newUrun == 0) {
        toast.error("Lütfen Sepetinize Bir Ürün ekleyiniz!");
        resetBasket();
      } else {
        toast.success("Ödeme Ekranına Geçebilirsiniz");
      }
    }
  };

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Ürün Adı</th>
            <th>Adet</th>
            <th>Toplam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basketProducts.map((product, ind) => {
            return (
              <tr key={product.id}>
                <th scope="row">{ind + 1}</th>
                <td>{product.name}</td>
                <td>{product.piece}</td>
                <td>{parseInt(product.piece) * parseInt(product.price)}</td>
                <td>
                  <Button color="link" onClick={() => removeBasket(product)}>
                    ✖️
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button
        color="primary"
        className="ms-1 mt-3"
        style={{ width: "120px" }}
        onClick={() => resetBasket()}
      >
        Temizle
      </Button>
      <Button
        color="success"
        className="ms-5 mt-3"
        style={{ width: "120px" }}
        onClick={() => BuyBasket("/Odeme")}
      >
        Sepeti Onayla
      </Button>
    </div>
  );
}
export default Basket;
