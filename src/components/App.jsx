import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Profile from "./Profile.jsx";
import Places from "./Places.jsx";

const App = () => {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <main className="content">
          <Profile />
          <Places />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
