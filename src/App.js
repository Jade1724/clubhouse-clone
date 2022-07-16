import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import PlanLayout from "./pages/layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import PhoneConfirmation from "./pages/PhoneConfirmation";

// <PlanLayout>

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/invite' component={PhoneConfirmation} />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
