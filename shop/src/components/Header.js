import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsFillBasket2Fill,
  BsFillPersonPlusFill,
  BsFillPersonFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../Context/Data";

import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import { useNavigate, Link } from "react-router-dom";

function Header({
  user,
  setCategory,
  category,

  setProductsSearch,
}) {
  const Navigate = useNavigate();
  const { products, basketPiece } = useContext(GlobalContext);
  const [dropdownOpen, setDropdownOpen] = useState([false, false]);
  const [searchText, setSearchText] = useState();
  const page = (category) => {
    setCategory(category);
    Navigate(
      `/products/:${
        category == "elbise"
          ? "elbise"
          : category == "tişört"
          ? "tişört"
          : "croptop"
      }`
    );
  };
  useEffect(() => {
    if (searchText != "") {
      let newProducts = products.filter((product) => {
        return (
          product.productName.includes(searchText) ||
          product.productInfo.includes(searchText)
        );
      });
      setProductsSearch(newProducts);
    } else {
      setProductsSearch([]);
    }
  }, [searchText]);

  return (
    <div>
      <header className="p-3 mb-3 border-bottom">
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active onClick={() => Navigate("/")}>
              Ana Sayfa
            </NavLink>
          </NavItem>
          <Dropdown
            nav
            isOpen={dropdownOpen[0]}
            toggle={() => setDropdownOpen([!dropdownOpen[0], dropdownOpen[1]])}
          >
            <DropdownToggle nav caret>
              Ürünler
            </DropdownToggle>
            <DropdownMenu style={{ margin: 0 }}>
              <DropdownItem onClick={() => page("elbise")}>ELBİSE</DropdownItem>
              <DropdownItem onClick={() => page("tişört")}>
                T-SHIRT
              </DropdownItem>
              <DropdownItem onClick={() => page("croptop")}>
                CROPTOP
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <form
            className="d-flex"
            style={{ marginLeft: "auto", marginBottom: "10px" }}
          >
            <input
              name="search"
              placeholder=""
              className="form-control"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                }
              }}
            />
          </form>
          <div>
            <BsFillCreditCardFill
              color="primary"
              outline
              onClick={() => Navigate("ödemee")}
            />
          </div>
          <div className="ms-5">
            <BsFillBasket2Fill
              color="primary"
              outline
              onClick={() => Navigate("basket")}
            />
            {basketPiece}
          </div>

          {!user && (
            <div>
              <BsFillPersonPlusFill
                style={{ width: "6.5rem", marginLeft: "10px" }}
                onClick={() => Navigate("register")}
              />
              <BsFillPersonFill
                style={{ width: "6.5rem", marginLeft: "10px" }}
                onClick={() => Navigate("login")}
              />
            </div>
          )}
          {user && (
            <Dropdown
              nav
              isOpen={dropdownOpen[1]}
              toggle={() =>
                setDropdownOpen([dropdownOpen[0], !dropdownOpen[1]])
              }
            >
              <DropdownToggle nav caret></DropdownToggle>
              <DropdownMenu style={{ margin: 0, minWidth: "300px" }}>
                <DropdownItem
                  style={{ fontSize: "18px", width: "100%" }}
                  onClick={() => Navigate("profile")}
                >
                  Profil
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "15px", color: "red", width: "100%" }}
                  onClick={() => Navigate("login")}
                >
                  Çıkış Yap
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </Nav>
      </header>
    </div>
  );
}
export default Header;
