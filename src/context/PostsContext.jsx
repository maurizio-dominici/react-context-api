import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const apiUrl = "http://localhost:3000";
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios.get(`${apiUrl}/posts`).then((res) => {
      setPosts(res.data.filteredPosts);
    });
  };

  useEffect(fetchPosts, []);

  const postsData = { posts };
  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
}

function usePosts() {
  return useContext(PostsContext);
}
// Esportiamo il nostro provider ed il nostro hook
export { PostsProvider, usePosts };
