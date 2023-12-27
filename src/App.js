import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home';
import Occurences from './components/Home/Occurences';
import Signup from "./components/Auth/Signup"
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Home />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/Occurences" element={<Home />} />

        <Route path="/Occurences/:OccurenceId" element={<Occurences />} />



      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
