import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "../NewExcite.scss";
import routes from "../../Config/routes";
import { Link } from "react-router-dom";
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiFillGithub,
  AiOutlinePhone,
} from "react-icons/ai";

const LoginPage = ({ loginUser, signUpUser }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repeatedPassword, setRepeatedPassword] = useState("")

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="loginContainer">
      <h1>Excite</h1>

      <Nav className="tabs" tabs>
        <NavItem>
          <NavLink
            className={
              activeTab === "1" ? "activepageTabBlue" : "notactivePageTabBlue"
            }
            onClick={() => {
              toggle("1");
            }}
          >
            Log in
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={
              activeTab === "2" ? "activepageTabBlue" : "notactivePageTabBlue"
            }
            onClick={() => {
              toggle("2");
            }}
          >
            Register
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="mb-4 formGroup " activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="mt-4">
            <Col md="4" sm="12">
              <FormGroup>
                <Label for="userName">User Name </Label>
                <Input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="User Name"
                  onChange={({ currentTarget: { value } }) => setUsername(value)}
                />
              </FormGroup>
            </Col>
            <Col md="4" sm="12">
              <FormGroup>
                <Label for="password">Password </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={({ currentTarget: { value } }) => setPassword(value)}
                />
              </FormGroup>
            </Col>
            <Col md="2" sm="12">
              <Button
                style={{ color: "#ffffff" }}
                className="mt-4"
                block
                color="exciteMain"
                outline
                onClick={() => loginUser(username, password)}
              >
                Log in
              </Button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="mt-4">
            <Col md="3" sm="12">
              <FormGroup>
                <Label for="name">Username </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  onChange={({ currentTarget: { value } }) => setUsername(value)}
                />
              </FormGroup>
              {/* this is jhsnujf ajnfjbn osme thikng ac ommet  */}
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label for="password">Password </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={({ currentTarget: { value } }) => setPassword(value)}
                />
              </FormGroup>
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label for="passwordagain">Re-enter Password </Label>
                <Input
                  type="password"
                  name="passwordagain"
                  id="password"
                  placeholder="Re-Enter Password"
                  onChange={({ currentTarget: { value } }) => setRepeatedPassword(value)}
                />
              </FormGroup>
            </Col>
            <Col md="2" sm="12">
              <Button
                style={{ color: "#ffffff" }}
                className="mt-4"
                block
                color="exciteMain"
                outline
                disabled={!(password === repeatedPassword)}
                onClick={() => signUpUser(username, password)}
              >
                Register
              </Button>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

      <Row className="authBUttons">
        <>
          <Button style={{ color: "#ffffff" }} color="exciteMain" outline>
            <AiOutlinePhone color="exciteMain" />
          </Button>
        </>

        <>
          <Button style={{ color: "#ffffff" }} color="exciteMain" outline>
            <AiOutlineGoogle color="exciteMain" />
          </Button>
        </>

        <>
          <Button style={{ color: "#ffffff" }} color="exciteMain" outline>
            <AiFillFacebook color="exciteMain" />
          </Button>
        </>

        <>
          <Button style={{ color: "#ffffff" }} color="exciteMain" outline>
            <AiFillGithub color="exciteMain" />
          </Button>
        </>
      </Row>
    </div>
  );
};

export default LoginPage;
