import { postsContext } from "../contexts/PostsContexts";
import PostsList from "../components/PostsList";

const customApiUrl = import.meta.env.VITE_API_URL;

export default function PostIndex() {
  const { posts: articles, deleteArticle } = postsContext();

  return (
    <div className="container py-5">
      <h1 className="mb-3">All posts</h1>
      <PostsList articles={articles} deleteArticle={deleteArticle} />
    </div>
  );
}
