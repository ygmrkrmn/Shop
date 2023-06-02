import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleBas" sm={2}>
            Adres Başlığı
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="bas"
              id="exampleBas"
              placeholder="Ev,İş..."
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleName" sm={2}>
            Ad Soyad
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="exampleName"
              placeholder="Adınızı ve Soyadınızı Giriniz"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleNumber" sm={2}>
            Telefon Numarası
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="select"
              id="exampleNumber"
              placeholder="+90"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>
            Adres
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="selectMulti"
              id="exampleSelectMulti"
              placeholder="Mahalle,cadde,sokak ve diğer bilgilerinizi giriniz"
              multiple
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>
            Ülke
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect">
              <option>Türkiye</option>
              <option>Almanya</option>
              <option>Belçika</option>
              <option>Fransa</option>
              <option>Kore</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleName" sm={2}>
            T.C Kimlik No
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="name"
              id="exampleName"
              placeholder="T.C."
            />
          </Col>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Bireysel
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Kurumsal
          </Label>
        </FormGroup>
        <br />
        <br />
        <h3>Kart Bilgileri</h3>
        <FormGroup row>
          <Col sm={5}>
            <Input
              type="number"
              name="name"
              id="exampleName"
              placeholder="Kredi Kartı Numarası"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={5}>
            <Input
              type="number"
              name="name"
              id="exampleName"
              placeholder="CVV2"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={5}>
            <Label for="exampleDate">Son Kullanma Tarihi</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Tamamla</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
