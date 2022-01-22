import React, { useState } from "react";

import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Typography from "../Typography";

const MetricWidget = ({
  fullName,
  userID,
  priceOffering,
  eventDescription,
  eventLocaton,
  color,
  ...props
}) => {
  const {  className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Card onClick={toggle}>
        <CardBody>
          <CardTitle
            style={{
              color: "#ff9800",
            }}
            tag="h2"
          >
            {fullName}{" "}
          </CardTitle>
          <Row>
            <Col>
              <Typography className="mb-0 text-muted ">
                ID - {userID}
              </Typography>
            </Col>
            <Col />

            <Col>
              <CardTitle
                style={{
                  color: "#ff9800",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                {priceOffering}
              </CardTitle>
            </Col>
          </Row>
          <CardText>{eventDescription}</CardText>

          <CardText>
            <h5 className="text-muted"> Event Locatoin : {eventLocaton} </h5>
          </CardText>
        </CardBody>
      </Card>{" "}
      <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>
            <Typography
              style={{
                fontSize: "30px",
              }}
              className="mb-0  "
            >
              {" "}
              {fullName}{" "}
            </Typography>

            <Typography className="mb-0 text-muted ">ID - {userID}</Typography>
          </ModalHeader>
          <ModalBody>
            <Typography
              style={{
                fontSize: "15px",
              }}
              className="mb-0  "
            >
              {" "}
              Price Offering : {fullName}{" "}
            </Typography>

            <Typography
              style={{
                fontSize: "15px",
              }}
              className="mb-0  "
            >
              {" "}
              Event Location : {eventLocaton}{" "}
            </Typography>

            {eventDescription}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" outline onClick={toggle}>
              Reject
            </Button>
            <Button color="exciteMain" outline onClick={toggle}>
              Accept
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default MetricWidget;
