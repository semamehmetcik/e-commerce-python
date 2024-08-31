import "./App.css";
import React from "react";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <React.Fragment>
      <BlogDetailsPage />
      <ProductDetailsPage />
    </React.Fragment>
  );
}

export default App;
