import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./Filter.module.scss";

export const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={30}
    height={30}
    viewBox="0 0 30 30"
    backgroundColor="#1e1e1e"
    foregroundColor="#121212"
    {...props}
  >
    <rect x="49" y="108" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="0" ry="0" width="30" height="30" />
  </ContentLoader>
);
