// IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import PostsPage from "./pages/posts/PostsPage";
import PostDetails from "./pages/posts/PostDetails";
import { PostsProvider } from "./context/PostsContext";

export default function App() {
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            {/* Rotte che hanno in comune lo stesso Layout */}
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutUs />}></Route>
              {/* Rotte che hanno in comune lo stesso path /posts */}
              <Route path="/posts">
                <Route path="" element={<PostsPage />}></Route>
                <Route path=":id" element={<PostDetails />}></Route>
              </Route>
              {/* Rotta per le pagine non trovate */}
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  );
}
