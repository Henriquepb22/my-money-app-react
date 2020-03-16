import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Messages from "../common/msg/messages";

import Routes from "./routes";

const App = () => (
    <HashRouter>
        <div className="wrapper">
            <Header />
            <SideBar />
            <Routes />
            <Footer />
            <Messages />
        </div>
    </HashRouter>
);

export default App;
