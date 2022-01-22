import React from "react";
import {
  Jumbotron,
  Button,
  Col,
  Row,

} from "reactstrap";
import ExciteCard from "../ExciteCard";
import "./Home.scss";
import InfoSlider from "../../Components/InfoSlider";
import routes from "../../Config/routes";
import { Link } from "react-router-dom";

const HomePage = ({ exciteUsers, musicians, actors }) => {
  return (
    <div>
      <Jumbotron className="banner p-2">
        <div className="ml-3 pl-3">
          <h1 className="display-1" color="exciteMain">
            Excite!
          </h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          {/* <hr className="my-2" /> */}
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="">
            <Col>
              <div className="landingButtons">
                <Link to={{ pathname: routes.newExcite }}>
                  <Button color="exciteMain" outline>
                    Become an Excite{" "}
                  </Button>
                </Link>
                <Button color="exciteMain" outline>
                  Look for an Excite{" "}
                </Button>
              </div>
            </Col>
          </p>
        </div>
      </Jumbotron>

      <div>
        <h3 className="ml-3 pl-3 title_texts"> Featured Excites </h3>
      </div>
      <Row>
        <div className="section">
          <div className="card_list">
            {exciteUsers.map((excite, idx) => (
              <ExciteCard
                fullName={excite.firstName + " " + excite.lastName}
                {...excite}
                key={idx}
              />
            ))}
          </div>
        </div>

      </Row>
      <Row md={12} sm={12}>
        <InfoSlider />
      </Row>
      <div>
        <h3 className="ml-3 pl-3  title_texts"> Musicians </h3>
      </div>
      <Row>
        <div className="section">
          <div className="card_list">
            {musicians.map((excite, idx) => (
              <ExciteCard
                fullName={excite.firstName + " " + excite.lastName}
                {...excite}
                key={idx}
                exciteID={excite._id}
              />
            ))}
          </div>
        </div>
      </Row>

      <div>
        <h3 className="ml-3 pl-3 title_texts"> Actors </h3>
      </div>
      <Row>
        <div className="section">
          <div className="card_list">
            {actors.map((excite, idx) => (
              <ExciteCard
                fullName={excite.firstName + " " + excite.lastName}
                {...excite}
                key={idx}
              />
            ))}
          </div>
        </div>
      </Row>
    </div>
  );
}

export default HomePage