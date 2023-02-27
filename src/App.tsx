import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Registration } from "./screens/Registration/Registration";
import Home from "./screens/Home/Home";
import { useDispatch } from "react-redux";
import { onLogin } from "./store/reducers/auth";
import { useTypedSelector } from "./hooks/useTypedSelector";
import CategoryList from "./screens/categoryList/CategoryList";
import ProductPage from "./screens/productPage/ProductPage";
import { AllPagesWrapper, Header, HeaderLinks } from "./appStyles";
import SideBar from "./common/sideBar/SideBar";
import BasketList from "./screens/shopBasket/BasketList";
import PopupDelete from "./popups/popupDelete/PopupDelete";
import Search from "./common/search/Search";
import ProductApi from "./api/productApi/ProductApi";
import Profile from "./screens/profile/Profile";
import Friend from "./screens/friend/Friend";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useTypedSelector((state) => state.auth.user);
  const isOpenDelete = useTypedSelector((state) => state.popups.isOpenDelete);
  const currentPath = useLocation();

  const getUser = async (userID: number) => {
    try {
      const user = await ProductApi.getLoginedUsers(userID);
      console.log("Information from getLoginedUsers", user);
      dispatch(onLogin(user));
    } catch (e) {
      console.log("userErr", e);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      void getUser(Number(userId));
    }
  }, []);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      navigate("/");
    }
  }, [user]);

  const handleLogOut = () => {
    dispatch(onLogin(null));
    localStorage.clear();
  };
  console.log("user", user);
  return (
    <>
      <AllPagesWrapper isLogined={!!user}>
        {!!user ? (
          <Header>
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
          </Header>
        ) : (
          <Header>
            <HeaderLinks>LOADING</HeaderLinks>
          </Header>
        )}
        {isOpenDelete && <PopupDelete />}
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categoryList" element={<CategoryList />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/shopBasket" element={<BasketList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friend" element={<Friend />} />
        </Routes>
      </AllPagesWrapper>
    </>
  );
}

export default App;
