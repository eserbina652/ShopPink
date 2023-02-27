import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AboutUser from "./additionalInformation/AboutUser";
import UserActivity from "./additionalInformation/UserActivity";
import ProductApi from "../../api/productApi/ProductApi";
import { ISearchedPost } from "./types/types";
import { ActivityPageWrap, PostsHeader } from "./styles";
import { Nullable } from "../../utils/types";

const Friend = () => {
  const { state: user } = useLocation();
  const [post, setPost] = useState<Nullable<ISearchedPost>>(null);

  useEffect(() => {
    void getCurrentUserPost(user.id);
  }, []);

  const getCurrentUserPost = async (userId: number) => {
    try {
      const res = await ProductApi.getUserPost(userId);
      setPost(res);
    } catch (e) {
      console.log("currentUserERR", e);
    }
  };

  return (
    <>
      <AboutUser user={user} />
      <ActivityPageWrap>
        <PostsHeader>User's posts</PostsHeader>
        {post?.posts &&
          post?.posts.map((el, index) => {
            return (
              <UserActivity post={el} index={index} key={index.toString()} />
            );
          })}
      </ActivityPageWrap>
    </>
  );
};

export default Friend;
