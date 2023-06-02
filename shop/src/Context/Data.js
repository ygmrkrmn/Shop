import { createContext, useState } from "react";
export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [products, setProducts] = useState([
    {
      productName: "Camilla Triko Elbise",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/camilla-triko-elbise-siyah-e-4c43.jpeg",
      productInfo: "",
      productPrice: 360,
      id: 1,
      productCategory: "elbise",
    },
    {
      productName: "Felicia Mini Elbise ",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/felicia-mini-elbise-yesil-f3ee20.jpeg",
      productInfo: "",
      productPrice: 200,
      id: 2,
      productCategory: "elbise",
    },
    {
      productName: "Lyra Mini Elbise",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/lyra-mini-elbise-turuncu-c71dcb.jpeg",
      productInfo: "",
      productPrice: 260,
      id: 3,
      productCategory: "elbise",
    },
    {
      productName: "Sırt Dekolteli Elbise",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/dream-sirt-dekolteli-elbise-siyah-38-853.jpeg",
      productInfo: "",
      productPrice: 360,
      id: 4,
      productCategory: "elbise",
    },
    {
      productName: "Rose Mini Elbise ",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/rose-mini-elbise-f4d2dc.jpeg",
      productInfo: "",
      productPrice: 170,
      id: 5,
      productCategory: "elbise",
    },
    {
      productName: " Kadife Elbise Siyah",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/cora-kadife-elbise-siyah-c8-16e.jpeg",
      productInfo: "",
      productPrice: 180,
      id: 6,
      productCategory: "elbise",
    },
    {
      productName: "Mora Elbise Bej",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/mora-elbise-bej-35-40b.jpeg",
      productInfo: "",
      productPrice: 170,
      id: 7,
      productCategory: "elbise",
    },
    {
      productName: "Mini Elbise Kahve",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/aura-mini-elbise-kahve-bc4306.jpeg",
      productInfo: "",
      productPrice: 150,
      id: 8,
      productCategory: "elbise",
    },
    {
      productName: "Çiçekli Elbise",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/talia-cicekli-elbise-siyah-7a1b8a.jpeg",
      productInfo: "",
      productPrice: 170,
      id: 9,
      productCategory: "elbise",
    },
    {
      productName: "Phoen Mini Elbise ",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/phoen-mini-elbise-yesil-234f6c.jpeg",
      productInfo: "",
      productPrice: 160,
      id: 10,
      productCategory: "elbise",
    },
    {
      productName: "Straplez Elbise Lime",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/soul-straplez-elbise-lime-62-42b.jpeg",
      productInfo: "",
      productPrice: 120,
      id: 11,
      productCategory: "elbise",
    },
    {
      productName: "Kontrast Dikiş Elbise",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/lemnis-kontrast-dikis-elbise-kahve-dfe3e5.jpeg",
      productInfo: "",
      productPrice: 110,
      id: 12,
      productCategory: "elbise",
    },
    {
      productName: "Camillo Triko Elbise",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/camilla-triko-elbise-siyah--489a-.jpeg",
      productInfo: "",
      productPrice: 360,
      id: 12,
      productCategory: "elbise",
    },
    {
      productName: "Davinci T-shirt",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/davinci-oversize-t-shirt-kahve-a039-4.jpeg",
      productInfo: "",
      productPrice: 200,
      id: 13,
      productCategory: "tişört",
    },
    {
      productName: "Owen T-Shirt Haki",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/owen-oversize-t-shirt-haki-2721a7.jpeg",
      productInfo: "",
      productPrice: 200,
      id: 14,
      productCategory: "tişört",
    },
    {
      productName: "Back Oversize",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/enemy-back-printed-oversize-t-shirt-si-abac1d.jpg",
      productInfo: "",
      productPrice: 250,
      id: 15,
      productCategory: "tişört",
    },
    {
      productName: "T-Shirt Batik",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/continu-back-printed-oversize-t-shirt--a-6089.jpg",
      productInfo: "",
      productPrice: 250,
      id: 16,
      productCategory: "tişört",
    },
    {
      productName: "Oversize T-Shirt",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/continu-back-printed-oversize-t-shirt--7-43d9.jpg",
      productInfo: "",
      productPrice: 200,
      id: 17,
      productCategory: "tişört",
    },
    {
      productName: "Yeşil Oversize",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/romantic-back-printed-oversize-t-shirt-be-038.jpg",
      productInfo: "",
      productPrice: 250,
      id: 18,
      productCategory: "tişört",
    },
    {
      productName: "Long T-Shirt",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/leaf-oversize-long-t-shirt-beyaz-7d16de.jpeg",
      productInfo: "",
      productPrice: 140,
      id: 19,
      productCategory: "tişört",
    },
    {
      productName: "Kelly Çizgili Basic",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/kelly-cizgili-basic-t-shirt-yesil-e01d9b.jpeg",
      productInfo: "",
      productPrice: 130,
      id: 20,
      productCategory: "tişört",
    },
    {
      productName: "Nike T-Shirt ",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/aias-oversize-t-shirt-beyaz-9006e1.jpeg",
      productInfo: "",
      productPrice: 140,
      id: 21,
      productCategory: "tişört",
    },
    {
      productName: "Kenny Croptop",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/kenny-croptop-beyaz-e-4278.jpeg",
      productInfo: "",
      productPrice: 160,
      id: 22,
      productCategory: "croptop",
    },
    {
      productName: "Valeria Croptop ",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/valeria-croptop-beyaz-6a4106.jpeg",
      productInfo: "",
      productPrice: 180,
      id: 23,
      productCategory: "croptop",
    },
    {
      productName: "Jose Croptop",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/jose-croptop-beyaz-3c3-25.jpeg ",
      productInfo: "",
      productPrice: 100,
      id: 24,
      productCategory: "croptop",
    },
    {
      productName: "Frida Korse",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/frida-korse-top-pembe-6-f4c0.jpg",
      productInfo: "",
      productPrice: 150,
      id: 25,
      productCategory: "croptop",
    },
    {
      productName: "Croptop Zebra",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/mila-croptop-zebra-13e1-4.jpg",
      productInfo: "",
      productPrice: 110,
      id: 26,
      productCategory: "croptop",
    },
    {
      productName: "Gina Croptop ",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/gina-croptop-siyah-a-c99b.jpeg",
      productInfo: "",
      productPrice: 180,
      id: 27,
      productCategory: "croptop",
    },
    {
      productName: "Mell Croptop",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/mell-croptop-yesil--8690-.jpeg",
      productInfo: "",
      productPrice: 80,
      id: 28,
      productCategory: "croptop",
    },
    {
      productName: "Bağcıklı Croptop ",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/buyuk/arleen-bagcikli-croptop-mor-45cf-a.jpeg",
      productInfo: "",
      productPrice: 90,
      id: 29,
      productCategory: "croptop",
    },
    {
      productName: "Pole Top ",
      productImg:
        "https://static.ticimax.cloud/36382/uploads/urunresimleri/pole-top-yesil-13-788.jpeg",
      productInfo: "",
      productPrice: 130,
      id: 30,
      productCategory: "croptop",
    },
  ]);
  const [inputValues, setInputValues] = useState({});
  const [basketPiece, setBasketPiece] = useState(0);
  const [basketProducts, setBasketProducts] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        basketPiece: basketPiece,
        basketProducts: basketProducts,
        products: products,
        inputValues,
        setProducts,
        setInputValues,
        setBasketPiece,
        setBasketProducts,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
