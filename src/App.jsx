import MeetClientPrincipalForm from "./pages/MeetClientPrincipalForm";
import { GeneralProvider } from "./context/GeneralContext";

function App() {
  return (
    <GeneralProvider>
      <MeetClientPrincipalForm />
    </GeneralProvider>
  );
}

export default App;
