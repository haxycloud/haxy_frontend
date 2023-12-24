import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home';
import Occurences from './components/Home/Occurences';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/Occurences" element={<Home />} />
          <Route path="/Occurences/:OccurenceId" element={<Occurences />} />


        
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
