import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PlanLayout from "./pages/layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirmation from "./pages/CodeConfirmation";
import AllowNotification from "./pages/AllowNotification";

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={[
          "/",
          "/invite",
          "/get_username",
          "/code_confirm",
          "/allow_notification",
        ]}
      >
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={PhoneConfirmation} />
            <Route exact path="/code_confirm" component={CodeConfirmation} />
            <Route
              exact
              path="/allow_notification"
              component={AllowNotification}
            />
          </Switch>
        </PlanLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
