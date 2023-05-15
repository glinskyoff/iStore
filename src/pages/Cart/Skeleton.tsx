import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={702}
    height={160}
    viewBox="0 0 702 160"
    backgroundColor="#1e1e1e"
    foregroundColor="#121212"
    {...props}
  >
    <rect x="49" y="108" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="10" ry="10" width="702" height="160" />
  </ContentLoader>
);
