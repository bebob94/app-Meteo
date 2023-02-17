import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailCard from "./Components/DetailCard";
import MyContainer from "./Components/MyContainer";
import MyNavBar from "./Components/MyNavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<MyContainer />} />
          <Route path="Detail/:cityName" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
