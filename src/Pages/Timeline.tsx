import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Category, useCategoryContext } from "../Providers/CategoryProvider";
import { usePostContext } from "../Providers/PostProvider";
import { WP_API_Post } from "../Services/Acf.types";

export const Timeline = () => {
  const { posts, loading, error, refresh } = usePostContext();

  const { categories } = useCategoryContext();
  const buttonsDisabled = loading;

  // TODO separate to loading/error component
  if (!posts) {
    return <div>Loading ...</div>;
  }
  if (error) {
    <div>Error: {error}</div>;
  }

  // TODO actually filter lol
  const filterByCategory = (categories: number[]): void => {
    refresh(categories);
  };

  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100%" }}>
      <div
        style={{
          flex: "0",
          margin: "20px",
          paddingBottom: "20px",
          borderBottom: "1px solid white",
        }}
      >
        <FilterButtons
          categories={categories}
          disabled={buttonsDisabled}
          onClick={filterByCategory}
        />
      </div>
      <div style={{ flex: "1 1 auto" }}>
        <VerticalTimeline>
          {posts.length > 0 && posts.map((post, index) => <TimelineCard key={index} post={post} />)}
          {posts.length <= 0 && <>No results for this category :D</>}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export const FilterButtons = ({
  categories,
  disabled,
  onClick,
}: {
  categories?: Category[];
  disabled: boolean;
  onClick: (category: number[]) => void;
}): React.ReactElement => {
  return (
    <>
      <button disabled={disabled} onClick={() => onClick([])}>
        All categories
      </button>
      {categories &&
        categories.map((category) => (
          <button key={category.id} disabled={disabled} onClick={() => onClick([category.id])}>
            {category.name}
          </button>
        ))}
    </>
  );
};

export const TimelineCard = ({ post }: { post: WP_API_Post }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={post.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      // icon={<WorkIcon />}
    >
      {Object.keys(post.acf).length > 0 && <h1>ACF: {post.acf.episode_name}</h1>}

      <div
        className="vertical-timeline-element-title"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <p style={{ overflow: "auto" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </VerticalTimelineElement>
  );
};
