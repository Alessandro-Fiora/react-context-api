import { BrowserRouter, Routes, Route } from "react-router-dom";

// contexts
import { PostsContextProvider } from "./contexts/PostsContexts";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

// pages
import HomePage from "./pages/HomePage";
import OurTeamPage from "./pages/OurTeamPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostIndex from "./pages/PostIndex";
import PostShow from "./pages/PostShow";

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about" Component={OurTeamPage} />
            <Route path="/posts" Component={PostIndex} />
            <Route path="/posts/:id" Component={PostShow} />
            <Route path="*" Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContextProvider>
  );
}

export default App;
