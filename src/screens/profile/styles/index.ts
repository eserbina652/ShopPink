import styled from "styled-components";

export const AdditionalInformation = styled.div`
  display: flex;
  top: 10vh;
  left: 5vw;
  max-width: 70vw;
  padding: 20px;
  position: relative;
  border: deeppink 2px solid;
  background: linear-gradient(
    0deg,
    rgb(255, 255, 255) 20%,
    rgb(255, 192, 203) 50%
  );
  justify-content: space-between;
  border-radius: 20px;
  flex: 2 1 50%;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px;
`;
export const UserWrap = styled.div`
  position: relative;
  left: 10vw;
  top: 2vw;
  display: flex;
  flex: 0 1 75%;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  border: deeppink 2px solid;
  background: linear-gradient(
    0deg,
    rgb(255, 192, 203) 20%,
    rgb(255, 255, 255) 50%
  );
  #descriptionIMG {
    width: 50px;
  }
`;

export const UserText = styled.p`
  align-items: flex-start;
  font-size: 20px;
`;

export const UserTextWrap = styled.div`
  border: deeppink 2px solid;
  margin: 0 0 0 50px;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(
    0deg,
    rgb(255, 192, 203) 20%,
    rgb(255, 255, 255) 50%
  );
`;

export const WrapSearchProfile = styled.div`
  display: flex;
`;
export const ImageSearchProfile = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const AllSearchProfileBox = styled.div`
  display: flex;
  margin: 0 90px 0 10vw;
  position: relative;
  flex-direction: column;
  justify-self: flex-end;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  position: sticky;
  top: 140px;
`;
