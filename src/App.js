import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import PlanLayout from "./pages/layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirmation from "./pages/CodeConfirmation";

// <PlanLayout>

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/invite' component={PhoneConfirmation} />
        <Route exact path='/code_confirm' component={CodeConfirmation} />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
