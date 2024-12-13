import { createContext, useContext, useEffect, useState } from "react";

const customApiUrl = import.meta.env.VITE_API_URL;

// # CREO UN NUOVO CONTESTO
const PostsContext = createContext();

// # EXPORT DEL PROVIDER
export const PostsContextProvider = ({ children }) => {
  // API fetch Index dei post e set Posts
  const fetchPosts = () => {
    fetch(customApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setPostsData({ ...postsData, posts: data.filteredPosts });
      });
  };

  // API fetch Destroy di un post
  const fetchDestroyArticle = (id) => {
    fetch(customApiUrl + id, {
      method: "DELETE",
    })
      .then((res) => res)
      .then(() => {
        fetchPosts();
      });
  };

  // Oggetto che rappresenta il contesto
  const [postsData, setPostsData] = useState({
    posts: [],
    getArticles: fetchPosts,
    deleteArticle: fetchDestroyArticle,
  });

  // Al caricamento del componente faccio la fetch all'Api per avere la lista dei post
  useEffect(() => {
    fetchPosts();
  }, []);

  // return user context provider
  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
};

// # EXPORT DEL CONTEXT PER I CONSUMERS
export const postsContext = () => {
  // Oggetto che rappresenta useContext
  return useContext(PostsContext);
};
