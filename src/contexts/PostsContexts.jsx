import { createContext, useContext, useEffect, useState } from "react";

const customApiUrl = import.meta.env.VITE_API_URL;

const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  //   const fetchPosts = () => {
  //     fetch(customApiUrl)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPostsData(data.filteredPosts);
  //       });
  //   };

  const postsData = [
    {
      title: "Articolo 1",
    },
  ];

  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);

  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
};

export const postsContext = () => {
  return useContext(PostsContext);
};
