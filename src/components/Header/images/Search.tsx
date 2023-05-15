import styles from "../Header.module.scss";

export const Search: React.FC = () => {
  return (
    <svg
      className={styles.search}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_310_379)">
        <path
          d="M15.7789 15.75L12.4115 12.3795M14.2776 7.875C14.2776 9.56576 13.6054 11.1873 12.4088 12.3828C11.2122 13.5784 9.58933 14.25 7.89713 14.25C6.20492 14.25 4.58203 13.5784 3.38547 12.3828C2.1889 11.1873 1.51667 9.56576 1.51667 7.875C1.51667 6.18424 2.1889 4.56274 3.38547 3.36719C4.58203 2.17165 6.20492 1.5 7.89713 1.5C9.58933 1.5 11.2122 2.17165 12.4088 3.36719C13.6054 4.56274 14.2776 6.18424 14.2776 7.875V7.875Z"
          stroke="#646669"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_310_379">
          <rect
            width="18.0154"
            height="18"
            fill="white"
            transform="translate(0.0153923)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
