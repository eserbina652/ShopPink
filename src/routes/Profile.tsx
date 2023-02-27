import React, { useEffect, useState } from "react";
import ProductApi from "../api/productApi/ProductApi";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  AllSearchProfileBox,
  ImageSearchProfile,
  ProfileWrapper,
  UserText,
  WrapSearchProfile,
} from "../screens/profile/styles";
import { InputSearch } from "../common/search/styles";
import { friends } from "../assets";
import { AllSearchedUser } from "../common/search/searchedProduct/styles";
import { User } from "../api/usersApi/types/types";
import SearchedUsers from "../screens/profile/SearchedUsers";
import AboutUser from "../screens/friend/additionalInformation/AboutUser";
import { useLocation } from "react-router-dom";
import { onLogin } from "../store/reducers/auth";
import { useDispatch } from "react-redux";
import { Text } from "../screens/shopBasket/style";

const Profile = () => {
  const user = useTypedSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState<User[]>([]);
  const [userDropMenu, setUserDropMenu] = useState(false);
  const user2 = useLocation();
  console.log("user", user);
  console.log("user2", user2);

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
    let id = localStorage.getItem("userId");
    if (id) {
      void getUser(Number(id));
    }
  }, []);

  useEffect(() => {
    if (searchText) {
      setUserDropMenu(true);
    } else {
      setUserDropMenu(false);
    }
  }, [searchText.length]);

  const onClose = () => {
    setSearchText("");
  };

  const searchUser = async (userName: string) => {
    try {
      const res = await ProductApi.getSearchedUser(userName);
      console.log("Information from getSearchedUser", res);
      setUserList(res.users);
    } catch (e) {
      console.log("searchUser", e);
    }
  };

  useEffect(() => {
    if (searchText) {
      const delay = setTimeout(() => {
        void searchUser(searchText);
      }, 500);

      return () => clearTimeout(delay);
    }
  }, [searchText]);

  // if (!user) {
  //   return null;
  // }

  return (
    <>
      {!!user ? (
        <>
          <ProfileWrapper>
            <AllSearchProfileBox>
              <WrapSearchProfile>
                <UserText>Search friends</UserText>
                <ImageSearchProfile src={friends} />
              </WrapSearchProfile>
              <InputSearch
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </AllSearchProfileBox>
            {userDropMenu && (
              <AllSearchedUser>
                {searchText &&
                  userList.map((el, index) => {
                    return (
                      <SearchedUsers
                        onSelect={onClose}
                        user={el}
                        index={index}
                        key={index.toString()}
                      />
                    );
                  })}
              </AllSearchedUser>
            )}
          </ProfileWrapper>
          <AboutUser user={user} />
        </>
      ) : (
        <Text>LOADING</Text>
      )}
    </>
  );
};

export default Profile;
