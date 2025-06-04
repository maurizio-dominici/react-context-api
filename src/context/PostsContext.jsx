import { createContext, useContext, useState } from "react";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState(0);
  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

function useCount() {
  const context = useContext(PostsContext);
  return context;
}
// Esportiamo il nostro provider ed il nostro hook
export { PostsProvider, useCount };
