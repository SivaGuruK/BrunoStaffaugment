import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import RegistrationCompletion from "./pages/RegistrationCompletion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/getproject" element={<RegistrationPage />} />
          <Route path="/success" element={<RegistrationCompletion />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
