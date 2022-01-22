import React from "react";
import MetricWidget from "../Components/Widgets/MetricWidget";

import { Row, Col } from "reactstrap";


const BookingRequests = [
  {
    fullName: "name of thisss 1",
    userID: "323232323",
    priceOffering: "40,000",
    eventDescription:
      "this is an event description an event description an event description ",
    eventLocaton: "a locatoin1 ",
  },
  {
    fullName: "name of thisss2 ",
    userID: "7878787878 ",
    priceOffering: "40,000",
    eventDescription:
      "this is an event description an event description an event description ",
    eventLocaton: "a locatoin  2",
  },
  {
    fullName: "name of thisss 1",
    userID: "323232323",
    priceOffering: "40,000",
    eventDescription:
      "this is an event description an event description an event description ",
    eventLocaton: "a locatoin1 ",
  },
  {
    fullName: "name of thisss2 ",
    userID: "7878787878 ",
    priceOffering: "40,000",
    eventDescription:
      "this is an event description an event description an event description ",
    eventLocaton: "a locatoin  2",
  },
];

const ExcitePannel = () => {
  return (
    <div>
      <Row>
        {BookingRequests.map((requests, index) => {
          return (
            <div className="m-4 p-4 settingsCard">
              <Col key={index} md={12} sm={6} xs={12}>
                <MetricWidget
                  fullName={requests.fullName}
                  userID={requests.userID}
                  priceOffering={requests.priceOffering}
                  color="exciteMain"
                  eventLocaton={requests.eventLocaton}
                  eventDescription={requests.eventDescription}
                />
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default ExcitePannel;
