import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove, isLoading }) => {
  return (
    <div>
      {/* prettier-ignore */}
      <h1 style={{ textAlign: "center" }}>
      {isLoading ? "Идёт загрузка..." : ( posts.length > 0 ? title : "Посты не найдены")}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={300} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
