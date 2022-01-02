import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Profile from "./Profile.jsx";
import Places from "./Places.jsx";
import { api } from "../utils/Api";

const App = () => {
  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
      ([user, cards]) => {
        setUserInfo(user);
        setCards(cards);
      }
    );
  }, []);

  return (
    <div className="body">
      <div className="page">
        <Header />
        <main className="content">
          <Profile userInfo={userInfo} />
          <Places cards={cards} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
