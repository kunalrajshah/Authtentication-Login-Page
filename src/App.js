import DupApp from "./DupApp";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./Components/Layout/Wrapper";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import SignUpPage from "./Pages/SignUpPage";
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<h1 className="text-5xl font-bold text-center">Welcome Page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
