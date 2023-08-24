import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./mobileNavBar.module.scss";

const MobileNavBar = () => {
  return (
    <nav className={styles["mobile-nav"]}>
      <Link legacyBehavior href={"/"}>
        <a className={styles["nav-link"]}>
          <FontAwesomeIcon
            icon={faHome}
            className={styles["nav-icon"]}
            style={{ color: "black" }}
          />
        </a>
      </Link>
      <Link legacyBehavior href={"/"}>
        <a className={styles["nav-link"]}>
          <FontAwesomeIcon
            icon={faHeart}
            className={styles["nav-icon"]}
            style={{ color: "black" }}
          />
        </a>
      </Link>
    </nav>
  );
};

export default MobileNavBar;
