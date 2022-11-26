import React from 'react'
import { useState } from 'react'
// import Toggle from "../Toggle/Toggle";
import 'boxicons'
import './Navbar.scss'
import '../../../sass/global.scss'
import Noti from './Noti/Noti.jsx'
import Search from './Search/Search.jsx'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../../Home/home.css'
const Navbar = () => {
    const [buttonNoti, setButtonNoti] = useState(false)
    const [buttonSearch, setButtonSearch] = useState(false)
    const navigate = useNavigate()
    function handleSearch(set) {
        setButtonNoti(false)
        return setButtonSearch(!set)
    }
    function handleNoti(set) {
        setButtonSearch(false)
        return setButtonNoti(!set)
    }
    const handleLogout = (e) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        navigate('/login')
    }

    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">FANAXON</div>
                {/* <Toggle /> */}
            </div>
            <div className="n-mid">
                <div className="n-list">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/user-profile">Patient</Link>
                        </li> */}
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="n-right">
                <box-icon onClick={() => handleSearch(buttonSearch)} name="search"></box-icon>
                <box-icon onClick={() => handleNoti(buttonNoti)} name="bell"></box-icon>
                <box-icon name="user" onClick={() => {navigate('/user-profile')}}></box-icon>
                <button className="btn btn-primary" onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
            <Noti trigger={buttonNoti}></Noti>
            <Search trigger={buttonSearch}></Search>
        </div>
    )
}
export default Navbar
