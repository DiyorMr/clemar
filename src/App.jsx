import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import CatalogLayout from "./layout/CatalogLayout";
import Layout from "./layout/Layout";
import CatalogDetail from "./pages/catalog-detail/CatalogDetail";
import Catalog from "./pages/catalog/Catalog";
import News from "./pages/news/News";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route
            path="/catalog/:slug"
            element={
              <CatalogLayout>
                <Catalog />
              </CatalogLayout>
            }
          />
          <Route path="/catalog/:slug/:id" element={<CatalogDetail />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

{
  /* <Navbar />
<Header />
<TopProducts />
<Clean />
<Contact />
<Fotter /> */
}
