import React from "react";
import { Router } from "./Layout/Routes";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { CategoryProvider } from "./Providers/CategoryProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CategoryProvider>
          <Layout>
            <Router />
          </Layout>
        </CategoryProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
