import React from "react";
import {
  AdditionalInformation,
  DescriptionBox,
  ProfileWrap,
  UserImg,
  UserText,
  UserTextWrap,
  UserWrap,
} from "../../profile/styles";
import { User } from "../../../api/usersApi/types/types";
import UserInfo from "./UserInfo";

interface IAboutUser {
  user: User;
}
const AboutUser = ({ user }: IAboutUser) => {
  // console.log('user', user)
  return (
    <ProfileWrap>
      <UserWrap>
        <div>
          <UserImg src={user?.image} alt={user?.firstName} />
        </div>
        <UserTextWrap>
          <UserText>Username: {user?.username}</UserText>
          <UserText>Age: {user?.age}</UserText>
          <UserText>Gender: {user?.gender}</UserText>
          <UserText>E-mail address: {user?.email}</UserText>
          <UserText>Phone number: {user?.phone}</UserText>
        </UserTextWrap>
      </UserWrap>
      <UserInfo user={user} />
    </ProfileWrap>
  );
};

export default AboutUser;
