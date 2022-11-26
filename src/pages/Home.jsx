import React, {useState, useEffect} from "react";
import Navbar from "../component/Home/Navbar/Navbar.jsx";
import Intro from "../component/Home/Intro/Intro.jsx"
import Card from "../component/Home/Work/Services.jsx"
import Staff from "../component/Home/Staff/Staff.jsx"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUser} from './../redux/userSlice'
const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {user, isLogin } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getUser())
    }, [])

    useEffect(() => {
        if (!isLogin) {
            navigate('/login');
        }
    }, [isLogin, navigate, dispatch]);

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