import React from "react";
import { Router } from "./Layout/Routes";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
