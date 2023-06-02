import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function Profile({ user }) {
  return (
    <div className="vh-100" style={{ backgroundColor: "white" }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      src="https://cdn-icons-png.flaticon.com/512/3917/3917711.png"
                      style={{ width: "180px", borderRadius: "10px" }}
                      alt="Bir Resim Ekleyiniz"
                      fluid
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <center>
                      <MDBCardTitle>E-Posta 📧 :{user.email}</MDBCardTitle>
                      <MDBCardText> Şifre 🔑 :•••••</MDBCardText>
                    </center>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
