import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

// https://clone-b36a9.web.app

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/search"
            element={
              <>
                <SearchPage />
              </>
            }
          />
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
