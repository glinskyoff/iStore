import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Cards.module.scss";

export const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={356}
    height={509}
    viewBox="0 0 356 509"
    className={styles.skeleton}
    backgroundColor="#1e1e1e"
    foregroundColor="#121212"
    {...props}
  >
    <rect x="49" y="108" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="10" ry="10" width="356" height="509" />
  </ContentLoader>
);
