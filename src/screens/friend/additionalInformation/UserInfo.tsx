import React from "react";
import {
  AdditionalInformation,
  DescriptionBox,
  UserText,
} from "../../profile/styles";

//@ts-ignore
const UserInfo = ({ user }: IAboutUser) => {
  return (
    <>
      <AdditionalInformation>
        <DescriptionBox>
          <UserText>Address: {user?.address?.address}</UserText>
          <UserText>City: {user?.address?.city}</UserText>
          <UserText>State: {user?.address?.state}</UserText>
          <UserText>Postal code: {user?.address?.postalCode}</UserText>
        </DescriptionBox>
        <DescriptionBox>
          <UserText>Graduated from: {user?.university}</UserText>
          <UserText>Current job: {user?.company?.title}</UserText>
          <UserText>First name: {user?.firstName}</UserText>
          <UserText>Last name: {user?.lastName}</UserText>
        </DescriptionBox>
        <DescriptionBox>
          <UserText>Eye color: {user?.eyeColor}</UserText>
          <UserText>Hair color: {user?.hair?.color}</UserText>
          <UserText>Weight: {user?.weight}</UserText>
          <UserText>Height: {user?.height}</UserText>
        </DescriptionBox>
      </AdditionalInformation>
    </>
  );
};

export default UserInfo;
