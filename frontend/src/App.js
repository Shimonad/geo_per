import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import WhyMePage from "./pages/WhyMePage";
import AboutPage from "./pages/AboutPage";
import ChallengesPage from "./pages/ChallengesPage";
import SolutionPage from "./pages/SolutionPage";
import DeepDivePage from "./pages/DeepDivePage";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/why-me" element={<WhyMePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/solutions" element={<SolutionPage />} />
            <Route path="/deepdive" element={<DeepDivePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;