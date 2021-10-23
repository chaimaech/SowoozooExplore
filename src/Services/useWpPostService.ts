import { useEffect, useState } from "react";
import { WP_API_Posts } from "./Acf.types";
import { getWpPosts } from "./WpService";

interface WordpressServiceProps {
  posts?: WP_API_Posts;
  loading: boolean;
  error?: string;
  refresh: (categories: number[]) => Promise<void>;
}

// TODO probs should move to provider or cache this
export const useWpPostService = (): WordpressServiceProps => {
  const [posts, setPosts] = useState<WP_API_Posts | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    getPosts([]);
  }, []);

  const getPosts = async (categories: number[]): Promise<void> => {
    setError(undefined);
    setLoading(true);

    return await getWpPosts(categories)
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    posts,
    loading,
    error,
    refresh: getPosts,
  };
};
