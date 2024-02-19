import "./App.css";
import Events from "./components/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
