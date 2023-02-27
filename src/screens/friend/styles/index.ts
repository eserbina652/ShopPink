import styled from "styled-components";

export const ActivityPageWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 20vh 0 0 0;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 246, 246, 1) 70%,
    rgba(255, 192, 203, 1) 100%
  );
`;
export const PostsHeader = styled.p`
  color: deeppink;
  font-size: 25px;
  border-top: pink 2px solid;
  padding-top: 20px;
  font-weight: bold;
  text-align: center;
`;
export const PostWrap = styled.div`
  border: deeppink 2px solid;
  border-radius: 40px;
  margin: 5vh 5vw 5vh 5vw;
  background-color: rgba(255, 192, 203, 0.48);
  box-shadow: 10px 10px 10px 1px rgb(146, 137, 157);
`;

export const PostTextWrap = styled.div`
  padding: 0 40px 10px 40px;
`;

export const PostText = styled.p<{ isTag?: boolean }>`
  font-size: ${(props) => (props.isTag ? "18px" : "20px")};
`;

export const PostReactionBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  border-top: 1px pink solid;
`;

export const TagsWrap = styled.div`
  display: flex;
  padding: 0 20px 0 0;
`;
export const PostImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
