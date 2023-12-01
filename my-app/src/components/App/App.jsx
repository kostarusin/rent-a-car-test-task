// import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "../../pages/Home/Home";
import Catalogue from "../../pages/Catalogue/Catalogue";
import Favorite from "../../pages/Favorite/Favorite";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
