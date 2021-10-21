import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WP_REST_API_Post } from "wp-types";
import { useWordpressService } from "../Services/WordpressService";

export const Timeline = () => {
  const { posts, error } = useWordpressService();

  // TODO separate to loading/error component
  if (!posts) {
    return <div>Loading ...</div>;
  }
  if (error) {
    <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: "flex", width: "100%", background: "#BF7FBF" }}>
      <VerticalTimeline layout="2-columns">
        {posts.map((post, index) => (
          <TimelineCard key={index} post={post} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export const TimelineCard = ({ post }: { post: WP_REST_API_Post }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={post.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      // icon={<WorkIcon />}
    >
      <div
        className="vertical-timeline-element-title"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <p style={{ overflow: "auto" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </VerticalTimelineElement>
  );
};
