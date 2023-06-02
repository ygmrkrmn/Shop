import { useState, React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../Context/Data";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Products from "./Products";
import Basket from "./Basket";
import Header from "./Header";
import Navi from "./Navi";
import Alt from "./Alt";
import Odeme from "./Odeme";
import Hakkımızda from "./Hakkımızda";
import Sözleşme from "./Sözleşme";
import Kargo from "./Kargo";

function Router() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("User")) !== undefined
      ? JSON.parse(localStorage.getItem("User"))
      : ""
  );
  const [category, setCategory] = useState("pc");

  const [productsSearch, setProductsSearch] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Navi />
        <GlobalProvider>
          <Header
            user={user}
            setCategory={setCategory}
            category={category}
            setProductsSearch={setProductsSearch}
          />
          <Routes>
            <Route index element={<Home />} />

            <Route
              path="/products/:id"
              element={
                <Products
                  category={category}
                  user={user}
                  productsSearch={productsSearch}
                />
              }
            />
            <Route
              path="basket"
              element={<Basket user={user} setUser={setUser} />}
            />
            <Route
              path="register"
              element={<Login page={"register"} setUser={setUser} />}
            />
            <Route
              path="login"
              element={<Login page={"login"} setUser={setUser} />}
            />
            <Route path="profile" element={<Profile user={user} />} />
            <Route path="ödemee" element={<Odeme user={user} />} />
            <Route path="hakkimizda" element={<Hakkımızda user={user} />} />
            <Route path="sözleşme" element={<Sözleşme user={user} />} />
            <Route path="kargo" element={<Kargo user={user} />} />
          </Routes>
        </GlobalProvider>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Alt />
      </BrowserRouter>
    </div>
  );
}

export default Router;
