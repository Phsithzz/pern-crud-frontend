//layout
import LayoutHome from "./layouts/LayoutHome";
import LayoutProduct from "./layouts/LayoutProduct";
//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//page
import NotFoundPage from "./pages/NotFoundPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LayoutHome />} />
          <Route path="/product" element={<LayoutProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
