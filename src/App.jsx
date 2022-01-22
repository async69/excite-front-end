import React from "react";
import "./Styles/projectTitle.scss";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";
import Autoload from "./Components/Autoload/"

const HomePage = React.lazy(() => import("./Pages/HomePage"));
const NewExcite = React.lazy(() => import("./Pages/NewExcite"));
const BookExcite = React.lazy(() => import("./Pages/BookExcite"));
const LoginPage = React.lazy(() => import("./Pages/AuthPages/"));
const ExcitePannel = React.lazy(() => import("./Pages/ExcitePannel"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Autoload />
      <Switch>
        {/* <LayoutRoute
              exactgit
              path={routes.signIn}
              layout={EmptyLayout}
              component={SignInPage}
            /> */}
        <React.Fragment>
          <MainLayout>
            <React.Suspense
              fallback={
                <div className="spinnerContainer">
                  <Spinner color="exciteMain" />
                </div>
              }
            >
              <Route exact path={routes.homePage} component={HomePage} />
              <Route exact path={routes.newExcite} component={NewExcite} />
              <Route exact path={routes.bookExcite} component={BookExcite} />
              <Route exact path={routes.login} component={LoginPage} />
              <Route exact path={routes.excitePannel} component={ExcitePannel} />
            </React.Suspense>
          </MainLayout>
        </React.Fragment>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
