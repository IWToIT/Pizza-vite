import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 data-testid="h1-tag">
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p className={styles.description}>
        Unfortunately this page doesn't exist in our shop-online.
      </p>
    </div>
  );
};

export default NotFoundBlock;
