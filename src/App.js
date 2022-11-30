import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Listusers from "./Listusers";
import User from "./User";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Listusers />} />
        <Route path="users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
