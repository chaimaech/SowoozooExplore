import { WP_REST_API_Post } from "wp-types";
import { WP_API_RunEpisode } from "./AcfPost.types";

// Extend the WP REST API interfaces with ACF fields
export type WP_API_Posts = WP_API_RunEpisode[];
export type WP_API_Post = WP_API_RunEpisode;

// Post interface
export interface WP_ACF_API_Post_Base extends WP_REST_API_Post {
  // ACF category
  categories: number[];
}
