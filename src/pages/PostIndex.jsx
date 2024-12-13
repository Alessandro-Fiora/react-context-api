import { useState, useEffect } from "react";
import { postsContext } from "../contexts/PostsContexts";
import PostCard from "../components/PostCard";
import DeleteModal from "../components/DeleteModal";

const customApiUrl = import.meta.env.VITE_API_URL;

export default function PostIndex() {
  const categories = ["HTML", "CSS", "JS"];

  const { posts: articles, getArticles } = postsContext();

  // ^ DESTROY
  const fetchDestroyArticle = (id) => {
    fetch(customApiUrl + id, {
      method: "DELETE",
    })
      .then((res) => res)
      .then((data) => {
        getArticles();
      });
  };

  return (
    <div className="container py-5">
      <h1 className="mb-3">All posts</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {/* CARDS FOR POSTS */}

        {articles
          ? articles.map(
              (article) =>
                article.title && (
                  <PostCard
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    img={article.img}
                  />
                )
            )
          : "niente articoli"}
      </div>

      {/* MODALS TO DELETE ARTICLES */}

      {articles.map((article) => (
        <DeleteModal
          key={article.id}
          id={article.id}
          title={article.title}
          onClick={fetchDestroyArticle}
        />
      ))}
    </div>
  );
}
