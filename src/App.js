import "./App.css";
import { BrowserRouter } from "react-router-dom";

import PlanLayout from "./pages/layouts/PlanLayout";
import Welcome from "./pages/Welcome";

// <PlanLayout>

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Welcome />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
