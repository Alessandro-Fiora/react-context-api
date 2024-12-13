import PostCard from "../components/PostCard";
import DeleteModal from "../components/DeleteModal";

export default function PostsList({ articles, deleteArticle }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
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
          onClick={deleteArticle}
        />
      ))}
    </>
  );
}
