import { WP_ACF_API_Post_Base } from "./Acf.types";

// Extend the base WP Post type for each ACF Category
export interface WP_API_RunEpisode extends WP_ACF_API_RunEpisode, WP_ACF_API_Post_Base {}
export interface WP_ACF_API_RunEpisode {
  acf: {
    episode_name: string;
    episode_number: string;
    // DD/MM/YYYY
    publication_date: string;
    members: {
      ID: number;
      post_author: string;
      // ISO 8601
      post_date: string;
      // ISO 8601
      post_date_gmt: string;
      post_content: string;
      post_title: string;
      post_excerpt: string;
      post_status: "publish" | string;
      comment_status: "closed" | string;
      ping_status: string;
      post_password: string;
      post_name: string;
      to_ping: string;
      pinged: string;
      // ISO 8601
      post_modified: string;
      // ISO 8601
      post_modified_gmt: string;
      post_content_filtered: string;
      post_parent: number;
      guid: string;
      menu_order: number;
      post_type: "post" | string;
      post_mime_type: string;
      comment_count: string;
      filter: "raw" | string;
    };
  };
}
