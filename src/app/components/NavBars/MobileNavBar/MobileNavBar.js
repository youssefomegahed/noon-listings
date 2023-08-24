import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./mobileNavBar.module.scss";

const MobileNavBar = () => {
  return (
    <nav className={styles["mobile-nav"]}>
      <Link href={"/"} className={styles["nav-link"]}>
        <FontAwesomeIcon
          icon={faHome}
          className={styles["nav-icon"]}
          style={{ color: "black" }}
        />
      </Link>
      <Link href={"/"} className={styles["nav-link"]}>
        <FontAwesomeIcon
          icon={faHeart}
          className={styles["nav-icon"]}
          style={{ color: "black" }}
        />
      </Link>
    </nav>
  );
};

export default MobileNavBar;
