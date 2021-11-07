import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Router } from "./Layout/Routes";
import { CategoryProvider } from "./Providers/CategoryProvider";
import { PostProvider } from "./Providers/PostProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CategoryProvider>
          <PostProvider>
            <Layout>
              <Router />
            </Layout>
          </PostProvider>
        </CategoryProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
