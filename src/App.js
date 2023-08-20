import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Wrapper from "./Components/Layout/Wrapper";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import AuthContext from "./Components/Store/AuthContext";
function App() {
  const AuthCtxt = useContext(AuthContext);
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-5xl font-bold text-center">Welcome Page</h1>
          }
        />
        {!AuthCtxt.isLoggedIn && (
          <Route path="/login" element={<LoginPage />} />
        )}
        {AuthCtxt.isLoggedIn && <Route path="/profile" element={<Profile />} />}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
