import React from 'react';
import {HeaderLinks} from "../appStyles";
import SideBar from "./sideBar/SideBar";
import {Link, useLocation} from "react-router-dom";
import Search from "./search/Search";
import {onLogin} from "../store/reducers/auth";
import {useDispatch} from "react-redux";

const Navbar = () => {
    const currentPath = useLocation();
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(onLogin(null));
        localStorage.clear();
    };
    return (
        <>
            <HeaderLinks isBold={false}>
                <SideBar />
            </HeaderLinks>
            <HeaderLinks
                isBold={true}
                isActive={currentPath.pathname === "/home"}
            >
                <Link to={"/home"}>Home</Link>
            </HeaderLinks>
            <HeaderLinks
                isBold={true}
                isActive={currentPath.pathname === "/shopBasket"}
            >
                <Link to={"/shopBasket"}>Basket</Link>
            </HeaderLinks>
            <Search />
            <HeaderLinks
                isBold={true}
                isActive={currentPath.pathname === "/profile"}
            >
                <Link to={"/profile"}>Profile</Link>
            </HeaderLinks>
            <HeaderLinks isBold={true} onClick={() => handleLogOut()}>
                LogOut
            </HeaderLinks>
        </>
    );
};

export default Navbar;