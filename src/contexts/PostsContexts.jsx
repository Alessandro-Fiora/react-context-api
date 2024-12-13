import { createContext, useContext, useEffect, useState } from "react";

const customApiUrl = import.meta.env.VITE_API_URL;

const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const fetchPosts = () => {
    fetch(customApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setPostsData({ ...postsData, posts: data.filteredPosts });
      });
  };

  const fetchDestroyArticle = (id) => {
    fetch(customApiUrl + id, {
      method: "DELETE",
    })
      .then((res) => res)
      .then((data) => {
        fetchPosts();
      });
  };

  const [postsData, setPostsData] = useState({
    posts: [],
    getArticles: fetchPosts,
    deleteArticle: fetchDestroyArticle,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
};

export const postsContext = () => {
  return useContext(PostsContext);
};
