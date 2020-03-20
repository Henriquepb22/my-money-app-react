import React from "react";
import { HashRouter } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Messages from "../components/Messages";

import Routes from "./routes";

const App = () => (
    <HashRouter>
        <div className="wrapper">
            <Header />
            <Sidebar />
            <Routes />
            <Footer />
            <Messages />
        </div>
    </HashRouter>
);

export default App;
