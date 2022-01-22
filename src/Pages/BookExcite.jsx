
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {

  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(3),
  
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepper: {
    iconColor: "green", // or logic to change color
  },
}));

function BookExciteform2() {
  return (
    <Form className=" p-2 formGroup">
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="country">Excite Name</Label>
            <Input
              type="text"
              name="exciteName"
              id="exciteName"
              placeholder="ExciteName "
            />
          </FormGroup>
        </Col>
        <Col md={4}>
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

        <Col md={4}>
          <FormGroup>
            <Label for="phoneNumber">Price Offering </Label>
            <Input
              type="number"
              name="minPrice"
              id="minPrice"
              placeholder=" price  offering for an event "
            />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="exampleAddress2"> Describe Event In breif</Label>
            <Input type="textarea" name="text" id="eventDescription" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="eventDate"> Date of The Event </Label>
            <Input type="date" name="eventDate" id="eventDescription" />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="peopleAttending"> No of Peole Attending </Label>
            <Input type="number" name="peopleAttending" id="peopleAttending" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}
function BookExciteform1() {
  return (
    <Form className="p-2  formGroup">
      <Row form>
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
      </Row>
    </Form>
  );
}

function BookExciteform3() {
  return (
    <div>
      <h1> i agree with the terms and conditions of the excite.eth</h1>
    </div>
  );
}

function getSteps() {
  return ["Personal Details ", " Event Details", "Terms  and Conditions "];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BookExciteform1 />;
    case 1:
      return <BookExciteform2 />;
    case 2:
      return <BookExciteform3 />;
    default:
      return "Unknown step";
  }
}

export default function BookExcite() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper
        style={{
          width: "100%",
          color: "#ff9800",
          backgroundColor: "#222222",
        }}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step style={{ color: "#ff9800" }} key={label}>
            <StepLabel style={{ textDecorationColor: "#ff9800" }}>{label}</StepLabel>
            <StepContent>
              <Typography color="exciteMain"  >{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    outline
                    style={{
                      color:"#ffffff"
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    outline
                    variant="outlined"
                    color="exciteMain"
                    onClick={handleNext}
                    className={classes.button}
                    style={{
                      color:"#ffffff"
                    }}
                  
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          style={{
            color: "#ff9800",
            backgroundColor: "#222222",
          }}
          square
          elevation={0}
          className={classes.resetContainer}
        >
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            outline
            color="exciteMain"
            onClick={handleReset}
            className={classes.button}
            style={{
              color:"#ffffff"
            }}
          
          >
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
