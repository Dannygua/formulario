import MeetClientPrincipalForm from "./pages/MeetClientPrincipalForm";
import { GeneralProvider } from "./context/GeneralContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CIForm from "./pages/CIForm";
import "./css/GlobalStyles.css";

function App() {
  return (
    <div className="globalApp">
      <BrowserRouter>
        <GeneralProvider>
          <Routes>
            <Route path="/" element={<CIForm />} />
            <Route
              path="FormMeetClient"
              element={<MeetClientPrincipalForm />}
            />
          </Routes>
        </GeneralProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
