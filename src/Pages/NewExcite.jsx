import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./NewExcite.scss";
import { useDropzone } from "react-dropzone";

const NewExcite = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img alt="" src={file.preview} className="thumbImg"/>
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <Form className="page  pr-5 pl-5 mt-3 formGroup">
      <h1 className="mb-3 "> Regester to be an excite </h1>
      <h3 className="m-3"> Personal Details </h3>

      <Row form>
        <Col md={12} className="dropZone mb-4">
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag and drop pictures here , or click to select files</p>
            </div>
            <aside className="thumbsContainer">{thumbs}</aside>
          </section>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="fName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name "
            />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="mNmae">Middle Name</Label>
            <Input
              type="text"
              name="middleNmae"
              id="middleName"
              placeholder="Middle Nmae"
            />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="lName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email1"
              id="email1"
              placeholder="Mail Email"
            />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
            />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="emial2">Password </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password "
            />
          </FormGroup>
        </Col>
      </Row>
      <h3 className="m-3"> Address </h3>

      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              type="text"
              name="country"
              id="country"
              placeholder="Country "
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="region">Region</Label>
            <Input
              type="text"
              name="region"
              id="region"
              placeholder="Region "
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">City</Label>
            <Input
              type="text"
              name="state"
              id="exampleState"
              placeholder="City "
            />
          </FormGroup>
        </Col>
      </Row>
      <h3 className="m-3"> Profession Details </h3>

      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleAddress2"> Describe yorself in detail </Label>
            <Input type="textarea" name="text" id="selfDescription" />
          </FormGroup>
        </Col>

        <Col md={3}>
          <FormGroup>
            <Label for="exampleSelect">Occupation</Label>
            <Input type="select" name="occupation" id="occupation">
              <option>Actor</option>
              <option>Musician</option>
              <option>Comedian</option>
              <option>Model</option>
              <option>Author</option>
              <option>Athlete</option>
              <option>TV Personality</option>
              <option>Business Person</option>
              <option>DJ</option>
              <option>Supermodel</option>
              <option>Scientist</option>
              <option>Poet</option>
              <option>Inventor</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={3}>
          <FormGroup>
            <Label for="phoneNumber">Min Price for an event </Label>
            <Input
              type="number"
              name="minPrice"
              id="minPrice"
              placeholder="Min price for an event "
            />
          </FormGroup>
        </Col>
        <FormGroup check className="mt-4 ml-3">
          <Input type="checkbox" name="openToWork" id="openToWork" />
          <Label for="openToWork" check>
            Open To Work
          </Label>
        </FormGroup>
      </Row>
      <Button className="mt-4" size="lg" color="exciteMain" block>
        Sign Up
      </Button>
    </Form>
  );
};

export default NewExcite;
