import React from "react";
import Navbar from "../component/Home/Navbar/Navbar.jsx";
import Intro from "../component/Home/Intro/Intro.jsx"
import Card from "../component/Home/Work/Services.jsx"
import Staff from "../component/Home/Staff/Staff.jsx"


const Home = () => {
    return (
        <div className="PageHome">
            <Navbar/>
            <Intro/>
            <Card/>
            <Staff/>
        </div>
    );
};

export default Home;