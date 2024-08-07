import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/style.css"; // Asegúrate de que este archivo CSS esté importado
import MainPage from "./components/MainPage";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

