import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemsPage } from "./pages/ItemsPage";
import { ItemsFormPage } from "./pages/ItemsFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />

        <Routes>
          <Route path="/" element={<Navigate to="/items" />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items-create" element={<ItemsFormPage />} />
          <Route path="/items/:id" element={<ItemsFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
