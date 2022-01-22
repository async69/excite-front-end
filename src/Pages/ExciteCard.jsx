import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import ExciteModalTab from './ExciteModalTab'
import { Link } from "react-router-dom"
import routes from "../Config/routes"

const ExciteCard = ({
  fullName, profession, description, rating,
  exciteID, ...props
}) => {
  const {  className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Card  className="excites_card shadow">
        <CardImg
          top
          width="10%"
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{String(fullName)}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {profession}
          </CardSubtitle>
          <CardText className="card_text">
           {description}
          </CardText>
          <Button block  outline color="secondary" onClick={toggle}>
            Excite Details  
          </Button>
        </CardBody>
      </Card>

      <Modal
        size="xl"
        className="modal"
        isOpen={modal}
        toggle={toggle}
        className={className}
      >
        <ModalHeader className="modalHeder" toggle={toggle}>
          <Row>
            <>
              <img
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                alt="Avatar"
              />
            </>
            <Col>
              <Row>
                <h1>{fullName}</h1>
              </Row>
              <Row>
                <h3>{profession}</h3>
              </Row>
              <Row>Ratings : {rating} / 5 </Row>
            </Col>
          </Row>
        </ModalHeader>
        <ModalBody>
          <ExciteModalTab description={description} exciteID={props._id} />
        </ModalBody>
        <ModalFooter>
          <Button outline color="danger" onClick={toggle}>
            Cancel
          </Button>
        <Link  to={{ pathname: routes.bookExcite }} >
        <Button outline color="exciteMain" onClick={toggle}>
            Book {fullName}
          </Button>
        </Link>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ExciteCard;
