import React, { useEffect, useState } from "react";
import {
  PostImage,
  PostReactionBlock,
  PostText,
  PostTextWrap,
  PostWrap,
  TagsWrap,
} from "../styles";
import { Text } from "../../shopBasket/style";
import { Image } from "../../productPage/styles";
import { reaction } from "../../../assets";
import { ImageSearch } from "../../../common/search/styles";
import { Post } from "../types/types";

interface IUserActivity {
  post: Post;
  index: number;
}
const UserActivity = ({ post }: IUserActivity) => {
  console.log("post", post);
  return (
    <PostWrap>
      <PostTextWrap>
        <Text isHeader={true}>{post.title}</Text>
        <PostText isTag={false}>{post.body}</PostText>
      </PostTextWrap>
      <PostReactionBlock>
        <TagsWrap>
          <PostText isTag={true}>#{post.tags[0]}</PostText>
          <PostText isTag={true}>#{post.tags[1]}</PostText>
        </TagsWrap>
        <PostText isTag={true}>{post.reactions}</PostText>
        <PostImage src={reaction} />
      </PostReactionBlock>
    </PostWrap>
  );
};

export default UserActivity;
