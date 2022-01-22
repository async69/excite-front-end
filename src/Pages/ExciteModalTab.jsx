import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import ModalHIstoryCard from "../Components/ModalHIstoryCard";
import PhotoGallery from "../Components/PhotoGallery";
import ReviewComponent from "../Components/ReviewComponent";
import { selectHistories } from "../store/States/History"
import { selectReviews } from "../store/States/Review"
import { resolveHistories, resolveReviews } from "../helpers/resolvers"
import { connect } from "react-redux"

const ExciteModalTab = ({ description, exciteID, histories, reviews }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
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
            Overview
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
            History
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={
              activeTab === "3" ? "activepageTabBlue" : "notactivePageTabBlue"
            }
            onClick={() => {
              toggle("3");
            }}
          >
            Reviews
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={
              activeTab === "4" ? "activepageTabBlue" : "notactivePageTabBlue"
            }
            onClick={() => {
              toggle("4");
            }}
          >
            Pictures
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {description}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <ModalHIstoryCard histories={resolveHistories(exciteID, histories)} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <ReviewComponent reviews={resolveReviews(exciteID, reviews)} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col className="p-5" sm="12">
              <PhotoGallery />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  histories: selectHistories(state),
  reviews: selectReviews(state)
})

export default connect(mapStateToProps)(ExciteModalTab);
