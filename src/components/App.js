import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Places from "./Places/Places";

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
    )
}

export default App;
