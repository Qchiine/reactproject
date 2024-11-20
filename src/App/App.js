import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Reservation from"../Pages/Reservation";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms/" element={<Room />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
        <Route exact path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
