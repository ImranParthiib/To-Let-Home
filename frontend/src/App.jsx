import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className=" h-screen container mx-auto my-5">
        <h1 className="text-2xl font-bold mb-5">Welcome to To Let Home Finder</h1>
        <p>
          Find your dream home with To Let Home Finder. We have thousands of
          properties for you to choose from.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
