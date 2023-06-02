import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Alt() {
  return (
    <div>
      <table className="iletisim" class="table table-borderless table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Kurumsal</th>
            <th scope="col">Müşteri İlişkileri</th>
            <th scope="col">İletişim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <NavLink to="/">Anasayfa</NavLink>
            </td>
            <td>
              {" "}
              <NavLink to="/register">Üyelik</NavLink>
            </td>
            <td>
              WhatsApp Sipariş Hattı:
              <br />
              <h8>05393424658</h8>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>
              <NavLink to="/hakkimizda">Hakkımızda</NavLink>
            </td>
            <td>
              {" "}
              <NavLink to="/kargo">Kargo ve Teslimat</NavLink>
            </td>
            <td>
              Canlı Destek:
              <br />
              <h8>02123424658</h8>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2">
              <NavLink to="/sözleşme">Mesafeli Satış Sözleşmesi</NavLink>
            </td>
            <td>yagmurkaraman36@gmail.com</td>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Alt;
