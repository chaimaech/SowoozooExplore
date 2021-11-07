import axios from "axios";
import { WP_REST_API_Categories } from "wp-types";
import { WP_API_Posts } from "./Acf.types";
import { WordpressServiceUrl } from "./Configs";

export const getWpPosts = async (categories: number[]): Promise<WP_API_Posts> => {
  const categoriesParam = categories.length > 0 ? categories.join(",") : undefined;

  return await axios({
    method: "get",
    url: `${WordpressServiceUrl}/posts`,
    params: {
      categories: categoriesParam,
    },
  }).then((response) => {
    console.log("getPosts response", response);
    return response.data as unknown as WP_API_Posts;
  });
};

export const getWpCategories = async (): Promise<WP_REST_API_Categories> => {
  return await axios({
    method: "get",
    url: `${WordpressServiceUrl}/categories`,
  }).then((response) => {
    console.log("getCategories response", response);
    return response.data as unknown as WP_REST_API_Categories;
  });
};
