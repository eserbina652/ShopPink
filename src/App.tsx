import React, { useEffect } from "react";
import "./App.css";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Registration } from "./routes/Registration";
import Home from "./routes/Home";
import { useDispatch } from "react-redux";
import { onLogin } from "./store/reducers/auth";
import { useTypedSelector } from "./hooks/useTypedSelector";
import CategoryList from "./routes/CategoryList";
import ProductPage from "./routes/ProductPage";
import { AllPagesWrapper, Header, HeaderLinks } from "./appStyles";
import BasketList from "./routes/BasketList";
import PopupDelete from "./popups/popupDelete/PopupDelete";
import ProductApi from "./api/productApi/ProductApi";
import Profile from "./routes/Profile";
import Friend from "./routes/Friend";
import Navbar from "./common/Navbar";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useTypedSelector((state) => state.auth.user);
  const isOpenDelete = useTypedSelector((state) => state.popups.isOpenDelete);

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


  console.log("user", user);
  return (
    <>
      <AllPagesWrapper isLogined={!!user}>
        {!!user ? (
          <Header>
            <Navbar/>
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
