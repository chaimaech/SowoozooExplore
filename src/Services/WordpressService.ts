import axios from "axios";
import { WordpressServiceUrl } from "./Configs";
import { WP_REST_API_Posts } from "wp-types";
import { useEffect, useState } from "react";

interface WordpressServiceProps {
  posts?: WP_REST_API_Posts;
  loading: boolean;
  error?: string;
  refresh: () => Promise<void>;
}

export const useWordpressService = (): WordpressServiceProps => {
  const [posts, setPosts] = useState<WP_REST_API_Posts | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async (): Promise<void> => {
    setError(undefined);
    setLoading(true);

    return await axios({
      method: "get",
      url: `${WordpressServiceUrl}/posts`,
    })
      .then((response) => {
        console.log("getPosts response", response);
        const newPosts = response.data as unknown as WP_REST_API_Posts;
        setPosts(newPosts);
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
