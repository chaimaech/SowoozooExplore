import React, { createContext } from "react";
import { WP_API_Posts } from "../Services/Acf.types";
import { useWpPostService } from "../Services/useWpPostService";

interface PostProviderProps {
  posts?: WP_API_Posts;
  loading: boolean;
  error: string | undefined;
  refresh: (categories: number[]) => Promise<void>;
}

export const PostContext = createContext<PostProviderProps>({} as PostProviderProps);
export const usePostContext = (): PostProviderProps => React.useContext(PostContext);

export const PostProvider = ({ children }: React.PropsWithChildren<{}>): JSX.Element => {
  const { posts, loading, error, refresh } = useWpPostService();

  return (
    <PostContext.Provider value={{ posts, loading, error, refresh }}>
      {children}
    </PostContext.Provider>
  );
};
